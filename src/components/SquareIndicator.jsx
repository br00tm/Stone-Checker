import React from "react";

const SquareIndicator = ({ value }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-64 h-64">
      {/* Título */}
      <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
        Acurácia Média do Mês do último material analisado
      </h2>

      {/* Contêiner do Indicador Quadrado */}
      <div className="w-full h-full border-4 border-gray-300 rounded-md relative">
        {/* Fundo do progresso */}
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-md"
          style={{ width: `${value}%` }}
        ></div>

        {/* Texto Central */}
        <div className="flex items-center justify-center absolute inset-0">
          <span className="text-xl font-bold text-gray-700">{value}%</span>
        </div>
      </div>

      {/* Subtítulo */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        De acordo com os dados de estoque
      </p>
    </div>
  );
};

export default SquareIndicator;
