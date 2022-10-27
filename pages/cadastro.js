import { Layout } from "../components/Layout";
import { Arrow } from "../assets/Arrow";
import { Button } from "../components/Button";

const Cadastro = () => {
  return (
    <Layout title="Cadastro" className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="mt-5 ml-7 flex flex-col items-start w-full">
          <Arrow size={35} />
        </div>

        <div className="flex flex-row justify-between w-4/5 mt-10">
          <p className="mt-3 text-3xl border border-red-500">Funcionários</p>
          <button className="bg-[#55d2d9] text-[#fff] rounded-full px-4 py-1  hover:bg-[#55d2d9] font-bold transition duration-300 text-lg">
            continuar+
          </button>
        </div>
        <input
                className="bg-[#f7f7f9] rounded-xl px-2 py-4 w-4/5 lg:w-1/3 mb-5 mt-8"
                type="email"
                placeholder="Endereço de e-mail"
              />

      </div>
    </Layout>
  );
};

export default Cadastro;
