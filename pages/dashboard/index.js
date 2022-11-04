// Página de Dashboard

import { Layout } from '@components/Layout';
import { Arrow } from '@assets/Arrow';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from 'recharts';
import { Footer } from 'components/Footer';

export const Dashboard = () => {
  const data = [
    {
      name: 'Semana 1',
      cadastrados: 98,
      emprestados: 50,
    },
    {
      name: 'Semana 2',
      cadastrados: 90,
      emprestados: 60,
    },
    {
      name: 'Semana 3',
      cadastrados: 95,
      emprestados: 78,
    },
  ];
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center">
          <p className="pb-6 font-bold text-2xl justify-center text-center w-full">
            Dashboard
          </p>
          <input
            type="text"
            id="input-group-1"
            className="w-full pr-10 p-2.5 bg-[#F5F9FD] rounded-2xl px-2 py-4"
            placeholder="Procure dispositivo..."
          />
        </div>
        <div className="w-full flex flex-col justify-center pt-5 shadow-lg mt-8">
          <BarChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            title={'Dispositivos Cadastrados'}
            barGap={7.5}
          >
            <CartesianGrid strokeDasharray="0" vertical={false} opacity={0.3} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend align="left" />

            <Bar dataKey="emprestados" fill="#fa7901" barSize={20} />
            <Bar dataKey="cadastrados" fill="#55d2d9" barSize={20} />
          </BarChart>
        </div>
      </div>

      <Footer selected={'dashboards'} />
    </Layout>
  );
};

export default Dashboard;
