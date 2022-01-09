import React from 'react'

const Footer = () => {
    return (
        <div> 
            <div style={{backgroundColor :"black"}}>
                <div >
                    <div className='col md-12 py-5 text-center'>
                        <h6 className='fw-bold' style={{color:"white"}}>@copyright reserved</h6>
                        <h5 style={{color:"white"}}>mazboot store</h5>
                        <hr/>
                        <a><i class="fab fa-facebook" style={{color:"white"}}></i></a>
                        <a><i class="fab fa-instagram" style={{color:"white",marginLeft:"8px"}}></i></a>
                        <a><i class="fab fa-google" style={{color:"white",marginLeft:"8px"}}></i></a>
                        <a><i class="fab fa-twitter" style={{color:"white",marginLeft:"8px"}}></i></a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
