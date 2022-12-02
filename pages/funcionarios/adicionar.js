// Página de adicionar funcionários

import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@components/Button';
import axios from '@utils/axios';
import { useRouter } from 'next/router';

const Adicionar = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ fullName, email, cpf, role }) => {
        try {
            await axios
                .post('/api/employees/create', {
                    fullName,
                    email,
                    cpf,
                    role,
                })
                .then(async (res) => {
                    alert(res.data.message);

                    await router.push('/funcionarios');
                })
                .catch((err) => {
                    alert({
                        error: err,
                        message: 'Erro ao adicionar funcionário',
                    });
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Layout
            title="Cadastro"
            className="bg-white flex flex-col items-center"
        >
            <div className="w-full pt-4 pl-4">
                <Arrow size={35} />
            </div>
            <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div>
                        <p className="font-bold text-lg lg:text-xl my-8">
                            Cadastro de Funcionários
                        </p>
                    </div>

                    <div className={'p-0 w-full mb-4'}>
                        <p className="font-bold mb-2">Nome completo:</p>
                        <input
                            type={'text'}
                            className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                            title={'Nome Completo :'}
                            placeholder={'Seu nome completo'}
                            {...register('fullName', { required: true })}
                        />
                        <span className="text-red-500">
                            {errors.fullName && 'Nome completo é obrigatório'}
                        </span>
                    </div>

                    <div className={'p-0 w-full mb-4'}>
                        <p className="font-bold mb-2">Cargo:</p>
                        <input
                            type={'email'}
                            className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                            placeholder="email@beacon.edu.br"
                            {...register('email', { required: true })}
                        />
                        <span className="text-red-500">
                            {errors.email && 'Email é obrigatório'}
                        </span>
                    </div>

                    <div className={'p-0 w-full mb-4'}>
                        <p className="font-bold mb-2">CPF:</p>
                        <input
                            type={'text'}
                            className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                            placeholder="000.000.000-00"
                            {...register('cpf', { required: true })}
                        />
                        <span className="text-red-500">
                            {errors.cpf && 'CPF é obrigatório'}
                        </span>
                    </div>

                    <div className={'p-0 w-full mb-4'}>
                        <p className="font-bold mb-2">Cargo:</p>
                        <input
                            type="text"
                            className="bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg"
                            placeholder="Gerente de recursos humanos"
                            {...register('role', { required: true })}
                        />
                        <span className="text-red-500">
                            {errors.role && 'Cargo é obrigatório'}
                        </span>
                    </div>

                    <input
                        type="submit"
                        className="bg-blue-500 rounded-xl mt-4 text-white cursor-pointer px-4 py-4 w-full shadow-lg"
                    />
                </form>
            </div>
        </Layout>
    );
};

export default Adicionar;
