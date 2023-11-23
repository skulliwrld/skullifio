import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';



function NavBar({}): any {
  return (
    <nav className= 'w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24'>
      <Link href={"/"}>
        <Image src='/images/skulifio.png' alt='logo' width={150} height={100} className='w-40 cursor-pointe rounded-full'></Image>
      </Link>
{/* DESKTOP NAVIGATION BAR */}
      <div className='md:flex gap-1 md:gap-2 lg:gap-4 hidden'>
        <Button variant="ghost" className="font-semibold text-md">
          <Link href={"/"}>Home</Link>
        </Button>

        <Button variant="ghost" className="font-semibold text-md">
          <Link href={"/about"}>About</Link>
        </Button>

        <Button variant="ghost" className="font-semibold text-md">
          <Link href={"/privacy"}>Privacy Policy</Link>
        </Button>
      </div>

      <Link href="https://github.com/skulliwrld">
           <Button variant="default"
           className="rounded-full w-fit bg-orange-600 gap-2 items-center hidden md:flex" size="lg">
            <span>GitHub Repo</span>
            <span className="text-xl"><BsGithub /></span>
           </Button>
      </Link>

{/* MOBILE NAVIGATION BAR */}
  <Sheet>
    <SheetTrigger className="block md:hidden p-3">
      <span className='text-2xl'>
        <GrMenu />
      </span>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetDescription>
          <div  className='w-full space-y-3'>
            <Link href="/">
              <Button variant='link' className='font-semibold text-md w-full'>Home</Button>
            </Link>

            <Link href="/about">
              <Button variant='link' className='font-semibold text-md w-full'>About</Button>
            </Link>

            <Link href="/privacy">
              <Button variant='link' className='font-semibold text-md w-full'>Privacy Policy</Button>
            </Link>

            <Link href="https://github.com/skulliwrld">
           <Button variant="default"
           className="rounded-full w-fit bg-orange-600 gap-2 items-center  md:flex mt-2" size="lg">
            <span>GitHub Repo</span>
            <span className="text-xl"><BsGithub /></span>
           </Button>
      </Link>

          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
</Sheet>

{/* MOBILE NAVIGATION BAR */}
    </nav>
  )
}

export default NavBar