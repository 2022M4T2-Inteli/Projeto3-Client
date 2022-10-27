import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { Arrow } from "../../assets/Arrow";
import { LoginModal } from "../../components/LoginModal";

const Login2 = () => {
  const [email, setEmail] = useState("email@email.com");
  const [token, setToken] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <LoginModal
        isOpened={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <div
        onClick={() => setModalVisible(false)}
        className={`modal absolute md:fixed w-full min-h-screen h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-70 z-20 inset-0 ${
          modalVisible ? "" : "hidden"
        }`}
      ></div>
      
      <Layout title="Login - Beacon School">
        <div className="mt-5 ml-7">
          <Arrow size={35} />
        </div>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="w-4/5 lg:w-1/3 mb-4 flex flex-col items-center">
            <div className="text-center mb-16">
              <p>
                Digite o código de seis digitos que enviamos para o email
                cadastrado
                <br />
              </p>
              <p className="mt-2 font-bold">{email}</p>
            </div>

            {/* Create an input of 6 digits */}
            <div className="flex flex-row items-center text-4xl border-2 border-none justify-evenly w-10/12">
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value) {
                    setToken([...token, e.target.value]);
                    e.target.nextSibling.focus();
                  }
                }}
                max={9}
              />
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value) {
                    setToken([...token, e.target.value]);
                    e.target.nextSibling.focus();
                  }
                }}
                max={9}
              />
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value) {
                    e.target.nextSibling.focus();
                  }
                }}
                max={9}
              />
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value) {
                    e.target.nextSibling.focus();
                  }
                }}
                max={9}
              />
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value) {
                    e.target.nextSibling.focus();
                  }
                }}
                max={9}
              />
              <input
                className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-10 text-center rounded-full"
                maxLength={1}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                max={9}
              />
            </div>

            <Button className={"mt-16 mb-4"}> Continuar </Button>

            <Button bgColor={"#00000000"} bgHoverColor={"#00000000"} onClick={
              () => console.log(true)
            }>
              <span className="text-[#Fa7901]">Não recebi meu codígo</span>
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login2;
