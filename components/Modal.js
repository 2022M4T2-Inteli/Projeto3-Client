import { useRouter } from 'next/router';
import { Button } from './Button';

export const SuccessModal = ({ message }) => {
  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto transition-opacity top-0 left-0 w-full h-full bg-opacity-50"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="z-100 absolute modal-content bg-white w-full rounded-t-2xl shadow-lg py-8 px-6 h-fit bottom-0 text-center">
        <p className="text-xl font-bold mt-4 mb-8">Sucesso! 🎉</p>
        <p className="text-center font-light mb-8">{message}</p>

        <div className="flex flex-col mx-auto w-full">
          <button
            className="text-[#55d2d9] w-4/5 lg:w-1/3 rounded-xl font-bold mx-auto"
            onClick={closeModal}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export const LoginModal = ({ isOpened, closeModal, email }) => {
  const router = useRouter();

  return isOpened ? (
    <div className="z-50 absolute modal-content bg-white w-full rounded-t-2xl shadow-lg py-8 px-6 h-fit bottom-0 text-center">
      <p className="text-lg font-bold mb-4">Não recebeu seu código?</p>
      <p className="text-center font-light mb-8">
        Verifique se digitou o e-mail institucional corretamente e veja sua
        caixa de entrada :)
      </p>

      <p className="font-bold text-lg mb-8">
        {email || 'giovanna.torres@sou.inteli.edu.br'}
      </p>

      <div className="flex flex-col mx-auto w-full">
        <button
          className={`text-[#fff] w-4/5 lg:w-1/3 rounded-3xl p-4 bg-[#55d2d9] font-bold mb-8 mx-auto`}
          onClick={closeModal}
        >
          Reenviar código
        </button>

        <button
          className={`text-[ "#fff"] w-4/5 lg:w-1/3 rounded-xl border-1 border-black font-bold mb-8 mx-auto`}
          onClick={closeModal}
        >
          Tentar digitar o código novamente
        </button>

        <button
          className="text-[#55d2d9] w-4/5 lg:w-1/3 rounded-xl font-bold mx-auto"
          onClick={() => router.push('/cadastro')}
        >
          Trocar de e-mail
        </button>
      </div>
    </div>
  ) : null;
};

export const EmprestimoModal = ({
  isOpened,
  closeModal,
  congrats,
  setCongrats,
  device,
}) => {
  const router = useRouter();

  return isOpened ? (
    congrats ? (
      <SuccessModal
        message={
          'A entrega do ativo já foi computada no sistema e ele não está mais listado na lista de empréstimos da instituição.'
        }
      />
    ) : (
      <div
        className="fixed z-50 inset-0 overflow-y-auto transition-opacity top-0 left-0 w-full h-full bg-opacity-50"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="z-100 absolute modal-content bg-white w-full rounded-t-2xl shadow-lg py-8 px-6 h-fit bottom-0 text-center">
          <p className="text-xl font-bold mt-4 mb-8">Devolução de dispostivo</p>
          <p className="text-center font-light mb-8">
            O dispositivo <span className="font-bold">{device.device}</span>, Nº{' '}
            <span className="font-bold">{device.id}</span> está sendo devolvido
            ao estoque da instituição.
          </p>

          <div className="flex flex-col mx-auto w-full">
            <Button className="mb-8 rounded-3xl" onClick={setCongrats}>
              Confirmar entrega
            </Button>

            <button
              className="text-[#55d2d9] w-4/5 lg:w-1/3 rounded-xl font-bold mx-auto"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  ) : null;
};
