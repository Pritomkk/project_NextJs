import React from "react";
import Link from "next/link";
import Image from 'next/image';
import img from '../public/images.png'

const Header=()=>
  {
    return(
        <nav className="p-6 flex bg bg-green-200 justify-between items-center">
          <a href="/" className="flex gap-2 items-center">
              <Image src={img} width={30} height={30} alt="logo"></Image>
              <span className="text-lg font-bold font-display hover:color">Aiub Hospital Management System</span>
          </a>
  
          <div className="flex gap-10">    
            <Link href='/'>Home</Link>
            <Link href ='/about'><h1>About</h1></Link>
            <Link href='/Contact'>Contact</Link>
          </div>  
          <div className="flex gap-7">
          <Link href='/Signin'>Signin Admin</Link> 
         
          <Link href='/SignUp'>SignUp</Link>
            
          </div>   

          <div>
          
          </div>
             
           
        </nav>


   );
}

export default Header