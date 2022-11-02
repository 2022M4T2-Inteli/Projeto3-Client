import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Button } from '@components/Button';
import { Profile } from '@assets/Profile';
import { DeviceCard } from '@components/Card';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EmprestimoModal } from '@components/Modal';

const Emprestimo = () => {
  let devices = [
    {
      id: 8746836,
      device: 'Macbook Air',
      who: 'Ana Clara Almeida',
      date: '09/2022',
      status: 'Diário',
      isIn: true,
    },
    {
      id: 8132468,
      device: 'IPad V8',
      who: 'Mariana Gomes',
      date: '09/2022',
      status: 'Mensal',
      isOut: true,
    },
    {
      id: 8746146,
      device: 'Apple Pencil',
      who: 'Bianca Barbosa',
      date: '08/2022',
      status: 'Mensal',
      isOut: true,
    },
    {
      id: 8746831,
      device: 'Dell Vostro 2480',
      who: 'Amanda Ribeiro',
      date: '09/2022',
      status: 'Diário',
      isIn: true,
    },
  ];

  const [allDevices, setAllDevices] = useState(devices);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [congrats, setCongrats] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
    setCongrats(false);
  };

  const router = useRouter();

  const filterCollaborators = (e) => {
    const search = e.target.value;
    const filtered = devices.filter((device) => {
      return device.device.toLowerCase().includes(search.toLowerCase());
    });
    setAllDevices(filtered);
  };

  return (
    <>
      <Layout
        title="Empréstimo"
        className="bg-white flex flex-col items-center"
      >
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
        </div>
        <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <div className="flex flex-row justify-between w-full mt-10">
            <p className="mt-3 text-3xl">Emprestimos</p>
            <button
              className="bg-[#55d2d9] text-[#fff] rounded-full px-4 py-1  hover:bg-[#55d2d9] font-bold transition duration-300 text-lg"
              onClick={() => {
                router.push('/emprestimos/adicionar');
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
              onChange={filterCollaborators}
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

          {devices.map((device) => (
            <>
              <EmprestimoModal
                isOpened={isModalOpened}
                device={device}
                closeModal={toggleModal}
                congrats={congrats}
                setCongrats={() => {
                  setCongrats(true);
                  console.log(congrats);
                }}
                key={device.name}
              />
              <div
                className="w-full cursor-pointer"
                key={device.name}
                onClick={() => {
                  setIsModalOpened(true);
                }}
              >
                <DeviceCard {...device} />
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Emprestimo;
