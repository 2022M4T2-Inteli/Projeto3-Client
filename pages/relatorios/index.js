import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Button } from '@components/Button';
import { Profile } from '@assets/Profile';
import { DocumentCard } from '@components/Card';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Cadastro = () => {
  let allCollaborators = [
    {
      title: 'Relatorio Geral',
      about: 'Dispositivos Ativos',
      date: '25/09',
      month: 'Setembro',
    },
    {
      title: 'Relatorio Geral',
      about: 'Dispositivos Emprestados',
      date: '07/06',
      month: 'Junho',
    },
    {
      title: 'Relatorio Geral',
      about: 'Ambos Dispositivos',
      date: '05/01',
      month: 'Janeiro',
    },
  ];

  const [collaborators, setCollaborators] = useState(allCollaborators);
  const router = useRouter();

  const filterCollaborators = (e) => {
    const filteredCollaborators = collaborators.filter((collaborator) => {
      return collaborator.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setCollaborators(filteredCollaborators);

    if (e.target.value === '') {
      setCollaborators(allCollaborators);
    }
  };

  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center">
        <div className="flex flex-row justify-between w-full mt-10">
          <p className="mt-3 text-3xl">Funcionários</p>
          <button
            className="bg-[#55d2d9] text-[#fff] rounded-full px-4 py-1  hover:bg-[#55d2d9] font-bold transition duration-300 text-lg"
            onClick={() => {
              router.push('/cadastro/adicionar');
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
            placeholder="Procure pelo funcionário"
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

        {collaborators.map((collaborator) => (
          <DocumentCard {...collaborator} key={collaborator.name} />
        ))}
      </div>
    </Layout>
  );
};

export default Cadastro;
