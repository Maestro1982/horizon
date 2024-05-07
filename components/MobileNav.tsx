'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { sidebarLinks } from '@/constants';

import { cn } from '@/lib/utils';

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/icons/hamburger.svg'
            alt='Menu icon'
            height={30}
            width={30}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <Link
            href='/'
            className='flex cursor-pointer items-center gap-1 px-4'
          >
            <Image
              src='/icons/logo.svg'
              alt='Horizon logo'
              height={34}
              width={34}
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
              Horizon
            </h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex flex-col h-full gap-6 pt-16 text-white'>
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn('mobilenav-sheet_close w-full', {
                          'bg-bank-gradient': isActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          height={20}
                          width={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive,
                          })}
                        />
                        <p
                          className={cn('text-16 font-semibold text-black-2', {
                            'text-white': isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            Footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
export default MobileNav;
