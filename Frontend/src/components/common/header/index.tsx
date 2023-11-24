import React from 'react';
import './index.scss';

import facebook from '../../../assets/icons/facebook.png';
import x from '../../../assets/icons/x.png';
import linkedIn from '../../../assets/icons/linkedin.png';
import  instagram from '../../../assets/icons/instagram.png';

import logo from '../../../assets/logo/logo.png';

export default function Header () {
    return(
        <>
          <div >
              <div className='rectangleDiv'>
                <p className='welcomeToHinds1'>Welcome to hinds machine (ISO Certified company)</p>
                <div className={'icons'}>
                        <div className={'socialIcons01'}>
                        <img className={'e3ac851901b7444af8c2c6XLogoIcon1'} alt="" src={x} />
                        </div>
                        <div className={'socialIcons01'}>
                        <img className={'e3ac851901b7444af8c2c6XLogoIcon1'} alt="" src={facebook} />
                        </div>
                        <div className={'socialIcons03'}>
                        <img className={'e3ac851901b7444af8c2c6XLogoIcon1'} alt="" src={instagram} />
                        </div>
                        <div className={'socialIcons03'}>
                        <img className={'e3ac851901b7444af8c2c6XLogoIcon1'} alt="" src={linkedIn} />
                        </div>
              </div>
              </div>
             
              <div className='navbar'>
                 <img src={logo} className='logoIcon'/>

                 <div>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Applications</li>
                    <li>Gallery</li>
                    <li>Career</li>
                </ul>
                 </div>

                 <div className='contactUsParent'>
                   <b className='contactUs'> Contact Us</b>  
                 </div>
              </div>

          </div>
        </>
    )
}