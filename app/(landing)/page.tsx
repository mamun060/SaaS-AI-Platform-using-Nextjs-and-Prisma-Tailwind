"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter , usePathname } from 'next/navigation';

function LandingPage() {
  const router = useRouter();
  const pathName = usePathname();
  if(pathName === '/'){
    router.push('/sign-in')
  }
  // return (
  //   <div className=' text-center'>
  //       <p className=' text-center text-2xl py-5 font-semibold '>The landing page is unprotected </p>
  //       <div className=' flex justify-center gap-4'>
  //         <div>
  //           <Link href="/sign-in">
  //             <Button variant="default">
  //                 Login
  //             </Button>
  //           </Link>
  //         </div>
  //         <div>
  //           <Link href="/sign-up">
  //             <Button variant="destructive">
  //                 Register
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //   </div>
  // )
}

export default LandingPage