import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Input } from '@components/Input';

export const Cadastro = () => {
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
        <div className="w-full flex flex-row justify-center">
          <p className="font-bold pt-[2rem] text-xl">Cadastro de Ativo</p>
        </div>
      </div>
      <div className="w-full">
        <Input
          type={'text'}
          titile={'Nome do Dispositivo: '}
          placeholder={'Digite o nome do dispositivo'}
        />
          <Input
          type={'text'}
          titile={'Campus: '}
          placeholder={'Digite o nome do Campus'}
        />
          <Input
          type={'number'}
          titile={'Nome do Dispositivo: '}
          placeholder={'Digite o nome do dispositivo'}
        />
        
        
      </div>
    </Layout>
  );
};

export default Cadastro;
