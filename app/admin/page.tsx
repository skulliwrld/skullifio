import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="w-full pt-20 space-y-5 items-center text-center justify-center max-h-full">
        <h1 className="font-bold md:text-4xl">Welcome to my <span className="text-purple-400">Administration Panel</span></h1>
        <p className="text-xl md:text-2xl">Here is where you can create blog post in your block field</p>
        <Button variant='ghost' className="py-10 w-full font-bold md:text-2xl bg-gray-400 text-black text-xl hover:bg-fuchsia-700 hover:text-white "><Link href="/admin/post">Click Here To go To Create Post</Link></Button>
    </div>

  )
}

export default page