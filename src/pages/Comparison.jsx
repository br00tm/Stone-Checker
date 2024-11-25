import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import SquareIndicator from "../components/SquareIndicator";

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Comparison = () => {
  // Dados do Gráfico de Linhas
  const lineData = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"], // Período
    datasets: [
      {
        label: "Estoque",
        data: [70, 60, 75, 80], // Dados fictícios
        borderColor: "rgba(54, 162, 235, 1)", // Azul
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4, // Suaviza as linhas
      },
      {
        label: "Adquirido",
        data: [65, 50, 60, 75], // Dados fictícios
        borderColor: "rgba(153, 102, 255, 1)", // Roxo
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4, // Suaviza as linhas
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comparação com o Material em Estoque",
      },
    },
  };

  // Valor do indicador
  const qualityPercentage = 65;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-12">
      {/* Gráfico de Linhas */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Indicador Quadrado */}
      <SquareIndicator value={qualityPercentage} />
    </div>
  );
};

export default Comparison;
