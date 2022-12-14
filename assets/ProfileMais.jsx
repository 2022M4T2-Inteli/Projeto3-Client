// Ícone de adição de perfil

export const ProfileMais = (props) => {
  return (
    <svg
      width={props.width || 28}
      height={props.width*0.92 || 26}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.263 17.126c5.565 0 10.263.916 10.263 4.452 0 3.537-4.728 4.422-10.263 4.422C4.698 26 0 25.083 0 21.548c0-3.537 4.727-4.422 10.263-4.422zM23.262 6.842c.679 0 1.23.56 1.23 1.248V9.7h1.646c.678 0 1.23.56 1.23 1.247s-.552 1.247-1.23 1.247h-1.646v1.611a1.24 1.24 0 01-1.23 1.248c-.678 0-1.23-.56-1.23-1.248v-1.61h-1.644c-.679 0-1.23-.561-1.23-1.248a1.24 1.24 0 011.23-1.248h1.644V8.09c0-.687.552-1.247 1.23-1.247zM10.263 0c3.77 0 6.791 3.06 6.791 6.879 0 3.818-3.021 6.879-6.79 6.879-3.77 0-6.792-3.061-6.792-6.88C3.472 3.062 6.494 0 10.263 0z"
        fill="#fff"
      />
    </svg>
  );
};
