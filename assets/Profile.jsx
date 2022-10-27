export const Profile = (props) => {
  const generateRandomHexColor = () => {
    //generate only vibrant colors
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "16"}
      height={props.width * 1.25 || "20"}
      fill="none"
      viewBox="0 0 16 20"
      {...props}
    >
      <path
        fill={generateRandomHexColor() || "#39D98A"}
        d="M8 13.174c4.339 0 8 .705 8 3.425C16 19.32 12.315 20 8 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401zM8 0a5.273 5.273 0 015.294 5.291A5.274 5.274 0 018 10.583a5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 018 0z"
      ></path>
    </svg>
  );
};
