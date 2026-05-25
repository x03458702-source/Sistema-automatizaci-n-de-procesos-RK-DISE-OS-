import React, { useState } from "react";

// --- Componentes de Apoyo ---

const ProductCard = ({ product, onAddToCart }) => (
  <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
    <div className="h-40 bg-gray-200 mb-4 rounded flex items-center justify-center">
      <span className="text-gray-500 italic">Diseño: {product.design}</span>
    </div>
    <h3 className="font-bold text-lg">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button
      onClick={() => onAddToCart(product)}
      className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Agregar al Carrito
    </button>
  </div>
);

// --- Componente Principal ---

export default function SistemaECommerce() {
  const [view, setView] = useState("catalogo"); // catalogo, carrito, seguimiento, admin
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);

  // Datos de ejemplo (Requerimiento 5, 6 y 7)
  const products = [
    { id: 1, name: "Camiseta Básica", price: 25, design: "Minimalista" },
    { id: 2, name: "Gorra Urbana", price: 15, design: "Vintage" },
    { id: 3, name: "Sudadera Tech", price: 45, design: "Futurista" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} añadido al carrito`);
  };

  const handleCheckout = () => {
    // Requerimiento 9, 10 y 11
    alert("Procesando pago... Venta registrada y stock actualizado.");
    setOrderStatus("En preparación");
    setCart([]);
    setView("seguimiento");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-blue-700">StoreSystem</h1>
        <div className="space-x-4">
          <button
            onClick={() => setView("catalogo")}
            className="text-gray-600 hover:text-blue-600"
          >
            Catálogo
          </button>
          <button
            onClick={() => setView("seguimiento")}
            className="text-gray-600 hover:text-blue-600"
          >
            Mis Pedidos
          </button>
          <button
            onClick={() => setView("carrito")}
            className="relative bg-gray-100 p-2 rounded-full"
          >
            🛒{" "}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </button>
        </div>
      </nav>

      <main className="p-6 max-w-6xl mx-auto">
        {/* VISTA: CATÁLOGO (Req 5, 6, 7, 8) */}
        {view === "catalogo" && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Catálogo de Productos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
              ))}
            </div>
          </section>
        )}

        {/* VISTA: CARRITO Y PAGO (Req 9, 11) */}
        {view === "carrito" && (
          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Finalizar Compra</h2>
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b pb-2">
                    <span>
                      {item.name} ({item.design})
                    </span>
                    <span className="font-bold">${item.price}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <h3 className="font-bold mb-2">Datos de Pago</h3>
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
                  >
                    Confirmar y Pagar
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* VISTA: SEGUIMIENTO (Req 3, 4) */}
        {view === "seguimiento" && (
          <section className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Estado de su Pedido</h2>
            <div className="p-10 bg-white rounded-xl shadow-inner border-2 border-dashed border-blue-200">
              <p className="text-gray-500 mb-2">ID Pedido: #88234</p>
              <div className="text-xl font-bold text-blue-600">
                {orderStatus || "No hay pedidos activos"}
              </div>
              {orderStatus && (
                <p className="mt-4 text-sm text-gray-400 italic">
                  * El representante físico está actualizando esta información
                  en tiempo real.
                </p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
