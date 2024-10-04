import Container from "@/components/Shared/Container";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import { sideImages } from "./heroImage";
import { MessageSquareText } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <Container className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-8 w-full h-[510px] relative">
          <HeroCarousel />
          <div className="absolute top-0 left-0 w-full h-[510px] bg-[#2c3545]/70 rounded-lg pt-40 px-28">
            <div className="bg-[#0d4674] w-[110px] flex rounded-md items-center justify-center">
              <p className=" text-white    items-center">#Technology</p>
            </div>
            <h1 className="text-4xl font-bold text-white mt-10">
              Mastering Modern Web Development with Next.js and TailwindCSS
            </h1>
            <div className="flex items-center gap-4 mt-3">
              <h1 className="text-white">3 June, 2024</h1>
              <p className="flex items-center gap-2 text-white">
                <MessageSquareText /> 0
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full h-[500px]">
          <div className="w-full h-full flex flex-col gap-3">
            {sideImages.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image.url}
                  alt="carousel image"
                  width={1000}
                  height={1000}
                  className="w-full h-[248px] object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-[248px] bg-[#2c3545]/70 rounded-lg pt-16 px-10">
                  <div className="bg-[#0d4674] w-[110px] flex rounded-md items-center justify-center">
                    <p className=" text-white    items-center">#Technology</p>
                  </div>
                  <h1 className="text-2xl font-bold text-white mt-5">
                    {image.title}
                  </h1>
                  <div className="flex items-center gap-4 mt-3">
                    <h1 className="text-white">3 June, 2024</h1>
                    <p className="flex items-center gap-2 text-white">
                      <MessageSquareText /> 0
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
