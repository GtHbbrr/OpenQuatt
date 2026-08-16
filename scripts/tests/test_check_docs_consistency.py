from __future__ import annotations

import io
import json
import os
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from unittest import mock

from scripts import check_docs_consistency


class DocsImpactExemptionTests(unittest.TestCase):
    def run_strict_check(
        self,
        pr_body: str,
        changed_file: str = "openquatt/oq_common.yaml",
    ) -> tuple[int, str]:
        with tempfile.TemporaryDirectory() as temp_dir:
            event_path = Path(temp_dir) / "event.json"
            event_path.write_text(
                json.dumps({"pull_request": {"body": pr_body}}),
                encoding="utf-8",
            )
            environment = {
                "GITHUB_EVENT_NAME": "pull_request",
                "GITHUB_EVENT_PATH": str(event_path),
            }
            arguments = [
                "check_docs_consistency.py",
                "--changed-only",
                "--strict",
                "--changed-file",
                changed_file,
            ]
            output = io.StringIO()
            with (
                mock.patch.dict(os.environ, environment, clear=False),
                mock.patch.object(sys, "argv", arguments),
                redirect_stdout(output),
            ):
                exit_code = check_docs_consistency.main()
        return exit_code, output.getvalue()

    def test_internal_oq_common_change_with_motivation_passes(self) -> None:
        exit_code, output = self.run_strict_check(
            """
## Documentatie

- [ ] Documentatie bijgewerkt voor de gebruikersgerichte wijziging
- [x] Geen documentatiewijziging nodig

Docs-impact motivatie:

Alleen interne Modbus-timers zijn gewijzigd; entities en gebruikersconfiguratie blijven gelijk.
"""
        )

        self.assertEqual(0, exit_code, output)
        self.assertIn("Docs consistency checks passed.", output)

    def test_user_entity_change_without_docs_or_motivation_fails(self) -> None:
        exit_code, output = self.run_strict_check(
            """
## Documentatie

- [ ] Documentatie bijgewerkt voor de gebruikersgerichte wijziging
- [ ] Geen documentatiewijziging nodig

Docs-impact motivatie:
""",
            changed_file="openquatt/oq_substitutions_common.yaml",
        )

        self.assertEqual(1, exit_code, output)
        self.assertIn("Gebruikersentiteiten en instellingen raakt gebruikersdocumentatie", output)
        self.assertNotIn("Service/debug entities changed", output)

    def test_companion_link_guard_fails_when_reference_is_removed(self) -> None:
        read_text = check_docs_consistency.read_text

        def text_without_companion_link(path: Path) -> str:
            text = read_text(path)
            if path == check_docs_consistency.REPO_ROOT / "docs/dashboard/README.md":
                return text.replace(
                    "https://github.com/OpenQuatt/home-assistant-openquatt",
                    "",
                )
            return text

        with mock.patch.object(
            check_docs_consistency,
            "read_text",
            side_effect=text_without_companion_link,
        ):
            exit_code, output = self.run_strict_check(
                "",
                changed_file="docs/dashboard/README.md",
            )

        self.assertEqual(1, exit_code, output)
        self.assertIn("Missing companion repository reference", output)


if __name__ == "__main__":
    unittest.main()
