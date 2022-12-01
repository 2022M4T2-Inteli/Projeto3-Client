// Componentes de card (a serem mergeados) utilizados em diversas telas

import { Profile } from '@assets/Profile';
import { Out } from '@assets/Out';
import { In } from '@assets/In';
import { Download } from '@assets/Download';
import { ShieldDone } from '@assets/Shield-Done';
import { ShieldFail } from '@assets/Shield-Fail';
import { Location } from 'assets/Location';

export const Card = ({ name, occupation, date, status }) => {
    return (
        <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
            <div className="my-auto flex flex-row">
                <Profile width={24} className="my-auto mr-4" />

                <div className="flex flex-col">
                    <p className="text-sm lg:text-md">{name}</p>
                    <p className="text-sm opacity-50">{occupation}</p>
                </div>
            </div>

            <div className="flex flex-col justify-end">
                <p className="text-sm lg:text-md font-bold">{date}</p>
                <p className="text-end text-sm opacity-50">{status}</p>
            </div>
        </div>
    );
};

export const DeviceCard = ({
    device,
    borrowed,
    lastUpdate,
    positions,
    isIn = true,
    isOut = false,
}) => {
    let date;
    if (positions[positions.length - 1]) {
        date = new Date(positions[positions.length - 1].time);
        console.log(date.toLocaleTimeString() + ' ' + date.toLocaleDateString());
    }

    return (
        <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
            <div className="my-auto flex flex-row">
                {borrowed.name == '' ? (
                    <In width={24} className="my-auto mr-4" />
                ) : borrowed.name != '' ? (
                    <Out width={24} className="my-auto mr-4" />
                ) : null}

                <div className="flex flex-col">
                    <p className="text-sm lg:text-md">{device}</p>
                    {positions && positions.length > 0 ? (
                        <p className="text-xs opacity-50">
                            {positions[positions.length - 1].place}<br/>
                            {date.toLocaleTimeString() + ' ' + date.toLocaleDateString()}
                        </p>
                    ) : (
                        <p className="text-sm opacity-50">Sem localização</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col justify-end">
                <p className="text-sm lg:text-md font-bold">
                    {Date.parse(lastUpdate)
                        ? new Date(lastUpdate).toLocaleDateString('pt-BR')
                        : lastUpdate}
                </p>
                <p className="text-end text-sm opacity-50">
                    {borrowed.name != '' ? (
                        <span>Emprestado</span>
                    ) : (
                        <span>No estoque</span>
                    )}
                </p>
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
                    <p className="text-sm lg:text-md">{title}</p>
                    <p className="text-sm opacity-50">{about}</p>
                </div>
            </div>

            <div className="flex flex-col justify-end">
                <p className="text-sm lg:text-md font-bold">{date}</p>
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
                    <p className="text-sm lg:text-md">{title}</p>
                    <p
                        className={`text-sm opacity-50 ${
                            status == 'ativo'
                                ? 'text-[#3FB76F]'
                                : 'text-[#FF3B3B]'
                        }`}
                    >
                        {status.toUpperCase()}
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-end">
                <p className="text-sm lg:text-md font-bold">{date}</p>
                <p className="text-end text-sm opacity-50">Data</p>
            </div>
        </div>
    );
};

export const LocationCard = ({ title, location, amount }) => {
    return (
        <div className="bg-white flex flex-row justify-between w-full px-4 py-6 shadow-lg rounded-lg border border-gray-50 mb-6">
            <div className="my-auto flex flex-row">
                <Location width={32} className="my-auto mr-4" />

                <div className="flex flex-col">
                    <p className="text-sm lg:text-md">{title}</p>
                    <p className="text-sm opacity-50">{location}</p>
                </div>
            </div>

            <div className="flex flex-col justify-end">
                <p className="text-md lg:text-lg font-bold text-end">
                    {amount}
                </p>
                <p className="text-sm opacity-50">ativos</p>
            </div>
        </div>
    );
};
