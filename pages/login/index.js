// Página de Login

import { IOBeeLogo } from '@assets/IOBeeLogo';
import { Layout } from '@components/Layout';
import { LoginModal } from '@components/Modal';
import { Button } from '@components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  return (
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

            <button
              className={`bg-[#bfbfbf] text-[ "#fff"] w-4/5 lg:w-1/3 rounded-xl p-4 hover:bg-[#55d2d9] font-bold transition duration-300`}
              onClick={() => {
                router.push('/login/verification');
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
