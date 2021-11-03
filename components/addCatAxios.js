import axios from "axios";
import { useState, useEffect } from "react";

const AddCatAxios=()=> {
  const query="cat"
  const apikey="563492ad6f91700001000001a96d6ebb374043e4b223c47aabb38a78";
  const url = "https://api.pexels.com/v1/search?query="+query; //get
  
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    axios.get(url, {headers: {Authorization: apikey}})
    .then(res => {
        const result=res.data;
        setUrlImage(result.photos[0].src.original);
    })
  }, []);
  return (
    <>
      <img src={urlImage}   width="300" height="300"></img>
    </>
  );
}

export default AddCatAxios;