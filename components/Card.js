// Componentes de card (a serem mergeados) utilizados em diversas telas

import { Profile } from '@assets/Profile';
import { Out } from '@assets/Out';
import { In } from '@assets/In';
import { Download } from '@assets/Download';
import { ShieldDone } from '@assets/Shield-Done';
import { ShieldFail } from '@assets/Shield-Fail';

export const Card = ({ name, occupation, date, status }) => {
  return (
    <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
      <div className="my-auto flex flex-row">
        <Profile width={24} className="my-auto mr-4" />

        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-sm opacity-50">{occupation}</p>
        </div>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-md font-bold">{date}</p>
        <p className="text-end text-sm opacity-50">{status}</p>
      </div>
    </div>
  );
};

export const DeviceCard = ({ device, who, date, status, isIn, isOut }) => {
  return (
    <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
      <div className="my-auto flex flex-row">
        {isIn ? (
          <In width={24} className="my-auto mr-4" />
        ) : isOut ? (
          <Out width={24} className="my-auto mr-4" />
        ) : null}

        <div className="flex flex-col">
          <p className="text-md">{device}</p>
          <p className="text-sm opacity-50">{who}</p>
        </div>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-md font-bold">{date}</p>
        <p className="text-end text-sm opacity-50">{status}</p>
      </div>
    </div>
  );
};

export const DocumentCard = ({ title, about, date, month }) => {
  return (
    <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
      <div className="my-auto flex flex-row">
        <Download width={24} className="my-auto mr-4" />

        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-sm opacity-50">{about}</p>
        </div>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-md font-bold">{date}</p>
        <p className="text-end text-sm opacity-50">{month}</p>
      </div>
    </div>
  );
};

export const TagCard = ({ title, status, date, className, onClick }) => {
  return (
    <div
      className={
        'bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6 ' +
        className
      }
      onClick={onClick}
    >
      <div className="my-auto flex flex-row w-full">
        {status == 'ativo' ? (
          <ShieldDone className="my-auto" />
        ) : (
          <ShieldFail className="my-auto" />
        )}

        <div className="flex flex-col ml-4 w-full">
          <p className="text-md">{title}</p>
          <p
            className={`text-sm opacity-50 ${
              status == 'ativo' ? 'text-[#3FB76F]' : 'text-[#FF3B3B]'
            }`}
          >
            {status.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-md font-bold">{date}</p>
        <p className="text-end text-sm opacity-50">Data</p>
      </div>
    </div>
  );
};
