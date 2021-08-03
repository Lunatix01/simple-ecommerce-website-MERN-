import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          Home
        </title>
      </Head>
      <div className="centered mb-10">
        <h1 className=" text-2xl md:text-7xl text-bold font-roboto">Digital selling with ease</h1>
      </div>
      <div className="text-center centered text-lg md:text-2xl text-gray-500">
        <span >
          You provide the products on ecommerce, we take care of the rest.
        </span>
      </div>
      <div className="centered text-lg md:text-2xl text-gray-500 mb-10">
        <span>
          Day and night.
        </span>
      </div>
      <button className="absolute left-2/4 transform -translate-x-2/4 mb-10 text-2xl text-white">
        <Link href="/register" className=""><a className="relative text-bold btn">Get Started<span className="absolute -right-1 -top-111 w-3 h-3 rounded-lg bg-white animate-ping"></span></a></Link>
      </button>
    </div>
  )
}
