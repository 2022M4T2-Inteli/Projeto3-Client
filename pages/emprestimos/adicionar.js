// Página de adicionar ativos

import { Arrow } from '@assets/Arrow';
import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { SuccessModal } from 'components/Modal';

import axios from '@utils/axios';
import { Select } from 'components/Select';
import { useRouter } from 'next/router';

const Emprestimo = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [devices, setDevices] = useState([]);

    const getDevices = async () =>
        await axios.get('/api/devices').then((res) => {
            console.log(res);
            setDevices(res.data);
        });

    useEffect(() => {
        getDevices();
    }, []);

    const [congrats, setCongrats] = useState(false);

    const onSubmit = async (data) => {
        const { name, ativo, campus, dataRetirada, dataDev } = data;

        try {
            axios
                .put(`/api/devices/${ativo}/lend`, {
                    id: ativo,
                    name: name,
                    since: dataRetirada,
                    until: dataDev,
                    isStudent: true,
                    isEmployee: false,
                    canTakeHome: true,
                })
                .then((res) => {
                    console.log(res);
                    router.push('/emprestimos');
                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (err) {
            alert(err, 'Erro ao cadastrar ativo');
        }
    };

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
                            Cadastro de Emprestimo
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
                            <p className="font-bold mb-2">
                                Nome completo de quem pegará o dispositivo:
                            </p>
                            <input
                                className={`bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg`}
                                type={'text'}
                                placeholder={
                                    'Nome completo de quem pegará o dispositivo'
                                }
                                {...register('name', { required: true })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">
                                    Este campo é obrigatório
                                </p>
                            )}

                            <p className="font-bold text-md lg:text-lg mt-4 mb-2">
                                {' '}
                                Ativo:
                            </p>
                            <select
                                className={`bg-[#f7f7f9] rounded-xl p-4 w-full mb-4 shadow-lg`}
                                title={'Ativo :'}
                                placeholder="Selecione o ativo"
                                {...register('ativo', { required: true })}
                            >
                                {/* <option>Selecione o ativo</option> */}
                                {devices.map((device) => (
                                    <option
                                        key={device.identifier}
                                        value={device.identifier}
                                        className="text-gray-500"
                                    >
                                        {device.deviceName}
                                    </option>
                                ))}
                            </select>
                            {errors.ativo && (
                                <span className="text-red-500">
                                    Selecione o ativo
                                </span>
                            )}

                            <p className="font-bold text-md lg:text-lg mt-4 mb-2">
                                {' '}
                                Campus
                            </p>
                            <input
                                type={'text'}
                                title={'Campus :'}
                                placeholder={'Villa'}
                                {...register('campus', { required: true })}
                                className={`bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg`}
                            />
                            {errors.campus && (
                                <span className="text-red-500">
                                    Insira o campus
                                </span>
                            )}

                            <p className="font-bold text-md lg:text-lg mt-4 mb-2">
                                Data de retirada:
                            </p>
                            <input
                                type={'date'}
                                className={`bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg`}
                                title={'Data de retirada :'}
                                placeholder={'00/00/00'}
                                {...register('dataRetirada', {
                                    required: true,
                                })}
                            />
                            {errors.dataRetirada && (
                                <span className="text-red-500">
                                    Insira a data de retirada
                                </span>
                            )}

                            <p className="font-bold text-md lg:text-lg mt-4 mb-2">
                                Data de devolução:
                            </p>
                            <input
                                className={`bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg`}
                                type={'date'}
                                title={'Data de devolução :'}
                                placeholder={'00/00/00'}
                                {...register('dataDev', {
                                    required: true,
                                })}
                            />
                            {errors.dataDev && (
                                <span className="text-red-500">
                                    Insira a data de devolução
                                </span>
                            )}
                        </div>

                        <Button
                            className={'mb-7'}
                            type={'submit'}
                            title={'Cadastrar'}
                        >
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Emprestimo;
