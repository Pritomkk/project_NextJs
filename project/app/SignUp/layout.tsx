import { Inter } from "next/font/google";

import Header from "../Header";
import Footer from "../Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main>
      {children}  
      </main>
      <Footer/>
      
      
      
      </body>
      
    </html>
  )
};