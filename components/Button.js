export const Button = ({
  children,
  className,
  bgColor,
  bgHoverColor,
  rounded,
  textColor,
  type,
}) => {
  return (
    <button
      type={type}
      className={`bg-[${bgColor || "#bfbfbf"}] text-[${
        textColor || "#fff"
      }] w-full rounded-${rounded || "xl"} p-4 hover:bg-[${
        bgHoverColor || "#55d2d9"
      }] font-bold transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
