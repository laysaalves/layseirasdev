import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
      <Button size="lg" variant="ghost" className="w-full">
      <Link href="">
          <Image 
            src="/eua.svg" 
            alt="Spanish" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
            </Link>
          </Button>
      <Button size="lg" variant="ghost" className="w-full">
      <Link href="">
          <Image 
            src="/it.svg" 
            alt="Spanish" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
            </Link>
          </Button>
      <Button size="lg" variant="ghost" className="w-full">
      <Link href="">
          <Image 
            src="/es.svg" 
            alt="Spanish" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
            </Link>
          </Button>
      </div>
    </footer>
  );
};