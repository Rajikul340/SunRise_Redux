import { addProductData } from "../../ActionCreatores/ProductAction";

const postproduct= (product) =>{
    return async (dispatch, getState)=>{
    const res= await fetch("http://localhost:5000/product", {
        method:"POST",
        body: JSON.stringify(product),
        headers: {
            "content-type": "application/json"
        }
    })
   const data = res.json();

   if(data.acknowledged){
   
       
        dispatch(
            addProductData({
              _id: data.insertedId,
              ...product,
            })
          );
   }

    }
}
export default postproduct;