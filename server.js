const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Caminho para o arquivo .proto
const PROTO_PATH = path.resolve(__dirname, './analysis.proto');



// Carregar o arquivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const analysisProto = grpc.loadPackageDefinition(packageDefinition).analysis;

// Mock de dados de análises anteriores
const analyses = [
  { name: 'Taj Mahal', category: 'Rocha Ornamental', progress: 75 },
  { name: 'Vialactea', category: 'Rocha Ornamental', progress: 85 },
  { name: 'Mármore Panda', category: 'Rocha Ornamental', progress: 65 },
];

// Implementação do serviço gRPC
function GetPreviousAnalyses(call, callback) {
  callback(null, { analyses });
}

// Inicializar o servidor gRPC
function main() {
  const server = new grpc.Server();

  // Adicionar o serviço ao servidor
  server.addService(analysisProto.AnalysisService.service, {
    GetPreviousAnalyses,
  });

  // Configurar o servidor para escutar na porta 50051
  const PORT = '0.0.0.0:50051';
  server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), (err) => {
    if (err) {
      console.error('Erro ao iniciar o servidor:', err);
      return;
    }
    console.log(`Servidor gRPC rodando na porta ${PORT}`);
    server.start();
  });
}

main();
