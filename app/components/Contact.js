"use client"
import React, { useState } from 'react';
import { redirect } from 'next/navigation'
import Image from 'next/image';

const emailInbox = "direccion@focassi.com.mx";

export function Contact() {
  const [emailDone, setEmailDone] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };
    console.log("data in process", data);
    setSendingEmail(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailInbox}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response;
      console.log("Response Data", responseData);
      setSendingEmail(false);
      setName('');
      setEmail('');
      setMessage('');
      setEmailDone(true);

    } catch (error) {
      console.error("Error Submit!", error);
    }
  };

  return (
    <>
      { emailDone ? (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">¡Gracias por contactarnos!</h1>
        <p className="text-lg text-gray-700 mb-8">Nos pondremos en contacto pronto contigo .</p>
        <Image src="https://res.cloudinary.com/dtisjc6sf/image/upload/v1689359545/Focassi/ThankyouEmail_fimcdo.svg"
          alt="Thank You" width={256} height={256} className="w-64 h-64 mb-8" />
        <a href="/" className="bg-amber-500 text-white px-4 py-2 rounded-md text-lg hover:bg-amber-600">Volver a la página
          principal</a>
      </div>
      ) : (
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
      )}
    </>

  )
}