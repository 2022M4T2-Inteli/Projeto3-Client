import Link from 'next/link';
import { Devices } from '@assets/Devices';
import { Start } from '@assets/Start';
import { Documents } from '@assets/Documents';

export const HomeFooter = () => {
  return (
    <div className="px-4 pb-4 pt-2 w-full fixed bottom-0">
      <div className="bg-white flex flex-row justify-around mx-auto border-2 border-gray-50 rounded-lg shadow-xl w-full md:w-4/5 lg:w-1/3">
        <Link href="/ativos">
          <a className="flex flex-col justify-center items-center">
            <Devices className="mb-2" />
            <p className="text-gray-400">Dispositivos</p>
          </a>
        </Link>

        <Link href="/home">
          <a className="flex flex-col justify-center items-center py-4">
            <Start className="mb-2" width={48} />
            <p className="text-gray-900 font-semibold">Inicial</p>
          </a>
        </Link>

        <Link href="/relatorios">
          <a className="flex flex-col justify-center items-center">
            <Documents className="mb-2" />
            <p className="text-gray-400">Documentos</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
