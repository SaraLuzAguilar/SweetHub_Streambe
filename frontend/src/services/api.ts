// frontend/src/services/api.ts

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

type FetchOptions = RequestInit & { json?: any };

export async function apiFetch(path: string, options: FetchOptions = {}) {
  const url = `${API_BASE}${path}`;

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(options.headers as Record<string, string>),
  };

  // JSON body
  if (options.json !== undefined) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.json);
  }

  // Token
  const token = localStorage.getItem("sweethub_token");
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, { ...options, headers });

  const text = await res.text();
  let data;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    const err: any = new Error(data?.message || "Error");
    err.status = res.status;
    err.body = data;
    throw err;
  }

  return data;
}
