import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"




export default function Nosotros() {
  return (
    <div>
    <Layout
        title={'Nosotros'}
        description="Sobre nosotros, guitarLa, tienda de musica"
    
    >    
    <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          
          <div>
            <p>Los derechos de autor o copyright son una modalidad de protección del 
              conocimiento científico. En concreto, describen los derechos de los creadores sobre sus obras literarias, 
              artísticas o científicas, tanto derechos patrimoniales como morales
              Los derechos de autor o copyright son una modalidad de protección del 
              conocimiento científico. En concreto, describen los derechos de los creadores sobre sus obras literarias, 
              artísticas o científicas, tanto derechos patrimoniales como morales.Los derechos de autor o copyright son una modalidad de protección del 
              conocimiento científico. En concreto, describen los derechos de los creadores sobre sus obras literarias, 
              artísticas o científicas, tanto derechos patrimoniales como morales.
              
              </p>
          </div>
        </div>

    </main>
    </Layout>

    </div>
  )
}
