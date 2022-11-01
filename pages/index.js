import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div className='flex flex-1 flex-col justify-evenly text-center h-screen w-screen'>
        <Link href='/'>Home</Link>

        <Link href="/login">Login</Link>
        <Link href="/login/verification">Login Verification</Link>

        <Link href="/funcionarios">Funcionarios</Link>
        <Link href="/funcionarios/adicionar">Funcionarios Adicionar</Link>

        <Link href="/emprestimo">Emprestimo</Link>
      </div>
    </Layout>
  );
}
