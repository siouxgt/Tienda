import Image from "next/image"

export default function Guitarra({guitarra}) {

 const {descripcion, imagenes, nombre, precio, url } = guitarra



  return (
    <div>
      <Image src={imagenes.data.attributes.formats.medium.url} width={600} height={400} 
      alt={`Imagen guitarra ${nombre}`} />
     

    </div>
  )
}
