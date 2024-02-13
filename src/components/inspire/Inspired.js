import React from 'react';
import './Inspire.css';

const Inspired = () => {
    return (
        <>
            <div className='skillset'>
                <h1>Skills</h1>
                <div className='decot'></div>
                <div className='skillon'>
                    <div>
                        <h2 className='skhead'>html,css</h2>
                        <p>HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout.</p></div>


                    <div>
                        <h2 className='skhead'>javascript</h2>
                        <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p></div>


                    <div>
                        <h2 className='skhead'>react</h2>
                        <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p></div>

                </div>

                <div className='projects'>
                    <div>
                        <h2 className='skhead'>java</h2>
                        <p>Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and big data applications and server-side technologies.</p></div>

                    <div>
                        <h2 className='skhead'>Springboot</h2>
                        <p>Spring Boot is an open-source, microservice-based Java web framework offered by Spring, particularly useful for software engineers developing web apps and microservices</p></div>
                    <div>
                        <h2 className='skhead'>mysql</h2>
                        <p>MySQL is a relational database management system
                        A relational database stores data in separate tables rather than putting all the data in one big storeroom. The database structure is organized into physical files optimized for speed.</p></div>
                </div>
                <div className='decot'></div>
            </div>
        </>
    )
}

export default Inspired
