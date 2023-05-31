import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
/* import { Inter } from "next/font/google"; */

/* const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <>
      

    <Layout
    
    title={'Inicio'}
    description={'Blog de musica'}
    >
    <h1>Hola mundo en Next</h1>
    <Link href="/nosotros">Inico</Link>
    </Layout>
    </>
  
  )
}

