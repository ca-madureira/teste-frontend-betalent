import api from "../api";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Employee } from "../types";
import { formatedPhone } from "../utils/formatedPhone";
import { formatedDate } from "../utils/formatedDate";

export const Table = ({ searchTerm }: { searchTerm: string }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [openInfo, setOpenInfo] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
        setLoading(false);
      } catch (error: unknown) {
        setError(`Erro ao carregar funcionarios ${error}`);
        setLoading(false);
      }
    };
    getEmployees();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  const filteredEmployees = employees.filter((employee: Employee) => {
    const search = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(search) ||
      employee.job.toLowerCase().includes(search) ||
      employee.phone.includes(search)
    );
  });

  const toggleInfo = (id: number) => {
    setOpenInfo((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <table className="bg-white rounded-t-lg overflow-hidden border-collapse w-[90%]">
      <thead className="bg-[#0500FF] text-white">
        <tr>
          <th className="font-medium text-center lg:w-1/14 py-3">FOTO</th>
          <th className="font-medium text-start lg:w-1/9">NOME</th>
          <th className="font-medium table-cell lg:hidden">
            <FaCircle className="text-white w-2 h-2 mx-auto" />
          </th>
          <th className="font-medium hidden lg:table-cell text-start lg:w-1/9">
            CARGO
          </th>
          <th className="font-medium hidden lg:table-cell text-start lg:w-1/9">
            DATA DE ADMISSÃO
          </th>
          <th className="font-medium hidden lg:table-cell  text-start lg:w-1/9">
            TELEFONE
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee: Employee) => (
          <>
            <tr key={employee.id} className="lg:border-b lg:border-gray-300">
              <td className="flex justify-center py-2 lg:py-1">
                <img
                  src={employee.image}
                  className="w-10 lg:w-8 h-10 lg:h-8 rounded-full"
                />
              </td>
              <td className="text-start">{employee.name}</td>
              <td className="table-cell lg:hidden text-center">
                {openInfo[employee.id] ? (
                  <BsChevronUp
                    className="text-[#0500FF] font-thin w-6 h-6 mx-auto cursor-pointer"
                    onClick={() => toggleInfo(employee.id)}
                  />
                ) : (
                  <BsChevronDown
                    className="text-[#0500FF] font-thin w-6 h-6 mx-auto cursor-pointer"
                    onClick={() => toggleInfo(employee.id)}
                  />
                )}
              </td>
              <td className="hidden lg:table-cell text-start">
                {employee.job}
              </td>
              <td className="hidden lg:table-cell text-start">
                {formatedDate(employee.admission_date)}
              </td>
              <td className="hidden lg:table-cell text-start">
                {formatedPhone(employee.phone)}
              </td>
            </tr>

            {openInfo[employee.id] && (
              <tr className="w-full">
                <td colSpan={6} className="px-4 pb-4">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-dotted border-slate-400">
                        <td className="font-semibold pt-4">Cargo</td>
                        <td className="text-end pt-4">{employee.job}</td>
                      </tr>
                      <tr className="border-b border-dotted border-slate-400">
                        <td className="font-semibold pt-4">Data de admissão</td>
                        <td className="text-end pt-4">
                          {formatedDate(employee.admission_date)}
                        </td>
                      </tr>
                      <tr className="border-b border-dotted border-slate-400">
                        <td className="font-semibold pt-4">Telefone</td>
                        <td className="text-end pt-4">
                          {formatedPhone(employee.phone)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
            <tr className="lg:hidden">
              <td colSpan={6} className="py-1">
                <hr className="border-t border-gray-400 w-full" />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
