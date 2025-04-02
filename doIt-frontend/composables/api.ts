export async function fetchWithAuth<T>(
  url: string,
  options: any = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const headers = new Headers(options.headers || {});
  headers.append("Authorization", `Bearer ${token}`);

  if (!headers.has("Content-Type")) {
    headers.append("Content-Type", "application/json");
  }

  const response = await fetch(url, { ...options, headers });

  if (response.status === 403) {
    console.error("Token inválido, redirecionando...");
    localStorage.removeItem("token");
    window.location.href = "/login";
    throw new Error("Token inválido");
  }

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Erro na requisição");
  }

  return response.json();
}
