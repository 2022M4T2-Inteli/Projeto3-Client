// Página de dispositivos

import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Footer } from '@components/Footer';
import { DeviceCard, LocationCard, TagCard } from 'components/Card';
import { useEffect, useState } from 'react';
import { TagModal } from 'components/Modal';
import axios from '@utils/axios';

export const Dispositivos = () => {
  const [sample, setSample] = useState([]);

  const getDevices = async () => {
    const response = await axios.get('http://127.0.0.1:5500/device');
    setDevices(response.data);

    return response.data;
  };

  const [devices, setDevices] = useState([
    {
      title: 'Biblioteca',
      location: "Campus Villa",
      amount: 50
    },{
      title: 'Biblioteca',
      location: "Campus Villa",
      amount: 50
    },{
      title: 'Biblioteca',
      location: "Campus Villa",
      amount: 50
    },{
      title: 'Biblioteca',
      location: "Campus Villa",
      amount: 50
    },
  ]);

  getDevices();

  //   useEffect(() => {
  //     getDevices();
  //   }, [devices]);

  const listaSala = [{}, {}];

  const [modalOpened, setModalOpened] = useState(false);
  const [modalTag, setModalTag] = useState({});

  const toggleModal = (item) => {
    setModalTag(item);
    setModalOpened(!modalOpened);
  };

  return (
    <>
      <TagModal
        tag={modalTag}
        isOpened={modalOpened}
        closeModal={() => setModalOpened(false)}
      />

      <Layout
        title="Dispositivos em uso"
        className="bg-white flex flex-col items-center"
      >
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
        </div>
        <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center pb-24">
          <div className="w-full flex flex-col pt-5 justify-center">
            <p className="font-bold text-center pb-5 text-2xl">
              Dispositivos em uso
            </p>
            <input
              type="text"
              id="input-group-1"
              className="w-full wt-5 pr-10 p-2.5 bg-[#fff] rounded-2xl px-2 py-4"
              placeholder="Procure pelas tags..."
            />
          </div>

          <div className="w-full flex flex-row justify-evenly pt-8">
            <div className="w-2/5 bg-white shadow-xl px-4 py-2 rounded-3xl">
              <p className="text-xs text-[#3fb76f]">
                <span className="bg-[#3FB76F] w-1 px-1.5 h-1 text-[#3FB76F] rounded-full">
                  -
                </span>{' '}
                ativos
              </p>

              <p className="text-md lg:text-lg">Emprestados</p>
              <p className="font-bold text-[5rem] mx-auto text-center ">
                {devices.length || 30}
              </p>
            </div>

            <div className="w-2/5 bg-white shadow-xl px-4 py-2 rounded-3xl">
              <p className="text-xs text-[#3FB76F]">
                <span className="bg-[##3FB76F] w-1 px-1.5 h-1 text-[##3FB76F] rounded-full">
                  -
                </span>{' '}
                Ativo
              </p>

              <p className="text-md lg:text-lg">Cadastrados</p>
              <p className="font-bold text-[5rem] mx-auto text-center">
                {/* {devices.length || 0} */}
                100
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full px-4 mt-6">
            <p className="font-bold text-1xl">Locais</p>
          </div>

          <hr className="mb-4 bg-[#55D2D9] w-full p-[0.075rem]" />

          {devices && devices.length > 0 ? (
            devices.map((item) => <LocationCard key={item.id} {...item} />)
          ) : (
            <p className="text-center">Nenhum dispositivo encontrado</p>
          )}
        </div>

        <Footer selected={'dispositivos'} />
      </Layout>
    </>
  );
};
export default Dispositivos;
