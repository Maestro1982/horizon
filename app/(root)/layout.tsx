import Image from 'next/image';

import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Kris', lastName: 'Toté' };
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={loggedIn} />
      <div className='flex flex-col size-full'>
        <div className='root-layout'>
          <Image src='/icons/logo.svg' alt='Logo' height={30} width={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
