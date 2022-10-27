import { IOBeeLogo } from "../assets/IOBeeLogo";
import { Layout } from "../components/Layout";
import { LoginModal } from "../components/LoginModal";
import { Button } from "../components/Button";
import { useState } from "react";

const Login = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <LoginModal isOpened={modalVisible}
      closeModal={() => setModalVisible(false)} />
      <div
        onClick={() => setModalVisible(false)}
        className={`modal absolute md:fixed w-full min-h-screen h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-70 z-20 inset-0 ${
          modalVisible ? '' : 'hidden'
        }`}
      ></div>

      <Layout title="Login - Beacon School">
        <div className="h-screen flex flex-col justify-center items-center">
          {/* Logo and Text */}
          <div className="flex flex-row items-end justify-between w-4/5 lg:w-1/3 mb-8">
            <p className="text-xl">
              Você está em
              <br />
              <span className="text-5xl font-extrabold mt-2">IOBEE</span>
            </p>

            <IOBeeLogo width={200} />
          </div>

          {/* Login (email) */}
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold w-4/5 lg:w-1/3 mb-5">
                Entre na sua conta :-)
              </p>
              <input
                className="bg-[#f7f7f9] rounded-xl px-2 py-4 w-4/5 lg:w-1/3 mb-5"
                type="email"
                placeholder="Endereço de e-mail"
              />

              <Button>
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
