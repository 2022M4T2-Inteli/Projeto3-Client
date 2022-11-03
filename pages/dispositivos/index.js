import { Layout } from 'components/Layout';
import { Arrow } from 'assets/Arrow';

export const Dispositivos = () => {
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center">
        <div className="w-full flex flex-col pt-5 justify-center">
            <p className='font-bold text-center pb-5 text-2xl'>Dispositivos em uso</p>
            <input
            type="text"
            id="input-group-1"
            className="w-full wt-5 pr-10 p-2.5 bg-[#F5F9FD] rounded-2xl px-2 py-4"
            placeholder="Procure dispositivo..."
          />
        </div>
        <div className='w-full flex flex-row justify-center'>
            <div className='w-1/2 bg-[#ffff]'>
                <p>Emprestados</p>
                <p className='font-bold text-[5rem]'>30</p>
            </div>



        </div>
      </div>
    </Layout>
  );
};
export default Dispositivos;
