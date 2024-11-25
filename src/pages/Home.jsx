import Sidebar from "../components/Sidebar";
import tajMahal from "../assets/taj-mahal.jpg";
import marmorePanda from "../assets/marmorepanda.jpg";
import vialactea from "../assets/vialactea.jpg";


const Home = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Início</h1>
        </div>

        {/* Assinantes e Clientes */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Assinantes e Clientes</h2>
          <div className="flex space-x-4">
            {/* Cards for each client */}
            {[
              { name: "Helio Breda", tasks: 40, rating: 4.7 },
              { name: "Wellington Gulinelli", tasks: 32, rating: 4.9 },
              { name: "Lucas Poubel", tasks: 60, rating: 4.9 },
            ].map((client, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-50 p-4 rounded-md shadow-md"
              >
                <h3 className="text-md font-bold">{client.name}</h3>
                <p className="text-sm text-yellow-500">
                  {client.rating}⭐ Reviews
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Análises Anteriores */}
        <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold mb-4">Análises Anteriores</h2>
    <div className="grid grid-cols-3 gap-4">
        {[
        {
            title: "Taj Mahal",
            progress: 75,
            image: tajMahal, // Caminho da imagem importada
        },
        {
            title: "Vialactea",
            progress: 85,
            image: vialactea, // Caminho da imagem importada
        },
        {
            title: "Mármore Panda",
            progress: 65,
            image: marmorePanda, // Caminho da imagem importada
        },
        ].map((analysis, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-md shadow-md">
            <h3 className="text-md font-bold">{analysis.title}</h3>
            <p className="text-sm text-gray-600">Rocha Ornamental</p>
            <img
            src={analysis.image}
            alt={analysis.title}
            className="w-full h-32 object-cover rounded-md mt-2"
            />
            <p className="mt-2 text-sm font-medium">
            Análise de Qualidade: {analysis.progress}%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${analysis.progress}%` }}
            ></div>
            </div>
        </div>
        ))}
    </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
