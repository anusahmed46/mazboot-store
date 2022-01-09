import React from 'react'
import pic1 from './images/pic1.jpeg';

const Home = () => {
    return (
        <div>
           <div className="card bg-white" >
  <img src={pic1} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h1 className="card-title lead fw-bold text-center" style={{fontSize:"90px",color:"black",marginTop :"170px"}}>welcome to mazboot store</h1>
    <hr style={{width : "1150px",color : "white"}}></hr>
    <h4 className="card-text text-center" style={{fontSize:"24px",color:"white"}}>Always include plenty of product detail Tell a story to differentiate your store from big businesses.How do you describe a product to a <span style={{color:"black"}}>new customer? What information needs to go on a store page,</span> and how can you convince customers</h4>
    <p className="card-text text-center" style={{fontSize:"24px",color:"white",marginTop:"40px"}}>we have the one of the best variety of clothing in the town</p>
  </div>
</div>
        </div>
    )
}

export default Home;
