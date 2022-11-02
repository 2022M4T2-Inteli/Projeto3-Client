import { Arrow } from "@assets/Arrow";

const { Layout } = require("components/Layout");

const Ativos = () => {
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
        <div className="w-full flex flex-row justify-center"></div>
      </div>
    </Layout>
  );
};

export default Ativos;