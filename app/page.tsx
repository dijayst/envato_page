import Image from "next/image";
import chai from '../public/chai.jpg'
import avocado from '../public/avocado.png'
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
    <section>
     
      <div className="relative">
<Image src={chai} alt="chia" className="bg-cover w-full "/>
 <div className=" bg-white w-[28rem]  absolute top-1/3 left-1/12 text-lg font-bold text-red-700 p-5" >
    <div className="flex flex-col gap-4">
      
      <h1 className="text-[45px] text-[#43121d] font-semibold">Good food choices are good investments.</h1>
     
      <p className="text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
   
    <div className="flex gap-6">
          <button  className="p-7 bg-[#a82d49] text-white  md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none"
         ><Link href="#">Order Now </Link></button>
           <button className=" bg-white text-black  md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none"><Link href="#">Learn More  </Link></button>
        </div>
    </div>
        
       
        </div>
    </div>

   
    </section>
    <section >
      <div className="bg-[#a82d49] flex gap-50 px-40 py-15 text-white ">
        <div className="flex-col gap-20">
          <p className="font-semibold text-4xl">1287+</p><p className="font-semibold text-sm">SAVINGS</p>
          </div>
         <div className="flex-col gap-20"><p className="font-semibold text-4xl">5786+</p><p className="font-semibold text-sm">PHOTOS</p></div>
          <div className="flex-col gap-20"><p className="font-semibold text-4xl">1440+</p><p className="font-semibold text-sm">ROCKETS</p></div>
           <div className="flex-col gap-20"><p className="font-semibold text-4xl">7110+</p><p className="font-semibold text-sm">GLOBE</p></div>
        
      </div>
    </section>

    <section className=" pt-20">
      <div className="flex gap-5 max-w-6xl  w-full mx-auto  " >

<Image src={avocado} alt="chia"  className="bg-cover w-[62%] rounded-xl  object-cover object-top"/>
<div>
  <p>We pride ourselves on making real food from the best ingredients.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
 <button  className="p-7 bg-[#a82d49] text-white  md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none"
         ><Link href="#">Learn More  </Link></button>
         
</div>
      </div>
    </section>
    </div>
  );
}
