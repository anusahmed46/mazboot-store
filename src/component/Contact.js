import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center py-4 my-5'>
                        <h1>have some question?</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5 d-flex justify-conten-center'>
                        <img className='container-fluid' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png' />
                    </div>
                </div>
                <div className='col-md-5' style={{marginTop:"-380px",marginLeft:"550px"}}>
                <form>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Raja Jee"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="rajajee190@gmail.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark" style={{backgroundColor:"black"}}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
