export function normalizeBasePath(pathname) {
  const path = String(pathname || "").replace(/\/$/, "");
  if (!path) {
    return "";
  }

  const lastSegment = path.split("/").pop() || "";
  if (!/\.[a-z0-9]+$/i.test(lastSegment)) {
    return path;
  }

  const basePath = path.slice(0, -lastSegment.length).replace(/\/$/, "");
  return basePath || "";
}

export function getBasePath() {
  return normalizeBasePath(window.location.pathname);
}
