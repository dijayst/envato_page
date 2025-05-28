import Image from "next/image";
import chai from '../public/chai.jpg'
import avocado from '../public/avocado.png'
import cake from '../public/cake.png'
import Link from "next/link";
import  {titleClassName,headerclass,our_order}  from "../app/data";


export default function Home() {
  return (
    <div >
   <section>
  <div className="relative">
    <Image src={chai} alt="chia" className="bg-cover w-full h-auto" />

    <div className="absolute top-1/3 left-4 md:left-16 max-w-xl w-full p-4 md:p-6 text-[#43121d]">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Good food choices are good investments.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum amet leo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="bg-[#a82d49] text-white px-6 py-2 rounded shadow hover:bg-[#92203c] transition">
            <Link href="#">Order Now</Link>
          </button>

          <button className="bg-white text-black px-6 py-2 rounded shadow opacity-70 hover:opacity-100 transition">
            <Link href="#">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


   
<section>
  <div className="bg-[#a82d49] flex flex-col md:flex-row gap-10 md:gap-50 px-6 md:px-40 py-10 md:py-15 text-white items-center">
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold text-4xl">1287+</p>
      <p className="font-semibold text-sm">SAVINGS</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold text-4xl">5786+</p>
      <p className="font-semibold text-sm">PHOTOS</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold text-4xl">1440+</p>
      <p className="font-semibold text-sm">ROCKETS</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold text-4xl">7110+</p>
      <p className="font-semibold text-sm">GLOBE</p>
    </div>
  </div>
</section>

   <section className="pt-20">
  <div className="flex flex-col md:flex-row gap-5 max-w-6xl w-full mx-auto">
    
    <div className="py-16 flex-1">
      <p className={headerclass}>
        We make everything by hand with the best possible ingredients.
      </p>
      <p className={titleClassName}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <button className="p-4 bg-[#a82d49] text-white md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none">
        <Link href="#">Learn More</Link>
      </button>
    </div>

    <div className="flex-1">
      <Image 
        src={cake} 
        height={400} 
        alt="chia" 
        className="w-full rounded-xl object-cover object-top" 
      />
    </div>
    
  </div>
</section>

<section className="pt-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 md:px-6">
  <div className="mb-6">
    <p className={headerclass}>Explore Our Foods</p>
  </div>

  <p className={titleClassName}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and 
    <span> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</span>
  </p>
</section>

<section>
  <div className="flex flex-col md:flex-row flex-wrap gap-4">
    {our_order.map((item, index) => (
      <div key={index} className="flex flex-col items-start bg-white p-4 rounded-xl shadow-md w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
        <Image
          src={item.img}
          alt="chia"
          className="bg-cover rounded-xl w-full h-auto"
          width={400}
          height={200}
        />
        <p className="mt-2">{item.message}</p>
        <p>{item.time}</p>
        <p>{item.price}</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">{item.order}</button>
      </div>
    ))}
  </div>
</section>



    </div>
  );
}
