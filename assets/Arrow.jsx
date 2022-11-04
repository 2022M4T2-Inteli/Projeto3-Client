// Seta utilizada para voltar à página anterior
import { useRouter } from "next/router";

export const Arrow = (props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 40}
        height={props.size || 40}
        viewBox="0 0 40 40"
        fill="none"
        {...props}
      >
        <path
          d="M28.18 0C35.24 0 40 4.542 40 11.32v17.34C40 35.44 35.24 40 28.18 40H11.84C4.76 40 0 35.44 0 28.66V11.32C0 4.542 4.76 0 11.84 0h16.34zm-7.76 11.44c-.58-.58-1.54-.58-2.12 0l-7.54 7.5c-.56.56-.56 1.56 0 2.12l7.54 7.5c.58.58 1.54.58 2.12 0 .58-.6.58-1.54 0-2.14l-4.96-4.92h12.7c.84 0 1.5-.68 1.5-1.5 0-.84-.66-1.5-1.5-1.5h-12.7l4.96-4.94c.28-.28.44-.68.44-1.06 0-.378-.16-.76-.44-1.06z"
          fill="#000"
        />
      </svg>
    </button>
  );
};
