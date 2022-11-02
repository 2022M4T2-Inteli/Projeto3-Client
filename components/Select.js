export const Select = (props) => {
  const { options, title } = props;

  return (
    <div className="p-0 w-full">
      <p className="font-bold mb-2">{title}</p>

      <select
        className={`bg-[#f7f7f9] rounded-xl p-4 w-full mb-4 shadow-lg`}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option value={value} className="text-gray-400" key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
