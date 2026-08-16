from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
HUB_HEADER = (ROOT / "components" / "opentherm" / "hub.h").read_text()
HUB_CPP = (ROOT / "components" / "opentherm" / "hub.cpp").read_text()
OTB_PACKAGE = (ROOT / "openquatt" / "oq_boiler_opentherm.yaml").read_text()
Q_PROFILE = (
    ROOT / "openquatt" / "profiles" / "heatpump_controller_q.yaml"
).read_text()


class OtbPollingLifecycleContractTest(unittest.TestCase):
    def test_hub_owns_a_hard_polling_gate(self) -> None:
        self.assertIn("bool polling_enabled_ = false;", HUB_HEADER)
        self.assertIn("void suspend_polling();", HUB_HEADER)
        self.assertIn("this->polling_enabled_ = false;", HUB_CPP)
        self.assertIn("if (!this->polling_enabled_) {", HUB_CPP)
        self.assertIn("this->disable_loop();", HUB_CPP)

    def test_deferred_priority_preserves_active_conversation(self) -> None:
        self.assertIn(
            "void defer_priority_messages(MessageId first, MessageId second);",
            HUB_HEADER,
        )
        deferred_start = HUB_CPP.index(
            "void OpenthermHub::defer_priority_messages("
        )
        deferred_end = HUB_CPP.index(
            "void OpenthermHub::start_priority_polling(", deferred_start
        )
        deferred_method = HUB_CPP[deferred_start:deferred_end]
        self.assertNotIn("this->opentherm_->stop();", deferred_method)
        self.assertIn("if (!this->polling_enabled_)", deferred_method)
        self.assertIn("this->deferred_priority_pending_ = true;", deferred_method)

        activate_start = HUB_CPP.index(
            "void OpenthermHub::activate_priority_sequence_("
        )
        apply_start = HUB_CPP.index(
            "void OpenthermHub::apply_deferred_priority_()"
        )
        apply_end = HUB_CPP.index(
            "void OpenthermHub::start_conversation_()", apply_start
        )
        activate_method = HUB_CPP[activate_start:apply_start]
        self.assertIn("this->messages_ = {first, second};", activate_method)
        self.assertIn(
            "this->message_iterator_ = this->messages_.begin();", activate_method
        )
        self.assertIn("this->priority_sequence_active_ = true;", activate_method)
        apply_method = HUB_CPP[apply_start:apply_end]
        self.assertIn("this->priority_sequence_active_", apply_method)
        self.assertIn("this->message_iterator_ != this->messages_.end()", apply_method)
        self.assertIn(
            "this->activate_priority_sequence_(this->deferred_priority_first_, "
            "this->deferred_priority_second_);",
            apply_method,
        )
        self.assertIn("this->deferred_priority_pending_ = false;", apply_method)
        self.assertNotIn("this->opentherm_->stop();", apply_method)
        self.assertNotIn("last_conversation_start_", apply_method)
        self.assertNotIn("last_conversation_end_", apply_method)

        start_conversation_end = HUB_CPP.index(
            "void OpenthermHub::read_response_()", apply_end
        )
        start_conversation = HUB_CPP[apply_end:start_conversation_end]
        self.assertLess(
            start_conversation.index("this->apply_deferred_priority_();"),
            start_conversation.index(
                "if (this->message_iterator_ == this->messages_.end())"
            ),
        )

    def test_immediate_lifecycle_priority_cancels_deferred_start(self) -> None:
        immediate_start = HUB_CPP.index("void OpenthermHub::prioritize_messages(")
        immediate_end = HUB_CPP.index(
            "void OpenthermHub::defer_priority_messages(", immediate_start
        )
        immediate_method = HUB_CPP[immediate_start:immediate_end]
        self.assertIn("this->deferred_priority_pending_ = false;", immediate_method)
        self.assertIn("this->opentherm_->stop();", immediate_method)

        resume_start = HUB_CPP.index("void OpenthermHub::resume_polling()")
        suspend_start = HUB_CPP.index(
            "void OpenthermHub::suspend_polling()", resume_start
        )
        write_initial_start = HUB_CPP.index(
            "void OpenthermHub::write_initial_messages_", suspend_start
        )
        resume_method = HUB_CPP[resume_start:suspend_start]
        suspend_method = HUB_CPP[suspend_start:write_initial_start]
        self.assertIn("this->deferred_priority_pending_ = false;", resume_method)
        self.assertIn("this->deferred_priority_pending_ = false;", suspend_method)

    def test_fail_safe_off_sequences_remain_immediate(self) -> None:
        flush_start = OTB_PACKAGE.index("id: oq_otb_withdraw_and_flush")
        flush_end = OTB_PACKAGE.index("id: oq_otb_invalidate_telemetry", flush_start)
        flush_block = OTB_PACKAGE[flush_start:flush_end]
        self.assertIn("id(oq_otb_hub).prioritize_messages(", flush_block)
        self.assertLess(
            flush_block.index("esphome::opentherm::MessageId::STATUS"),
            flush_block.index("esphome::opentherm::MessageId::CH_SETPOINT"),
        )

        stop_start = OTB_PACKAGE.index(
            "if (applied_stop && opentherm_selected"
        )
        stop_end = OTB_PACKAGE.index("if (command_active)", stop_start)
        stop_block = OTB_PACKAGE[stop_start:stop_end]
        self.assertIn("id(oq_otb_hub).prioritize_messages(", stop_block)
        self.assertLess(
            stop_block.index("esphome::opentherm::MessageId::STATUS"),
            stop_block.index("esphome::opentherm::MessageId::CH_SETPOINT"),
        )

    def test_probe_state_is_authoritative_for_r1_polling(self) -> None:
        self.assertIn(
            "oq_otb::startup_probe_state.active()",
            OTB_PACKAGE,
        )
        self.assertIn(
            "oq_otb::should_keep_opentherm_polling(",
            OTB_PACKAGE,
        )
        self.assertIn(
            "id(oq_otb_hub).is_polling_enabled()",
            OTB_PACKAGE,
        )
        self.assertIn(
            "id(oq_otb_hub).suspend_polling();",
            OTB_PACKAGE,
        )

    def test_transport_transitions_use_hub_lifecycle_methods(self) -> None:
        lifecycle_yaml = OTB_PACKAGE + Q_PROFILE
        self.assertIn(
            "id(oq_otb_hub).start_priority_polling(",
            lifecycle_yaml,
        )
        self.assertIn(
            "id(oq_otb_hub).resume_polling();",
            lifecycle_yaml,
        )
        self.assertNotIn(
            "id(oq_otb_hub).enable_loop();",
            lifecycle_yaml,
        )

    def test_start_edge_prioritizes_setpoint_before_ch_status(self) -> None:
        self.assertIn(
            "!id(oq_otb_applied_command_active) && command_active",
            OTB_PACKAGE,
        )
        start_edge = OTB_PACKAGE.index("if (applied_start)")
        applied_state = OTB_PACKAGE.index(
            "id(oq_otb_applied_command_active) = command_active;", start_edge
        )
        start_block = OTB_PACKAGE[start_edge:applied_state]
        self.assertIn("id(oq_otb_hub).defer_priority_messages(", start_block)
        self.assertNotIn("id(oq_otb_hub).prioritize_messages(", start_block)
        self.assertLess(
            start_block.index("esphome::opentherm::MessageId::CH_SETPOINT"),
            start_block.index("esphome::opentherm::MessageId::STATUS"),
        )


if __name__ == "__main__":
    unittest.main()
