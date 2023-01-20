import React from 'react';
import './Contact.scss';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    }
  });

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
            'service_xi6kjuh',
            'template_1s6tunc01',
            refForm.current,
            'csAyKsUHyISuBrAK8'
        )
        .then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
    <div>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    required />
                            </li>
                            <li className='half'>
                                <input 
                                    type="email"
                                    name='email'
                                    placeholder='E-mail'
                                    required />
                            </li>
                            <li>
                                <input 
                                    placeholder='Subject'
                                    type='text'
                                    name='subject'
                                    required />
                            </li>
                            <li>
                                <textarea
                                    placeholder='Message'
                                    name="message" 
                                    required>
                                </textarea>
                            </li>
                            <li>
                            <input 
                                    className='flat-button'
                                    value='SEND'
                                    type='submit'
                                    required />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Jonathan Hubbard,
                <br />
                United States,
                <br />
                Atlanta,
                <br />
                Georgia
                <br />
                <br />
                <span>dotcomdv@gmail.com</span>
            </div>
            <div className="map-wrap">
          <MapContainer center={[33.7488, 84.3877]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.7488, 84.3877]}>
              <Popup>Jonathan lives here, come over for a cup of coffee!</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type='pacman' />
    </div>
  )
}

export default Contact
