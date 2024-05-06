import React from "react";
import Image from "next/image";
import img from "../public/home.jpg.jpg"


export default function Home() {
  return (
    <main>
      
         <div className="flex justify-start p-6">
         <Image src={img} width={500} height={200} alt="logo" ></Image>
         <span className="flex justify-items-end p-40 font-semibold text-9xl text-green-500 ">Welcome to Aiub Hospital Management System</span>
         </div>
       
       
      
    </main>
    
  );
} 
