// Change this later when backend is deployed
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function registerUser(data) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getLogs() {
  const res = await fetch(`${API_URL}/logs`);
  return res.json();
}
