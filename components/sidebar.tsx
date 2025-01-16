"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sora } from 'next/font/google'
import { cn } from "@/lib/utils";
import {  FileBadgeIcon, CameraIcon , PhoneCallIcon, UsersIcon, BarChartBig, FileLineChartIcon, DatabaseBackupIcon, ThermometerSunIcon, CheckCircle2Icon, ShieldCheckIcon} from "lucide-react";



const poppins = Sora ({ weight: '600', subsets: ['latin'] });

const routes = [

    {
        label: 'Verification Status',
        icon: ShieldCheckIcon,
        href: '/verification',
        color: "text-violet-500"
      },

      {
        label: 'Photo ID Verification',
        icon: CameraIcon,
        href: '/photo',
        color: "text-pink-700"
      },

      {
        label: 'Document Verification',
        icon: FileBadgeIcon,
        href: '/document',
        color: "text-orange-700"
      },

      {
        label: 'Phone Verification',
        icon: PhoneCallIcon,
        href: '/phone',
        color: "text-emerald-500"
      },

      {
        label: 'Chat with AI Agent',
        icon: UsersIcon,
        href: '/chat',
        color: "text-blue-700"
      },

      {
        label: 'Analyse your Data',
        icon: BarChartBig,
        href: '/data',
        color: "text-brown-700"
      },
    

];


const Sidebar = () => {
  

    const pathname = usePathname();

return (

    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white overflow-auto">
        <div className="px-3 py-2 flex-1 flex flex-col items-center justify-center">
    <h1 className={cn("text-l font-bold", poppins.className)}>
     <center>  Deriv Affiliate <br/> Platform </center>
    </h1>
            
            <div className="space-y-1" >
            {routes.map((route, index: number) => (
                    <Link
                    href={route.href} 
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-star font-medium curosor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                    index === 0 ? "mt-4" : "" // Add margin-top to the first button
    )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 m-5 mr-3", route.color)} />
                            {route.label} 

                        </div>
                    
                    </Link>


                ) )}



            </div>



        </div> 
        

    </div>
);

}

export default Sidebar;