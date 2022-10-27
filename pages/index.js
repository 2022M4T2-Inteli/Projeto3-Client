import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Link href="/login">
        <a>Login</a>
      </Link>

      <Link href="/cadastro">
        <a>Cadastro</a>
      </Link>
    </Layout>
  )
}
