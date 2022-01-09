import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-6'>
                       <h1 className='my-3 text-danger fw-bold'>About Us</h1>
                       <p className='lead my-4' style={{fontSize:"20px"}}>
                           An About Us page is crucial when building relationships with your customers <span style={{color:"red",fontWeight:"bold", fontSize:"25px"}}>we are mazboot to satisfy our clients</span> If you’re still not sure whether you need this page on your website, here are a few more reasons why working on it is a good idea Your unique story is what sets yourself apart from the competition and your About Page is the place you can highlight the most important difference
                       </p>
                       <Link to='/contact' className='btn btn-danger'>Contact Us</Link>
                   </div>
                   <div className='col-md-6'>
                       <img className='container-fluid my--2' src="https://s3.envato.com/files/221776704/1.png"/>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About;
