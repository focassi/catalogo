import { NextResponse } from "next/server";

export async function POST(req){
  return fetch("https://formsubmit.co/ajax/direccion@focassi.com.mx", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)); 
}
