import React from "react";
import Loginbutton from "../components/button";
import "./products.css"
import skidkaImg from "../assets/Frame 237500.png";
import dilak from "../assets/Avatar.png";
import productImg from "../assets/Image.png";

const ProductsCard = () => {
    let lists = [
            {
                skidkaImg:`${skidkaImg}`,
                dilak:`${dilak}`,
                productImg:`${productImg}`,
                about:'Nokia Essential Wireless Headphones 120CM BLACK',
                id:1
            },
         ]
  return (
    <div>
        {
            lists.map((el)=>{
return <div className="product">
<div className="price">
    <img src={el.skidkaImg} alt="" />
    <img src={el.dilak} alt="" />
</div>
<img src={el.productImg} alt="" />
<div className="device">
    <button>Audio Devices</button>
    <h4>₦600,000</h4>
</div>
<p>{el.about}</p>
<div className="toCart">
    <p>Add to Cart</p>
    <Loginbutton text="Buy Now"/ >
</div>
</div>
            })
     
        }
    </div>
  );
};

export default ProductsCard;
