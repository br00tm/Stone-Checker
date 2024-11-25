import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
    <h2 className="text-2xl font-bold p-4">Stone Checker</h2>
    <Link to="/" className="py-2 px-4 hover:bg-gray-700">Início</Link>
    <Link to="/analysis" className="py-2 px-4 hover:bg-gray-700">Análise</Link>
  </div>
);

export default Sidebar;
