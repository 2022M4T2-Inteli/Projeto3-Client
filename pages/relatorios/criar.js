import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import { SuccessModal } from 'components/Modal';

const Criar = () => {
  const [congrats, setCongrats] = useState(false);
  const { register, handleSubmit } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState('');

  return (
    <>
      <SuccessModal closeModal={() => setCongrats(false)} isOpened={congrats}>
        <div className="w-full md:w-4/5 lg:w-1/3 mx-auto pb-4">
          <p>
            O seu relatório acaba de ser gerado, para ser redirecionado a página
            e fazer download, clique no botão abaixo.
          </p>
          <Button>Redirecionar</Button>
        </div>
      </SuccessModal>

      <Layout title="Cadastro" className="bg-white flex flex-col items-center">
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
        </div>
        <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit((data) => {
              setData(JSON.stringify(data));
              console.log(data);
            })}
          >
            <div>
              <p className="font-bold text-xl my-8">Relatorio</p>
            </div>

            {/* Inputs */}
            <div className="w-full">
              <Select
                title={'Teste'}
                options={[
                  {
                    value: 'Dispositivos Ativos',
                    label: 'Dispositivos Ativos',
                  },
                  {
                    value: 'Dispositivos Emprestados',
                    label: 'Dispositivos Emprestados',
                  },
                  { value: 'Ambos Dispositivos', label: 'Ambos Dispositivos' },
                ]}
              />
              <Input
                type={'date'}
                title={'Data de Inicio :'}
                placeholder={'00/00/0000'}
                {...register('InicialDate', { required: true })}
              />{' '}
              <Input
                type={'date'}
                title={'Data de Termino :'}
                placeholder={'00/00/0000'}
                {...register('InicialDate', { required: true })}
              />
            </div>

            <Button onClick={() => setCongrats(true)} className={'mt-8 w-full'}>
              Continuar
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default Criar;
