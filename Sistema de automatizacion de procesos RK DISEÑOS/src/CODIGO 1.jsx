import React, { useState } from 'react';

const FinancialDashboard = () => {
  const [periodo, setPeriodo] = useState('Mayo 2026');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reportes Financieros</h2>
      
      {/* Filtros de Periodo */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between">
        <span className="font-medium">Periodo: {periodo}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Generar Reporte PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Ingresos */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Ingresos Mensuales</p>
          <p className="text-3xl font-semibold text-gray-800">$12,450,000</p>
        </div>

        {/* Card Egresos */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Egresos Mensuales</p>
          <p className="text-3xl font-semibold text-gray-800">$4,200,000</p>
        </div>

        {/* Card Caja Menor */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Caja Menor Actual</p>
          <p className="text-3xl font-semibold text-gray-800">$500,000</p>
        </div>
      </div>

      {/* Tabla de Validación de Pagos */}
      <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Cliente</th>
              <th className="p-4">Monto</th>
              <th className="p-4">Estado de Pago</th>
              <th className="p-4">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">Juan Pérez</td>
              <td className="p-4">$150,000</td>
              <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Pendiente</span></td>
              <td className="p-4">
                <button className="text-blue-600 hover:underline">Validar Pago</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialDashboard;