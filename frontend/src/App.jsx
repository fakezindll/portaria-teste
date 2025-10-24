import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashInfo from "./components/DashInfo";
import Recent from "./components/Recent";
import { Users, CheckCircle, XCircle, Clipboard } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const data = [
    { name: "Rafael", time: "2025-10-10 08:30", entry: true },
    { name: "Maria", time: "2025-10-10 08:45", entry: false },
    { name: "Carlos", time: "2025-10-10 09:00", entry: true },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-6 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-4">Visão geral da portaria</p>

        <div className="flex space-x-7 my-9">
          <DashInfo icon={Users} text="Total de Funcionários" num={48} color="#1D4ED8" to="/funcionarios" />
          <DashInfo icon={CheckCircle} text="Presentes" num={40} color="#10B981" to="/controle" />
          <DashInfo icon={XCircle} text="Ausentes" num={8} color="#EF4444" to="/controle" />
          <DashInfo icon={Clipboard} text="Registros Hoje" num={15} color="#F59E0B" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">Atividade recente</h1>
        <Recent records={data} />
      </main>
    </div>
  );
}
