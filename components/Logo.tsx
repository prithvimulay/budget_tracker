"use client";
import { HandCoins } from 'lucide-react'
import React from 'react'

function Logo() {
  return (<a href="/" className='flex item-centre gap-2'>
    <HandCoins className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]'/>
    <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4x1 font-bold leading-tight tracking-tighter text-transparent' style={{ fontSize: '2rem' }}>
      BudgetTracker
    </p>
  </a>  );
}

function LogoMobile() {
  return (<a href="/" className='flex item-centre gap-2'>
    <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4x1 font-bold leading-tight tracking-tighter text-transparent' style={{ fontSize: '2rem' }}>BudgetTracker
    </p>

  </a>  );
}

export default Logo