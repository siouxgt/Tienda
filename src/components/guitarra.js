import Image from "next/image"
import Link from "next/link"
import styles from  "../styles/guitarras.module.css"


export default function Guitarra({guitarra}) {

 const {descripcion, imagenes, nombre, numeros, url } = guitarra

 return (
    <div className={styles.guitarra}>
      <Image src={imagenes.data.attributes.formats.medium.url} width={600} height={400} 
      alt={`Imagenes guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3> {nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${numeros}</p>
        <Link legacyBehavior href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver productos
          </a>
        </Link>
        
      </div>
     

    </div>
  )
}
