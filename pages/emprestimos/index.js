// Página de empréstimos

import { Arrow } from '@assets/Arrow';
import { Footer } from 'components/Footer';

const { Layout } = require('components/Layout');

const Ativos = () => {
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>

      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center"></div>
    </Layout>
  );
};

export default Ativos;
