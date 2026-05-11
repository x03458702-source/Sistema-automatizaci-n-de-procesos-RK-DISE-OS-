import React, { useState } from 'react';

const PettyCashManager = () => {
  const [monto, setMonto] = useState(500000);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center">Control de Caja Menor</h3>
      <div className="flex flex-col items-center space-y-4">
        {isEditing ? (
          <input 
            type="number" 
            className="border-2 border-blue-500 p-2 rounded w-full text-center text-2xl font-bold"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        ) : (
          <span className="text-4xl font-bold text-gray-700">${monto.toLocaleString()}</span>
        )}

        <div className="flex gap-2 w-full">
          {isEditing ? (
            <button 
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg font-bold"
            >
              Guardar Cambios
            </button>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold"
            >
              Editar Saldo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PettyCashManager;