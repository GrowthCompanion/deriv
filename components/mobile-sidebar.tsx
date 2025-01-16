"use client";

import  React from "react";
import { useEffect, useState } from "react";
import { DatabaseBackupIcon, FileBadgeIcon, FileCodeIcon, FileLineChartIcon, Menu, ShieldCheckIcon, ThermometerSunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from 'next/font/google'
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, PlaneIcon, GiftIcon, GamepadIcon, PenIcon, SettingsIcon, MoonIcon} from "lucide-react";



const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [

  {
      label: 'Summarize Text',
      icon: FileCodeIcon,
      href: '/summarizer',
      color: "text-violet-500"
    },

    {
      label: 'Chat with PDF',
      icon: FileBadgeIcon,
      href: '/chat',
      color: "text-pink-700"
    },

    {
      label: 'Text to SQL',
      icon: FileLineChartIcon,
      href: '/sql',
      color: "text-orange-700"
    },

    {
      label: 'Unstructured Data',
      icon: DatabaseBackupIcon,
      href: '/unstructured',
      color: "text-emerald-500"
    },

    {
      label: 'Sentiment Analyzer ',
      icon: ThermometerSunIcon,
      href: '/sentiment',
      color: "text-blue-700"
    },

    {
      label: 'Identify Anomaly',
      icon: ShieldCheckIcon,
      href: '/anamoly',
      color: "text-brown-700"
    },
  

];



export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }



  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="p-0">

      <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white overflow-auto">
        <div className="px-3 py-2 flex-1">
        
                <h1 className= {cn("text-l font-bold", poppins.className)}>
                   <center> Alpharithm AI </center>
                </h1>
        
            <div className="space-y-1">
                {routes.map((route) =>(
                    <Link
                    href={route.href} 
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-star font-medium curosor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    )}
                    ><SheetClose>
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 m-5 mr-3", route.color)} />
                            {route.label} 

                        </div>
                    </SheetClose>
                    </Link>


                ) )}



            </div>



        </div> 
       

    </div>
);
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar