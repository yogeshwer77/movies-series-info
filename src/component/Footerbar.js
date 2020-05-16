import React from 'react'

function Footerbar() {
    return (
        <div>
            <div className='row'>
        <div className='col-md-12'>
            <div className='footer p3 mt-4 text-center bg-dark text-light'>
            Developed By:
            <span className='text-warning Font-weight-normal'>
                YogeshWer
            </span>
            , Using <i className='fab fa-react'/> React JS &amp; Redux JS intergrated with external movies data API 
             <a href='http://www.omdbapi.com/' target='_blank' rel="noopener noreferrer">
                OMDB
            </a>
            </div>

        </div>
            </div>
        </div>
    )
}

export default Footerbar
