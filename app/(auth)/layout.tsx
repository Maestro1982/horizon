import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}
      <div className='auth-asset'>
        <div>
          <Image
            src='/icons/horizon-auth.png'
            alt='Auth image'
            height={800}
            width={800}
          />
        </div>
      </div>
    </main>
  );
}
