"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div className={cn("text-2xl font-bold text-white", font.className)}>
          SINGL 
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
       
          <Button variant="outline" className="rounded-full">
            Check Demo
          </Button>
     
      </div>
    </nav>
  )
}