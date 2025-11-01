export function checkApiKey(req) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const token = authHeader.slice(7).trim();
  if (token !== process.env.API_KEY) {
    return false;
  }
  return true;
}
