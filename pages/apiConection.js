import Dogs from "../components/dogs";
import AddCat from "../components/addCat";
//import AddCatAxios from "../components/addCatAxios";
import { useState } from "react";

const ApiConection=({data, dataText})=>{

  console.log(data);
  console.log(dataText);

  const dataObject = JSON.parse(dataText);

  const [conectionCat,setConectionCat] = useState(false);
 
  return (
        <>
            <h1>Documentación disponible en <a href="https://nextjs.org/docs/basic-features/data-fetching">https://nextjs.org/docs/basic-features/data-fetching</a> y <a href="https://es.reactjs.org/docs/faq-ajax.html">https://es.reactjs.org/docs/faq-ajax.html</a></h1>
            <Dogs data={dataObject.photos}/>
            
            <button onClick={()=>setConectionCat(true)}>
                  Add cat
            </button>
            <button onClick={()=>setConectionCat(false)}>
                  Delete cat
            </button>
            
            {conectionCat&&<AddCat/>}

            <style jsx>{`
              button {
                background-color: orange;
                color: white;
                padding: 15px 32px; 
                text-align: center; 
                font-size: 26px; 
                margin: 0 auto;
                display: block;
            }`}</style>
        </>
    )
}

export async function getServerSideProps() { //or getStaticProps
    const apikey="563492ad6f91700001000001a96d6ebb374043e4b223c47aabb38a78";
    const url = "https://api.pexels.com/v1/search/?query=dog"; //get
    const res = await fetch( url, {
        //method:'GET',
        headers: {Authorization: apikey}})

    const data = await res.json();   //.json() obtiene data en forma de objeto y .text() obtiene la data en texto
    const dataText = JSON.stringify(data);
    
    return {
      props: {
        data, 
        dataText,
      },
    }
  }

  export default ApiConection;