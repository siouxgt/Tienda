import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"



export default function Tienda({guitarras}) {

  console.log(guitarras);

  return (
   <Layout
        title={'Nosotros'}
        description="Blog de musica, venta de guitarras, consejos"
    >    
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

      {guitarras.map(guitarra => (
        <Guitarra
          key={guitarra.id}
          guitarra={guitarra.attributes}

        />
      ))}
      </main>
    </Layout>
  
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
  const {data: guitarras} = await respuesta.json()
  

  return{
    props: {
      guitarras
    }
  }
}



/* 
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  

  return{
    props: {
      guitarras
    }
  }

} */
