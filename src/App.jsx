// import React from 'react'
// import Loginbutton from "./components/button"
// const App = () => {
//   let lists = [
//     {
//         name:'Ali',
//         id:1
//     },
//     {
//         name:'Vali',
//         id:1
//     }
//  ]
//     return (
//     <div>
//       {
//     lists.map((el,i)=>{
//         return <div key={el.id}>{el.name}</div>
//     })
//     }
//     </div>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import Forheader from "./components/header";
import Loginbutton from "./components/button";
import ProductsCard from "./components/products";
import Realfooter from "./components/footer";
import headImg from "./assets/Rectangle 10342.png";

const App = () => {
  return (
    <div>
      <Forheader />
      <section className="sec1header">
        <aside className="headTitle">
          <p>WE’RE STILL</p>
          <h1>Filling up the spaces.</h1>
          <div className="headBtn">
            <Loginbutton text="Explore Marketplace" />
            <p>See Top Deals</p>
          </div>
        </aside>
        <aside className="HeadImg">
          <img src={headImg} alt="" />
        </aside>
      </section>
      <main>
        <section style={{backgroundColor:"#F8F8F8",marginTop:"50px"}}>
          <div className="top">
            <p>Our Top Deals</p>
            <div className="explore">
              <p>Explore</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className="Our_products">
        <ProductsCard/>
<ProductsCard/>
<ProductsCard/>
        </section>
        <section style={{backgroundColor:"#F8F8F8",marginTop:"50px"}}>
          <div className="top">
            <p>Our Top Deals</p>
            <div className="explore">
              <p>Explore</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className="Our_products">
        <ProductsCard/>
<ProductsCard/>
<ProductsCard/>
        </section>
        <section className="subscribe">
          <div className="subText">
            <h1>Subscribe to Our Newsletter</h1>
            <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
      <div className="enterEmail">
        <input type="text" placeholder="Enter your Email Here " />
        <button className="subBtn">Subscribe</button>
        {/* <Loginbutton /> */}
        </div>    
      </div>
        </section>
      </main>
      <footer>
<Realfooter/>
      </footer>
    </div>
  );
};

export default App;
