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
              <Link className='text-xl font-semibold hover:text-sky-300' href='/shop'>Shop Now</Link>
            </Button>
          </aside>
        </section>
      </div>

      {/* cartegories */}
      <div className="w-full px-2 flex items-center mt-4">
        <ScrollAreaHorizontalDemo />
      </div>

      {/* About us */}

      <div className="w-full mt-3 min-h-max md:min-h-[80vh] grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 pb-3 ">
        <section className="relative">
          <Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=95&w=374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className='min-h-[300px] max-h-[400px] w-full max-w-[374px] self-center object-cover mx-auto'
            fill
            alt="Cover Image Loadu=ing..."
          />
        </section>
        <section className="px-2 flex flex-col align-middle">
          <h1 className='text-4xl font-bold mb-1 text-muted-foreground'>About us</h1>
          <p className='text-lg leading-6 font-semibold mb-2 '>Welcome to our premier shoe store in the heart of Kenya, where we bring you the finest selection of footwear that combines style, comfort, and quality. At our store, we understand that a great pair of shoes can make all the difference in your day, and we&apos;re here to make sure you find the perfect fit. We take pride in offering a wide range of shoe options for every occasion, from casual to formal, all curated to meet the highest standards of quality. Our commitment to providing the best in footwear is unwavering, and we source our products from trusted brands to ensure that each pair is not just stylish, but also durable and comfortable.
          </p>

          <Button asChild>
            <Link href='/shop' className={cn('mt-4 w-[90%] mx-auto text-lg hover:underline md:w-[200px]')}>See Our Products</Link>
          </Button>
        </section>

      </div>

      <div className="w-full px-4 bg-opacity-70 pb-8 md:w-[80%] border-4 mx-auto mb-4 rounded text-center border-muted py-2 mt-2">
        <h3 className="text-2xl mb-1 font-bold text-accent-foreground  ">Our Dedication</h3>
        <p className='mx-auto  font-bold text-xl'>
          We are dedicated to delivering a seamless shopping experience, which is why we offer convenient, reliable delivery services across Kenya.
        </p>
        <p className='mx-auto  font-semibold text-lg'>
          With our simple online ordering system, you can browse our extensive collection, select your favorite styles, and have them delivered right to your doorstep. Whether you&apos;re searching for the latest fashion trends or classic staples, we have something for everyone. Trust us to be your go-to destination for top-quality shoes, and experience the joy of walking in style and comfort. Your satisfaction is our priority, and we can&apos;t wait to help you put your best foot forward.</p>
      </div>

    </div>
  )
}
