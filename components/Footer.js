// Componente de Footer utilizado em diversas telas

import Link from "next/link";
import { Chart } from "/assets/footer/Chart";
import { Devices } from "/assets/footer/Devices";
import { Documents } from "/assets/footer/Documents";
import { Graph } from "/assets/footer/Graph";
import { Start } from "/assets/footer/Start";

export const Footer = (props) => {
  const selected = props.selected || 'home';

  return (
    <div className="px-4 pb-4 pt-2 w-full fixed bottom-0">
      <div className="bg-white flex flex-row justify-around mx-auto border-2 border-gray-50 rounded-lg shadow-xl w-full md:w-4/5 lg:w-1/3">
        <Link href="/dispositivos">
          <a className="flex flex-col justify-center items-center py-4">
            <Devices className="mb-2" selected={selected === 'dispositivos'} />

            {selected == 'dispositivos' ? (
              <p className="text-gray-400">Relatórios</p>
            ) : (
              <p className="text-sm text-gray-500 opacity-0 hover:opacity-100 duration-300 absolute">
                Dispositivos
              </p>
            )}
          </a>
        </Link>

        <Link href="/ativos">
          <a className="flex flex-col justify-center items-center py-4">
            <Graph className="mb-2" selected={selected === 'ativos'} />

            {selected == 'ativos' ? (
              <p className="text-gray-400">Ativos</p>
            ) : (
              <p className="text-sm text-gray-500 opacity-0 hover:opacity-100 duration-300 absolute">
                Ativos
              </p>
            )}
          </a>
        </Link>

        <Link href="/home">
          <a className="flex flex-col justify-center items-center py-4">
            <Start className="mb-2" selected={selected === 'home'} />

            {selected == 'home' ? (
              <p className="text-gray-400">Início</p>
            ) : (
              <p className="text-sm text-gray-500 opacity-0 hover:opacity-100 duration-300 absolute">
                Início
              </p>
            )}
          </a>
        </Link>

        <Link href="/dashboard">
          <a className="flex flex-col justify-center items-center py-4">
            <Chart className="mb-2" selected={selected === 'dashboards'} />

            {selected == 'dashboards' ? (
              <p className="text-gray-400">Dashboards</p>
            ) : (
              <p className="text-sm text-gray-500 opacity-0 hover:opacity-100 duration-300 absolute">
                Dashboards
              </p>
            )}
          </a>
        </Link>

        <Link href="/relatorios">
          <a className="flex flex-col justify-center items-center py-4">
            <Documents className="mb-2" selected={selected === 'relatorios'} />

            {selected == 'relatorios' ? (
              <p className="text-gray-400">Relatórios</p>
            ) : (
              <p className="text-sm text-gray-500 opacity-0 hover:opacity-100 duration-300 absolute">
                Relatórios
              </p>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};
