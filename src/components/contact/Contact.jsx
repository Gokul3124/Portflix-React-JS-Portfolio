import React from 'react'
import'../contact/Contact.css'
import Facebook from "../datas/logo-facebook.svg";
import Github from "../datas/logo-github.svg";
import Whatsapp from "../datas/logo-whatsapp.svg";
import Instagram from "../datas/logo-instagram.svg";


const Contact = () => {
  return (
    <div className='con'>
        <h1>get in touch</h1>
        <div className='tech'>
            
            <div className='p2'>
                <div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.086459210564!2d80.1991722301662!3d12.979154909194222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707405066500!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            </div>

            <div className='p1p'>

            <div className='p1'>
                <ul>
                    <li><b>Follow us on</b></li>
                    <li>
                        <a href="#connect"><img src={Whatsapp} alt=''/></a>
                    </li>
                    <li>
                        <a href="#"><img src={Facebook} alt=''/></a>
                    </li>
                    <li>
                        <a href="#"><img src={Instagram} alt=''/></a>
                    </li>
                    <li>
                        <a href="#"><img src={Github} alt=''/></a>
                    </li>
                </ul>
            </div>

            <div className="footon">
                <ul>
                    <li><b>Contact us on:</b></li>
                    <li>PH:7598325639</li>
                    <li>Email:gokulselvam9842@gmail.com</li>
                </ul>
            </div>

            </div>
            
        </div>
        <p>2024@ All Rights Reserved by gokul</p>
    </div>
  )
}

export default Contact
