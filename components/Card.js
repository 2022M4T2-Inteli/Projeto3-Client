import { Profile } from '../assets/Profile';
import { Out } from '../assets/out';
import { In } from '../assets/In';
import { Download } from '../assets/Download';

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
