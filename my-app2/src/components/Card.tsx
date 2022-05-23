import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios, { AxiosResponse } from "axios";
// import { products } from "db.json"



function Card( ) {

  const[thedata, setThedata] = useState<any>([])
 
  useEffect (() => {

     getData()

  },[])


  const getData = () => {
    axios.get("http://localhost:8080/products")
    .then((res : AxiosResponse)  => {
      const { data }= res
     
     
      setThedata(data)

    })

  }

  console.log("the",thedata)

  

  return (
    <div className="item">

      <div  style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>

{thedata.map((el:any) => {

return <>

<div style = {{border:"1px solid black", display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
      
      <img style = {{height:"200px", width:"200px"}} src={el.img} alt ="" className="productImage" />
      <span>
        {/* <Link className="productLink" to={`/${d.id}`}> */}
          {/* Product Name */}
        {/* </Link> */}
      </span>
      <span className="productCategory">{el.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${el.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {el.rating}</span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}

</div>
      <div/>

</>
        
})}
</div>



     

    </div>
  );
}

export { Card };
