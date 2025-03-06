import { IoIosSearch } from "react-icons/io";

import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-4">
        <section className="flex flex-col lg:flex-row lg:w-full w-[90%] mt-6 lg:justify-between lg:items-center lg:px-16">
          <span className="text-[#1C1C1C] font-semibold text-lg">
            Funcionários
          </span>
          <div className="w-full border border-slate-200 bg-white flex items-center rounded-md py-3 lg:py-2 px-4 mt-4 lg:w-[25%] lg:mt-0 lg:ml-4">
            <input
              type="search"
              placeholder="Pesquisar"
              className="outline-none w-full lg:w-full text-gray-600"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <IoIosSearch className="w-6 h-6 text-gray-300 cursor-pointer" />
          </div>
        </section>

        <Table searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default App;
