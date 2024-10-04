import blogLog from "@/components/assets/blogLog.png";
import Image from "next/image";
import Container from "./Container";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm h-[80px] pt-3">
      <nav>
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={blogLog}
              alt="Blog Logo"
              width={80}
              height={80}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-3xl font-bold">
              Tech <span className="text-[#0d4674]">Talk</span>
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Blog"
              className="w-[300px] h-10  rounded-md border border-gray-300 focus:outline-none text-[#0d4674] pl-3"
            />
            <div className="absolute top-2 right-3 cursor-pointer">
              <Search size={20} color="#0d4674" />
            </div>
          </div>
          <ul className="flex items-center gap-10 font-normal text-xl">
            <li>Home</li>
            <li>All Blogs</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
