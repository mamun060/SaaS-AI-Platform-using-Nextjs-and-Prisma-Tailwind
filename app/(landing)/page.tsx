import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function LandingPage() {
  return (
    <div className=' text-center'>
        <p className=' text-center text-2xl py-5 font-semibold '>The landing page is unprotected </p>
        <div className=' flex justify-center gap-4'>
          <div>
            <Button variant="default">
              <Link href='/sing-in'>Login</Link>
            </Button>
          </div>
          <div>
            <Button variant="destructive">
              <Link href='/sing-up'>Register</Link>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default LandingPage