import React from 'react'
import './bio.css'
import profile from '../datas/profile-img.jpg'


const blogo = () => {
  return (

    <div className='me-main'>
        <div className='Me-photo'>
        <img src={profile} alt='profile' height={350}></img>
        </div>
        <div className='Me'>

            <h1>About Me</h1>
            <h2>Hi There I'm Gokul Selvam</h2>
            <h3>React Designer</h3>
            <p>
                Name: S.Gokul<br></br>
                Phone: +917598325639<br></br>
                Email: gokulselvam9842@gmail.com<br></br>
                From: vijaya nagar,North Extension, Velachery<br></br>
                Language: English,Tamil
            </p>
        </div>
    </div>
  )
}

export default blogo
