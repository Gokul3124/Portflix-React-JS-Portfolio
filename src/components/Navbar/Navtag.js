import React from 'react';
import '../Navbar/Navtag.css';
import { Photo } from './photo';

const Navtag = () => {
  return (
    <>
    <div className='favor'>
        <h4>gokul</h4>
      <ul>
        <li>home</li>
        <li>bio</li>
        <li>achivements</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
    </div>
    <Photo />
    </>
  )
}

export default Navtag;
