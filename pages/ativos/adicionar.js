// Página de adicionar ativos

import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@components/Button';
import { useRouter } from 'next/router';
import { SuccessModal } from 'components/Modal';

import axios from '@utils/axios';

const Ativos = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const { device, identifier, price, from } = data;

        try {
            await axios
                .post('/api/devices/create', {
                    device: device,
                    from: from,
                    id: identifier,
                    price: price,
                })
                .then(async (res) => {
                    alert(res.data.message);
                    await router.push('/ativos');
                })
                .catch((err) => {
                    alert(err, 'Erro ao cadastrar ativo');
                });
        } catch (error) {
            console.error(error);
        }
    };

    const [congrats, setCongrats] = useState(false);

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
                <div className="w-4/5 lg:w-1/3 flex flex-col items-center"></div>
                <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className={'p-0 w-full mb-4'}>
                            <p className="font-bold mb-2">
                                Nome do Dispositivo:
                            </p>
                            <input
                                type={'text'}
                                className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                                title={'Nome do dispositiov :'}
                                placeholder={'Dell Vostro 4500'}
                                {...register('device', { required: true })}
                            />
                            <span className="text-red-500">
                                {errors.name && 'Nome é obrigatório'}
                            </span>
                        </div>
                        <div className={'p-0 w-full mb-4'}>
                            <p className="font-bold mb-2">Campus:</p>
                            <input
                                type={'text'}
                                className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                                title={'Campus :'}
                                placeholder={'Nome do campus'}
                                {...register('from', { required: true })}
                            />
                            <span className="text-red-500">
                                {errors.localDevice && 'Campus é obrigatório'}
                            </span>
                        </div>
                        <div className={'p-0 w-full mb-4'}>
                            <p className="font-bold mb-2">Nº de patrimônio:</p>
                            <input
                                type={'text'}
                                className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                                placeholder="NB-05"
                                {...register('identifier', { required: true })}
                            />
                            <span className="text-red-500">
                                {errors.identifier &&
                                    'Número de patrimônio é obrigatorio'}
                            </span>
                        </div>

                        <div className={'p-0 w-full mb-4'}>
                            <p className="font-bold mb-2">
                                Valor do dispositivo:
                            </p>
                            <input
                                type="text"
                                className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                                placeholder="R$ 7000,00"
                                {...register('price', { required: true })}
                            />
                            <span className="text-red-500">
                                {errors.price && 'Data de compra é obrigatória'}
                            </span>
                        </div>

                        <input
                            type="submit"
                            className="bg-blue-500 rounded-xl mt-4 text-white cursor-pointer px-4 py-4 w-full shadow-lg"
                            value="Cadastrar"
                        />
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Ativos;
