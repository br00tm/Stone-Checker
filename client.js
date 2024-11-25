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

// Criar cliente gRPC
const client = new analysisProto.AnalysisService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Chamar o método GetPreviousAnalyses
client.GetPreviousAnalyses({}, (err, response) => {
  if (err) {
    console.error('Erro ao chamar o serviço:', err);
    return;
  }

  console.log('Análises Anteriores:');
  response.analyses.forEach((analysis, index) => {
    console.log(`${index + 1}. ${analysis.name} - ${analysis.category} (${analysis.progress}%)`);
  });
});
