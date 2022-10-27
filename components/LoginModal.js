import { useRouter } from "next/router";

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
        {email || "giovanna.torres@sou.inteli.edu.br"}
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
          onClick={() => router.push("/cadastro")}
        >
          Trocar de e-mail
        </button>
      </div>
    </div>
  ) : null;
};
