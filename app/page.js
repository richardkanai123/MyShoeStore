import { ScrollAreaHorizontalDemo } from '@/components/CartegoryScroll'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1531185038189-41815d864f32?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: 'overlay'
      }} className="w-full min-h-[80vh] relative object-cover object-center flex align-middle justify-start">

        <section className='flex flex-col px-4 min-h-full w-full md:w-3/4 lg:w-1/2 align-middle justify-center'>
          <h1 className='text-7xl font-extrabold text-white opacity-100 '>Walk in Style</h1>
          <p className='text-xl font-semibold text-sky-100'>And Skate in Comfort</p>

          <aside className='w-full flex gap-4 align-middle mt-6'>
            <Button className={cn('p-7')} asChild>
              <Link className='text-xl font-semibold hover:text-sky-300' href='/Shop'>Shop Now</Link>
            </Button>
          </aside>
        </section>
      </div>

      {/* cartegories */}

      <div className="w-full px-2 flex items-center mt-4">
        <ScrollAreaHorizontalDemo />

      </div>
    </div>
  )
}
