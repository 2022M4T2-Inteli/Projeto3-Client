// Página de verificação de email - login

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@components/Layout';
import { Button } from '@components/Button';
import { Arrow } from '@assets/Arrow';
import { LoginModal } from '@components/Modal';
import { useForm } from 'react-hook-form';

import axios from '@utils/axios';

const Verification = () => {
    const router = useRouter();

    const [email, setEmail] = useState('email@email.com');
    const [token, setToken] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (data.token && data.token.length > 0) {
            try {
                await axios
                    .post('/api/login/verification', {
                        token: data.token,
                    })
                    .then((res) => {
                        router.push('/home');
                    });
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <LoginModal
                isOpened={modalVisible}
                closeModal={() => setModalVisible(false)}
            />

            <Layout title="Login - Beacon School">
                <div className="mt-5 ml-7">
                    <Arrow size={35} />
                </div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <div className="w-4/5 lg:w-1/3 mb-4 flex flex-col items-center">
                        <div className="text-center mb-16">
                            <p>
                                Digite o código de seis digitos que enviamos
                                para o email cadastrado
                                <br />
                            </p>
                            {/* <p className="mt-2 font-bold"> */}
                            {/* {localStorage.getItem('email') || 'Seu email'} */}
                            {/* </p> */}
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full"
                        >
                            {/* Create an input of 6 digits */}
                            <div className="flex flex-row items-center text-4xl border-2 border-none justify-evenly w-full">
                                <input
                                    className="bg-[#fff] border-2 border-x-0 border-t-0 border-b-black w-full rounded-full text-sm p-2"
                                    type="text"
                                    placeholder="Insira o token enviado ao seu email"
                                    {...register('token', {
                                        required: true,
                                    })}
                                />
                            </div>
                            {errors.token && (
                                <p className="text-red-500 text-xs">
                                    Este campo é obrigatório
                                </p>
                            )}

                            <Button className={'mt-16 mb-4'} type="submit">
                                {' '}
                                Continuar{' '}
                            </Button>
                        </form>

                        <Button
                            bgColor={'#00000000'}
                            bgHoverColor={'#00000000'}
                            onClick={() => router.push('/login')}
                        >
                            <span className="text-[#Fa7901]">
                                Não recebi meu codígo
                            </span>
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Verification;
