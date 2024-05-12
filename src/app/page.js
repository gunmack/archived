"use client";
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const zone = "America/Vancouver";
  //     try {
  //       const response = await fetch(`http://worldtimeapi.org/api/America/Vancouver`); // Replace with your Flask server URL
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const responseData = await response.json();
  //       setData(responseData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>
  //       Error: {error.message}
  //       </div>;
  // }

  return (
  <main className="bg-zinc-900 flex flex-col items-center justify-between ">
    <Head>
      <link rel="icon" href="/favicon.ico/" sizes="any" />
    </Head>
    <div className=" flex flex-col items-center justify-between px-10">
      <h1 className="text-blue-500 font-mono py-20 text-3xl ">Julkar Naine Reedoy</h1>
    </div>
    <div className="px-20">
      <article className="font-serif text-neutral-50 bg-green-900 px-10 py-10 rounded-lg flex flex-col items-center justify-between text-md">
        <p>
          Hi, my name is Julkar ( Juul-car ). I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
            My preferred languages are:<br></br> 
                -English<br></br>  -C<br></br>  -Python<br></br><br></br>
            I enjoy working with abstract data structures in C and C++.
            I have also worked with CSS frameworks such as Bootstrap and Tailwind to create static HTML directories.
        </p>
      </article>
    </div>
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-between py-10 px-2 text-lg rounded-lg">
        <h1><br></br><br></br>
          <Link href="/SFU"  className="block border border-zinc-900 rounded-lg p-4 hover:bg-blue-900 hover:shadow-lg">
            <Image src="/SRE/SFU.png" alt="SFU" width={200} height={10} className="w-auto h-auto mb-4 rounded-lg px-5" ></Image>
            Website about SFU campuses
          </Link>
        </h1><br></br>
      </div>
      <div className='grid grid-cols-2 p-10'>
        <div className=" flex items-center  px-10 text-md rounded-lg">
          <h1>

            <Link href="https://www.linkedin.com/in/julkar-naine-reedoy-211015217/" target="_blank"  className="block border border-zinc-900 rounded-lg p-4 hover:bg-red-900 hover:shadow-lg">
              <Image src="/SRE/linkedIn.png" alt="LinkedIn" width={50} height={10} className=" w-auto h-auto mb-4 rounded-lg"></Image>
              LinkedIn
            </Link>
          </h1>
        </div>
        <div className="  flex items-center  px-10 text-lg rounded-lg">
          <h1> <br></br>
            <Link href="https://github.com/gunmack" target="_blank"  className="block border border-zinc-900 rounded-lg p-4 hover:bg-neutral-50 hover:shadow-lg">
              <Image src="/SRE/gitHub.png" alt="GitHub" width={50} height={10} className=" w-auto h-auto mb-4 rounded-lg"></Image>
              <p className='  text-red-900'>
                GitHub
              </p>
            </Link>
          </h1>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-between py-10 px-30 text-lg rounded-lg">
        <h1> <br></br>
          <Link href="/Time" target="_blank" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"> Clock</Link>
        </h1>
      </div> */}
      {/* <div className="flex flex-col items-center justify-between py-2 px-2 bg-green-900 rounded-lg">
        {data && (
          <div>
            <p>{data.location}</p>
            <p>Current Time: {data.time}</p>
          </div>
        )}
      </div> */}
    </div>
  </main>
  );
}