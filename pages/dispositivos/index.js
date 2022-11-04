import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import { Footer } from '@components/Footer';
import { TagCard } from 'components/Card';
import { useState } from 'react';
import { TagModal } from 'components/Modal';

export const Dispositivos = () => {
  const [sample, setSample] = useState([
    {
      title: 'Tag Sensor',
      status: 'ativo',
      date: '07/05',
      observation: 'Observação',
    },
    {
      title: 'Tag Sensor',
      status: 'desativado',
      date: '07/04',
      observation: '',
    },
    {
      title: 'Tag Sensor',
      status: 'ativo',
      date: '07/06',
      observation: '',
    },
    {
      title: 'Tag Sensor',
      status: 'desativado',
      date: '07/07',
      observation: '',
    },
    {
      title: 'Tag Sensor',
      status: 'ativo',
      date: '07/08',
      observation: '',
    },
    {
      title: 'Tag Sensor',
      status: 'desativado',
      date: '07/11',
      observation: '',
    },
  ]);

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
        title="Dispositivos"
        className="bg-white flex flex-col items-center"
      >
        <div className="w-full pt-4 pl-4">
          <Arrow size={35} />
        </div>
        <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <div className="w-full flex flex-col pt-5 justify-center">
            <p className="font-bold text-center pb-5 text-2xl">Tag Sensor</p>
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

              <p className="text-lg">Implementados</p>
              <p className="font-bold text-[5rem] mx-auto text-center ">30</p>
            </div>

            <div className="w-2/5 bg-white shadow-xl px-4 py-2 rounded-3xl">
              <p className="text-xs text-[#FF3B3B]">
                <span className="bg-[#FF3B3B] w-1 px-1.5 h-1 text-[#FF3B3B] rounded-full">
                  -
                </span>{' '}
                desativados
              </p>

              <p className="text-lg">Manutenção</p>
              <p className="font-bold text-[5rem] mx-auto text-center">30</p>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full px-4 mt-6">
            <p className="font-bold text-1xl">{"Tag'"}s</p>
          </div>

          <hr className="mb-4 bg-[#55D2D9] w-full p-[0.075rem]" />

          {sample.map((item) => (
            <TagCard
              key={item.title + item.date}
              {...item}
              onClick={() => toggleModal(item)}
              className={'cursor-pointer'}
            />
          ))}
        </div>

        <Footer selected={'dispositivos'} />
      </Layout>
    </>
  );
};
export default Dispositivos;
