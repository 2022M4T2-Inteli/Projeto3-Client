import { Profile } from "../assets/Profile";

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
