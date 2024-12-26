 import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carousel() {
  return (
    <div className="relative w-full h-auto">
    {/* Image for large screens */}
    <div className="block relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[716px]">
      <Image
        src={women}
        alt="Summer collection"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 70%" // Adjust to focus on the hand of the girl
        priority
      />
    </div>
  
    {/* Content Overlay */}
    <div className="absolute flex flex-col justify-center mt-10 left-[20px] sm:left-[40px] md:left-[80px] lg:left-[100px] top-[35px] sm:top-[80px] md:top-[90px] lg:top-[100px] items-start gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] px-4 sm:px-8 lg:px-16 z-10">
      <h5 className="font-Montserrat font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] text-white">
        SUMMER 2020
      </h5>
      <h1 className="font-Montserrat font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px] text-white max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
        NEW COLLECTION
      </h1>
      <h4 className="font-Montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-white max-w-[350px] sm:max-w-[450px] lg:max-w-[500px]">
        We know how large objects will act, but things on a small scale.
      </h4>
      <button className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[221px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[62px] rounded-[5px] px-[20px] sm:px-[30px] md:px-[35px] lg:px-[40px] py-[10px] sm:py-[12px] md:py-[14px] lg:py-[15px] bg-[#2DC071] text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-Montserrat leading-[28px] sm:leading-[30px] md:leading-[32px] justify-center">
        SHOP NOW
      </button>
    </div>
  </div>
  

  );
}
