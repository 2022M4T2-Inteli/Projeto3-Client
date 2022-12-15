// Página de Login

import { IOBeeLogo } from '@assets/IOBeeLogo';
import { Layout } from '@components/Layout';
import { LoginModal } from '@components/Modal';
import { Button } from '@components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import axios from '@utils/axios';

const Login = () => {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (
            data.email.includes('@') &&
            data.email.includes('sou.inteli.edu.br')
        ) {
            try {
                await axios
                    .post('/api/login', {
                        email: data.email,
                    })
                    .then((res) => {
                        localStorage.setItem('email', data.email);
                        router.push('/login/verification');
                    })
                    .catch((err) => {
                        alert('Erro ao enviar email');
                        console.log(err);
                    });
            } catch (err) {
                alert('Erro ao enviar email');
                console.log(err);
            }
        }
    };

    return (
        <Layout title="Login - Beacon School">
            <div className="h-screen flex flex-col justify-center items-center">
                {/* Logo and Text */}
                <div className="flex flex-row items-end justify-between w-4/5 lg:w-1/3 mb-8">
                    <p className="text-lg lg:text-xl">
                        Você está em
                        <br />
                        <span className="text-5xl font-extrabold mt-2">
                            IOBEE
                        </span>
                    </p>

                    <IOBeeLogo width={200} />
                </div>

                {/* Login (email) */}
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold w-4/5 lg:w-1/3 mb-5">
                            Entre na sua conta :-)
                        </p>
                        <p className="text-sm w-4/5 lg:w-1/3 mb-5">
                            Digite seu email e receberá um token de acesso no
                            seu email cadastrado!
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col w-4/5 lg:w-1/3 mx-auto"
                        >
                            <input
                                className="bg-[#f7f7f9] rounded-xl px-2 py-4 w-full shadow-lg"
                                type="email"
                                placeholder="Endereço de e-mail"
                                {...register('email', { required: true })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    Campo obrigatório
                                </p>
                            )}

                            <button
                                className={`bg-[#bfbfbf] text-[ "#fff"] w-full rounded-xl p-4 hover:bg-[#55d2d9] font-bold transition duration-300 mt-4`}
                                // onClick={() => {
                                //     router.push('/login/verification');
                                // }}
                                type={'submit'}
                            >
                                Continuar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
