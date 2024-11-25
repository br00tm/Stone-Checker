import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Analysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!selectedFile) {
      alert("Por favor, selecione uma imagem antes de salvar.");
      return;
    }

    setIsLoading(true);

    // Simula o carregamento e redireciona
    setTimeout(() => {
      setIsLoading(false);
      navigate("/comparison"); // Redireciona para a página de comparação
    }, 2000);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100">
        {isLoading ? (
          <motion.div
            className="flex flex-col items-center justify-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="spinner-border animate-spin w-16 h-16 border-t-4 border-blue-500 rounded-full mb-4"></div>
            <p className="mt-8 text-lg font-semibold text-gray-600">
              Processando análise...
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Upload de Imagem
            </h1>
            <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <label
                  htmlFor="file-upload"
                  className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition duration-300"
                >
                  <FiUpload className="text-4xl text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    Clique ou arraste para carregar sua imagem
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {selectedFile && (
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-2">Prévia da Imagem:</p>
                    <img
                      src={selectedFile}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}

                <button
                  onClick={handleSave}
                  className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Processar Análise
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Analysis;
