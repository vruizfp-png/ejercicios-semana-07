import { db } from "@/src/db/db";
import { cafes } from "@/src/db/schema";

export default async function Home() {
  // Consultamos los cafés directamente desde la base de datos con Drizzle
  const listaCafes = await db.select().from(cafes);

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <header style={{ borderBottom: "2px solid #eaeaea", paddingBottom: "20px", marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>☕ Club Tueste Norte</h1>
        <p style={{ color: "#7f8c8d", margin: 0 }}>Panel de control de cafés y gestión de la semana 07</p>
      </header>

      <section>
        <h2 style={{ color: "#34495e" }}>Nuestros Cafés Disponibles</h2>
        <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
          {listaCafes.map((cafe) => (
            <div 
              key={cafe.id} 
              style={{ 
                border: "1px solid #e0e0e0", 
                borderRadius: "8px", 
                padding: "20px", 
                backgroundColor: "#fdfbf7",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>{cafe.nombre}</h3>
              <p style={{ margin: "5px 0", color: "#555" }}>🌍 <strong>Origen:</strong> {cafe.origen}</p>
              <p style={{ margin: "5px 0", color: "#555" }}>💰 <strong>Precio:</strong> {cafe.precio} €</p>
              <p style={{ margin: "5px 0", color: "#555" }}>🔥 <strong>Tueste:</strong> <span style={{ textTransform: "uppercase", fontSize: "0.85rem", background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>{cafe.tueste}</span></p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: "50px", borderTop: "1px solid #eaeaea", paddingTop: "20px", textAlign: "center", color: "#95a5a6", fontSize: "0.9rem" }}>
        Proyecto Next.js 16 + Drizzle ORM | Ejercicios Semana 07
      </footer>
    </main>
  );
}