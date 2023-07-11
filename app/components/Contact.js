"use client"
import React, { useState } from 'react';


export function Contact() {
  let sendingEmail = false;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };
    console.log("data in process", data);
    sendingEmail = true;
    const postEmail = await fetch("https://formsubmit.co/ajax/direccion@focassi.com.mx", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    console.log("Response data ...", postEmail);
    sendingEmail = false;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className={"my-10"} onSubmit={handleSubmit}>
        <div className={"mb-5"}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre, Apellidos" autoComplete="false" className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-1`} minLength={6} maxLength={100} required />

        </div>

        <div className={"mb-5"}>
          <label htmlFor="email_address" className={"sr-only"}>
            Email Address
          </label>
          <input type="email" placeholder="Correo Electrónico" 
          value={email} onChange={(e) => setEmail(e.target.value)}
           autoComplete="false" 
           className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-1`} required />
        </div>

        <div className={"mb-3"}>
          <textarea value={message} placeholder="Deja tu mensaje" 
          onChange={(e) => setMessage(e.target.value)} className={`w-full px-4 py-3 border-2 rounded-md outline-none  h-36 focus:ring-1`} required minLength={10} maxLength={500} />
        </div>

        <button
          type="submit"
          className={"w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"}>
          {sendingEmail ? (
            <svg
              className={"w-5 h-5 mx-auto text-white animate-spin"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className={"opacity-25"}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className={"opacity-75"}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>    
            </svg>
          ) : 'Enviar correo'}
        </button>
      </form>
    </div>
  )
}