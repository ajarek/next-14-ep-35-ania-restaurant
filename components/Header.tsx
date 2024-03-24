import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'

import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
import Links from './Links'

const Header = async () => {
  const session = await auth()
  return (
    <>
      <div className='w-full bg-secondary flex justify-between items-center gap-4 px-4 '>
        <Links />
        <div className='w-1/4 flex justify-between items-center italic'>
          <Logout session={session} />
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default Header
