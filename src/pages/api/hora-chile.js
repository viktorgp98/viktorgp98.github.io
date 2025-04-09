import { Astro } from "astro";

export async function GET() {
  const ahora = new Date();
  const opciones = {
    timeZone: "America/Santiago",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const horaChile = ahora.toLocaleString("es-CL", opciones);

  return new Response(JSON.stringify({ hora: horaChile }), {
    headers: { "Content-Type": "application/json" },
  });
}
