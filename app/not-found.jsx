import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p>Volver a la página principal</p>
      <p>
         <Link href="/">Inicio</Link>
      </p>
    </div>
  );
}
