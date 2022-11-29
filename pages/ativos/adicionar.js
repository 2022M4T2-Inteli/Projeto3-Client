// Página de adicionar ativos

import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@components/Button';
import { useRouter } from 'next/router';
import { SuccessModal } from 'components/Modal';

const Ativos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [congrats, setCongrats] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <SuccessModal
        message={
          'O ativo acaba de ser adicionado a plataforma e está pronto para ser emprestado a algum aluno  e/ou colaborador da instituição.'
        }
        closeModal={() => setCongrats(false)}
        isOpened={congrats}
      />

      <Layout
        title="Cadastro de ativo"
        className="bg-white flex flex-col items-center"
      >
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
          <div className="w-full flex flex-row justify-center">
            <p className="font-bold pt-[2rem] text-lg lg:text-xl">
              Cadastro de Ativo
            </p>
          </div>
        </div>
        <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Inputs */}
            <div className="w-full pt-[3rem] mb-8">
              <Input
                type={'text'}
                title={'Nome do dispositivo:'}
                placeholder={'Macbook Air 2020'}
                register={register('name')}
              />

              <Input
                type={'text'}
                title={'Campus:'}
                placeholder={'Villa'}
                register={register('campus')}
              />

              <Input
                type={'text'}
                title={'Identificador:'}
                placeholder={'MB-45'}
                register={register('identifier')}
              />

              <Input
                type={'number'}
                title={'Preço:'}
                placeholder={'R$ 2.000,00'}
                min={0}
                max={100000}
                register={register('price')}
              />
            </div>

            <input
              type="submit"
              value={'Cadastrar'}
              className={'bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg'}
            />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Ativos;
