// Home screen - index.js

import { Arrow } from '@assets/Arrow';
import { ProfileMais } from '@assets/ProfileMais';
import { Layout } from '@components/Layout';
import { Leave } from '@assets/Leave';
import { BeaconSchoolLogo } from '@assets/BeaconSchoolLogo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Card } from '@components/Card';
import { Footer } from 'components/Footer';

const EmprestimoCard = ({ list }) => {
    return list.map((emprestimo, index) => {
        return (
            <div className="w-full" key={emprestimo.name} index={index}>
                <Card {...emprestimo} />
            </div>
        );
    });
};

const PatrimonioCard = ({ list }) => {
    return list.map((patrimonio, index) => {
        return (
            <div className="w-full" key={patrimonio.id} index={index}>
                <Card {...patrimonio} />
            </div>
        );
    });
};

const Home = () => {
    const [cardToRender, setCardToRender] = useState('emprestimo');
    const router = useRouter();

    let [emprestimoList, setEmprestimoList] = useState([
        {
            name: 'Marcelo',
            date: '12/12/2021',
            status: 'ATIVO',
            occupation: 'Professor',
            isIn: true,
        },
        {
            name: 'Marcelo',
            date: '12/12/2021',
            status: 'ATIVO',
            occupation: 'Professor',
            isOut: true,
        },
        {
            name: 'Marcelo',
            date: '12/12/2021',
            status: 'ATIVO',
            occupation: 'Professor',
            isIn: true,
        },
    ]);

    let [patrimonioList, setPatrimonioList] = useState([
        {
            name: 'Rodrigo',
            date: '09/11/2022',
            status: 'ATIVO',
            occupation: 'Professor',
            isIn: true,
        },
        {
            name: 'Rodrigo',
            date: '09/11/2022',
            status: 'ATIVO',
            occupation: 'Professor',
            isOut: true,
        },
        {
            name: 'Rodrigo',
            date: '09/11/2022',
            status: 'ATIVO',
            occupation: 'Professor',
            isIn: true,
        },
    ]);

    return (
        <Layout
            title="Home"
            className="bg-white flex flex-col items-center min-h-screen h-full"
        >
            <div className="w-full">
                {/* Header */}
                <div className="bg-[#ea1d2c] w-full flex flex-col pt-8">
                    <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/3 mx-auto">
                        <div className="w-full flex flex-row justify-end px-8">
                            <ProfileMais
                                className={'cursor-pointer mr-4'}
                                onClick={() => router.push('/funcionarios')}
                            />

                            <Leave
                                className={'cursor-pointer'}
                                onClick={() => {
                                    // localStorage.removeItem('email');
                                    router.push('/login');
                                }}
                            />
                        </div>

                        <div className="flex flex-row justify-start w-full">
                            <BeaconSchoolLogo
                                width={128}
                                className={
                                    'rounded-full translate-y-[50%] ml-8 w-1/7'
                                }
                            />
                            <p className="font-bold text-white text-3xl translate-y-[60%] ml-4">
                                Beacon School
                            </p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="pt-24 flex flex-col items-center w-full mb-24">
                    <button
                        className="flex justify-center w-4/5 md:w-5/6 lg:w-2/3 xl:w-1/3 px-2 py-6 bg-gradient-to-br from-[#3377FF] to-[#55d2d9] rounded-[2rem] text-white items-center"
                        onClick={() => {
                            router.push('/ativos');
                        }}
                    >
                        <p className="text-6xl">56</p>
                        <span className="text-2xl ml-2">
                            Dispositivos em uso
                        </span>
                    </button>

                    <div className="w-4/5 md:w-5/6 lg:w-2/3 xl:w-1/3 mt-4 pb-25">
                        <div className="flex flex-row justify-between mt-4 mb-4">
                            <button
                                className={`${
                                    cardToRender === 'emprestimo'
                                        ? 'border-b-2 border-b-[#FA7901] text-black'
                                        : 'text-[#c4c4c4]'
                                } text-sm font-semibold`}
                                onClick={() => {
                                    setCardToRender('emprestimo');
                                }}
                            >
                                Empr??stimo
                            </button>

                            <button
                                className={`${
                                    cardToRender === 'patrimonio'
                                        ? 'border-b-2 border-b-[#55D2D9] text-black'
                                        : 'text-[#c4c4c4]'
                                } text-sm lg:text-md font-semibold`}
                                onClick={() => {
                                    setCardToRender('patrimonio');
                                }}
                            >
                                Patrim??nio
                            </button>
                        </div>

                        {cardToRender == 'emprestimo' ? (
                            <EmprestimoCard list={emprestimoList.slice(0, 3)} />
                        ) : (
                            <PatrimonioCard list={patrimonioList.slice(0, 3)} />
                        )}
                    </div>
                </div>

                {/* Footer */}
                <Footer selected="home" />
            </div>
        </Layout>
    );
};

export default Home;
