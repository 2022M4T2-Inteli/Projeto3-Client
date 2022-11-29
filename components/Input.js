// Componente de Input utilizado em diversas telas

export const Input = (props) => {
  const { title, type, placeholder, className } = props;

  return (
    <div className={"p-0 w-full mb-4"}>
      <p className="font-bold mb-2">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-[#f7f7f9] rounded-xl px-4 py-4 w-full shadow-lg`}
        {...props}
      />
    </div>
  );
};
