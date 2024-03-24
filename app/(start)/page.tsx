import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import { Header } from  "./header";
import { Footer } from  "./footer";
import Link from "next/link";
import { Loader } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return(
     <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-1xl font-bold text-neutral-600 max-w-[480px] text-center">
          Desbrave o meu portifólio de <span className="bg-orange-400 text-neutral-100 font-bold">DESENVOLVEDORA MOBILE E FRONT-END</span> e não hesite em me chamar nas redes sociais se quiser bater um papo!
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">

          <Button size="lg" variant="primary" className="w-full">
            <Link href="/pt-br">
              Continuar
            </Link>
          </Button> 
          </div>   
      </div>
    </div>
  );
}
