// Index (não utilizada) - Redireciona para a login

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  });

  return (
    <Layout>
      <div className="flex flex-1 flex-col justify-evenly text-center h-screen w-screen">
        <p>Projeto 4 - Beacon School - IOBee</p>
      </div>
    </Layout>
  );
}
