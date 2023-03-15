import React from 'react';

const Footer = () => {
    return (
        <>
    <div className='footer-distributed'>
        <div className='footer-left'>
            <div className='footerMargin'>
                <a href="https://www.facebook.com/profile.php?id=100057589534390" style={{fontSize: 20}} target="_blank"><i className="fa-brands fa-facebook"></i><p style ={{marginLeft: 10}}className='footer-company-name'>Holsted maskinudlejning</p></a>
                
            </div>
        </div>
        
        <div className='footer-center'>
            <div className='footerStyleCenter'>
            <a href="https://goo.gl/maps/2xfSApMh4HuVHq6u5" style={{fontSize: 20, color: 'black'}} target="_blank">
                <i className="fa fa-map-marker"></i> 
                <p style={{marginLeft: 15, fontSize: 12}}>Ribevej 10 - 6670 Holsted - CVR. 43 65 71 86</p>
            </a>
            </div>
            <div className='footerStyleCenter'>
            <a href="tel:30140243" style={{color: 'black'}}>
				<i className="fa fa-phone"></i>
                </a>
				<p style = {{marginLeft: 10}}>Per Hansen 21 24 44 42 - Rasmus Hansen 30 14 02 43</p>
			</div>
          
        </div>
        
        <div className='footer-right'>
           
            <div>
            <a href="mailto:support@company.com">
            <i className="fa-solid fa-envelope"></i>
               <p>mail@holstedmaskinudlejning.dk</p></a>
            </div>
        </div>
    </div>
        </>
   
    )
};

export default Footer;

