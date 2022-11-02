import Link from "next/link";
import { Devices } from '@assets/Devices';
import { Start } from '@assets/Start';
import { Documents } from '@assets/Documents';

export const Footer = () => {
  return (
    <div className="px-4 py-5 absolute w-full">
      <div className="bg-white flex flex-row justify-around rounded-lg">
        <Link href="/dispositivos">
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

        <Link href="/documentos">
          <a className="flex flex-col justify-center items-center">
            <Documents className="mb-2" />
            <p className="text-gray-400">Documentos</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
