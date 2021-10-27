//import Tutorial2 from "./tutorial2";
import Link from 'next/link'

const Tutorial1=()=> {
    
    return (
      <>
        <h1>Tutorial: Cómo enviar una consulta GET a una API web desde una aplicación REACT / NEXT y parsear el archivo JSON</h1>
        
        <p>Para hacer este tutorial se busco una API en la web, el resultado de la búsqueda es una API llamada pexels <a href="https://www.pexels.com/es-es/api/">https://www.pexels.com/es-es/api/</a>.
            Al registrarse en la API, generamos una API KEY 563492ad6f91700001000001a96d6ebb374043e4b223c47aabb38a78 para ser uso de los datos que nos ofrece.
        </p>

        <p>Con la API KEY se vincula este proyecto con los datos brindado por la API WEB 
        </p>
        
        
        
        <Link href="/apiConection">
                <button>Get Started</button>
        </Link>
        
    
        
        <style jsx>{`
        h1 {
            text-align: center;
            padding: 40px 0px 25px 0px;
            
            font-size: 35px;
        },
        p {
            text-align: center;
            font-size: 30px;
            padding: 0px 25px 25px 25px;
        }
        button {
            background-color: orange;
            color: white;
            padding: 15px 32px; 
            text-align: center; 
            font-size: 26px; 
            margin: 0 auto;
            display: block;
        }
        

        `}
        </style>



      </>
  )
}
export default Tutorial1;