import { useState, useEffect } from "react";

const AddCat=()=> {
    
  const query="cat"
  const apikey="563492ad6f91700001000001a96d6ebb374043e4b223c47aabb38a78";
  const url = "https://api.pexels.com/v1/search?query="+query; //get
      
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    fetch(url, {headers: {Authorization: apikey}})
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setUrlImage(result.photos[0].src.original);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <img src={urlImage}   width="300" height="300"></img>
      </>
    );
  }
}




export default AddCat;