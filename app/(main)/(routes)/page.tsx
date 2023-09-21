import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
const state = true;

export default function Home() {
  return (
    <div className='flex flex-col'>
    This is a protected route.
    <UserButton 
    afterSignOutUrl='/'
    />
    <ModeToggle/>
    </div>
  )
}
