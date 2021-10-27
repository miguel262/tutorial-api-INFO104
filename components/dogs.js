const Dogs=({data})=> {
    
    //images array of Image with render in page
    const images = data.map((image)=>Image(image.src.original));
    
    return (
      <>
        {images}
      </>
  )
}

const Image=(image) =>{
    return(
      <div className="conteiner" key={image}>
       
        <img src={image}   width="300" height="300"></img> 
       
        <style jsx>{`
          .conteiner {
              text-align: center;
              padding: 2px 2px 2px 2px;
              float:left;
              
        },`}</style>

       </div> 
    )

}

export default Dogs;