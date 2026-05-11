import React from 'react';

const OperationsPanel = () => {
  const pedidos = [
    { id: 101, prenda: 'Vestido de Gala', estado: 'Asignado' },
    { id: 102, prenda: 'Camisa Formal', estado: 'En proceso' },
  ];

  const inventario = [
    { item: 'Seda Roja', cantidad: '15 mts' },
    { item: 'Botones Nácar', cantidad: '200 und' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Sección Costurera */}
      <section className="bg-white p-6 rounded-xl shadow border">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          🧵 Mis Pedidos Asignados
        </h3>
        <div className="space-y-3">
          {pedidos.map(p => (
            <div key={p.id} className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-100">
              <div>
                <p className="font-bold">#{p.id} - {p.prenda}</p>
                <span className="text-xs text-blue-600 font-semibold uppercase">{p.estado}</span>
              </div>
              <button className="text-sm bg-white border border-blue-600 px-3 py-1 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Inventario (Rep. Físico) */}
      <section className="bg-white p-6 rounded-xl shadow border">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          📦 Inventario Disponible
        </h3>
        <ul className="divide-y">
          {inventario.map((inv, idx) => (
            <li key={idx} className="py-3 flex justify-between">
              <span>{inv.item}</span>
              <span className="font-mono font-bold text-gray-600">{inv.cantidad}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full py-2 text-sm text-gray-500 hover:text-gray-800 underline">
          Actualizar existencias
        </button>
      </section>
    </div>
  );
};

export default OperationsPanel;