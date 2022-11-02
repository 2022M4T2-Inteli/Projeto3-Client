import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@components/Button';
import { useRouter } from 'next/router';

export const Modal = ({ closeModal, congrats, setCongrats, device }) => {
  const router = useRouter();

  return congrats ? (
    <div
      className="fixed z-50 inset-0 overflow-y-auto transition-opacity top-0 left-0 w-full h-full bg-opacity-50"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="z-100 absolute modal-content bg-white w-full rounded-t-2xl shadow-lg py-8 px-6 h-fit bottom-0 text-center">
        <p className="text-xl font-bold mt-4 mb-8">Sucesso! 🎉</p>
        <p className="text-center font-light mb-8">
          O empréstimo já está cadastrado no sistema, e quando a data de
          devolução se aproximar, você será avisado.
        </p>

        <div className="flex flex-col mx-auto w-full">
          <button
            className="text-[#55d2d9] w-4/5 lg:w-1/3 rounded-xl font-bold mx-auto"
            onClick={() => router.push('/emprestimos')}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const Emprestimo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  const [lendingType, setLendingType] = useState('');

  const [dailyButtonState, setDailyButtonState] = useState(false);
  const [monthlyButtonState, setMonthlyButtonState] = useState(false);

  const [congrats, setCongrats] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Modal closeModal={setCongrats} congrats={congrats} device={{}} />

      <Layout title="Cadastro" className="bg-white flex flex-col items-center">
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
          <div className="w-full flex flex-row justify-center">
            <p className="font-bold pt-[2rem] text-xl">
              Cadastro de Empréstimo
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
                title={'Nome Completo :'}
                placeholder={'Seu nome completo'}
                // {...register('fullName', { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">Insira seu nome completo</span>
              )}

              <Input
                type={'email'}
                title={'E-mail Institucional :'}
                placeholder={'email@beacon.edu.br'}
                // {...register('email', {
                //   required: true,
                //   pattern: /^\S+@\S+$/i,
                // })}
              />
              {errors.email && (
                <span className="text-red-500">
                  Insira seu e-mail institucional
                </span>
              )}

              <Input
                type={'text'}
                title={'Dispositivo :'}
                placeholder={'Apple Pencil'}
                // {...register('device', { required: true })}
              />
              {errors.device && (
                <span className="text-red-500">Insira o dispositivo</span>
              )}

              <Input
                type={'text'}
                title={'Campus :'}
                placeholder={'Villa'}
                // {...register('campus', { required: true })}
              />
              {errors.campus && (
                <span className="text-red-500">Insira o campus</span>
              )}

              <p className="font-bold text-lg mb-3"> Tipo:</p>

              <div className="flex flex-row mb-2">
                <button
                  className={
                    dailyButtonState === false
                      ? 'bg-[#bfbfbf] text-[#fff] w-full rounded-xl p-4 hover:bg-[#FA7901] font-bold transition duration-300 mr-2'
                      : 'bg-[#FA7901] text-[#fff] w-full rounded-xl p-4 hover:bg-[#FA7901] font-bold transition duration-300 mr-2'
                  }
                  onClick={() => {
                    setLendingType('diario');
                    setDailyButtonState(true);
                    setMonthlyButtonState(false);
                  }}
                >
                  Diário
                </button>

                <button
                  className={
                    monthlyButtonState === false
                      ? 'bg-[#bfbfbf] text-[#fff] w-full rounded-xl p-4 hover:bg-[#FA7901] font-bold transition duration-300'
                      : 'bg-[#FA7901] text-[#fff] w-full rounded-xl p-4 hover:bg-[#FA7901] font-bold transition duration-300'
                  }
                  onClick={() => {
                    setLendingType('mensal');
                    setMonthlyButtonState(true);
                    setDailyButtonState(false);
                  }}
                >
                  Mensal
                </button>
              </div>
              {lendingType == 'diario' ? (
                console.log('dia')
              ) : lendingType == 'mensal' ? (
                <div>
                  <Input
                    type={'data'}
                    title={'data de retirada :'}
                    placeholder={'00/00/00'}
                    // {...register('dataRetirada', {
                    //   required: true,
                    // })}
                  />
                  <Input
                    type={'data'}
                    title={'data de devolução :'}
                    placeholder={'00/00/00'}
                    // {...register('dataDev', {
                    //   required: true,
                    // })}
                  />
                </div>
              ) : null}
            </div>
          </form>
          <Button
            className={'mb-7'}
            // type={'submit'}
            title={'Cadastrar'}
            onClick={() => setCongrats(true)}
            //prevent default
          >
            Cadastrar
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Emprestimo;
