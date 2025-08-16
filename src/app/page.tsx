import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillCupHotFill } from "react-icons/bs";
import Image from "next/image";
import my_image from "@/assets/main_page/IMG_20250506_194223_170.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex justify-end items-end mt-4 mr-3">
        <Button className="mr-4 bg-white cursor-pointer" variant={"outline"}>
          <FaGithub />
          <Link href="https://github.com/mohammadrezafotohi" target="_blank">
            My Github
          </Link>
        </Button>
        <Button className="cursor-pointer bg-gray-500 hover:bg-green-500 mr-4">
          <MdAlternateEmail />
          <Link href="mailto:mohammadrezafotohijob@gmail.com">
            Email Me
          </Link>
        </Button>
        <Button className="bg-amber-600 text-black hover:bg-yellow-300 hover:cursor-pointer">
          <BsFillCupHotFill />
          <Link href="http://www.coffeete.ir/mohammadrezafotohijob">
            Buy Me Caffe
          </Link>
        </Button>
      </div>
      <div className="flex mt-40 justify-center items-center">
        <p className="flex-col text-white w-100 mr-75">
          Hello World. I am Mohammadreza Fotohi.
          I am form Iran. I am a software engineer.
          Welcome to my Personal Website.
          If you want you can start me in Github , Email me Or buy me a Caffe. 
        </p>
         <Image src={my_image} alt="Authors' Image" className="flex-col rounded-sm w-100 h-130 ml-75" />
      </div>
    </div>
     );
}
