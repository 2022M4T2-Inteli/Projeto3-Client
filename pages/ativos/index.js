// Página de ativos

import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Button } from '@components/Button';
import { Profile } from '@assets/Profile';
import { DeviceCard } from '@components/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { EmprestimoModal } from '@components/Modal';
import { Footer } from 'components/Footer';

import axios from '@utils/axios';

const Ativos = () => {
    const fetchData = async () => {
        const response = await axios.get('/api/devices').then((res) => {
            setLoading(false);
            setDevices(res.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [devices, setDevices] = useState([]);

    const [modalOpened, setModalOpened] = useState(false);
    const [modalDevice, setModalDevice] = useState({});
    const [congrats, setCongrats] = useState(false);

    const [loading, setLoading] = useState(true);

    const toggleModal = (device) => {
        setModalDevice(device);
        setModalOpened(!modalOpened);
    };

    const router = useRouter();

    const filterCollaborators = (e) => {};

    return (
        <>
            <EmprestimoModal
                device={modalDevice}
                isOpened={modalOpened}
                congrats={congrats}
                setCongrats={() => setCongrats(!congrats)}
                closeModal={() => setModalOpened(false) && setCongrats(false)}
            />

            <Layout
                title="Ativos"
                className="bg-white flex flex-col items-center"
            >
                <div className="w-full pt-4 pl-4">
                    <Arrow size={35} />
                </div>
                <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center pb-24">
                    <div className="flex flex-row justify-between w-full mt-10">
                        <p className="mt-3 text-3xl">Ativos</p>
                        <button
                            className="bg-[#55d2d9] text-[#fff] rounded-full px-4 py-1  hover:bg-[#55d2d9] font-bold transition duration-300 text-md lg:text-lg"
                            onClick={() => {
                                router.push('/ativos/adicionar');
                            }}
                        >
                            Cadastrar +
                        </button>
                    </div>

                    <div className="relative mb-6 w-full mt-4">
                        <input
                            type="text"
                            id="input-group-1"
                            className="w-full pr-10 p-2.5 bg-[#F5F9FD] rounded-2xl px-2 py-4"
                            placeholder="Procure dispositivo..."
                            onChange={(e) => {
                                filterCollaborators(e);
                            }}
                        />
                        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-full px-4">
                        <p>Nome</p>
                        <p>Cadastro</p>
                    </div>

                    <hr className="mb-4 bg-[#55D2D9] w-full p-[0.075rem]" />

                    {loading ? (
                        <div className="flex flex-col items-center justify-center w-full h-96">
                            <p className="text-2xl">Carregando...</p>
                        </div>
                    ) : devices && devices.length > 0 ? (
                        devices.map((device) => (
                            <div
                                className="w-full cursor-pointer mb-2"
                                key={device.identifier}
                                onClick={() => {
                                    toggleModal(device);
                                }}
                            >
                                <DeviceCard {...device} />
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-96">
                            <p className="text-2xl">
                                Nenhum dispositivo encontrado
                            </p>
                        </div>
                    )}
                </div>

                <Footer selected="ativos" />
            </Layout>
        </>
    );
};

export default Ativos;
