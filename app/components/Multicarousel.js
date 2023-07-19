"use client"
import Image from "next/image";
import { clientsData } from "./clients.json";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const cloudURL = "https://res.cloudinary.com/dtisjc6sf/image/upload/c_thumb,w_385,h_274,g_auto/f_auto/q_auto/v1/";

const imgNotFound = "https://res.cloudinary.com/dtisjc6sf/image/upload/v1689639751/Focassi/clients/image-not-found_ip2pjj.jpg";


export function Multicarousel() {
  const clients = clientsData;

  const responsive = {
    tow_xl: {
      breakpoint: { max: 3500, min: 1535 },
      items: 5
    },
    xl: {
      breakpoint: { max: 1535, min: 1280 },
      items: 4
    },
    lg: {
      breakpoint: { max: 1279, min: 1024 },
      items: 4
    },
    md: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 767, min: 640 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="p-5">
      <Carousel
        responsive={responsive}
        ssr
        showDots={true}
        slidesToSlide={1}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="container-with-dots"
        itemClass="image-item"
        deviceType={''}
      >
        {clients.map(({ id, name, img }) => {
          return (
            <div key={id} className={"block w-11/12 sm:w-60 sm:my-6 sm:px-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"}>
              <a href="#!" className="text-center" >
                <Image src={`${img ?  img : imgNotFound}`} width={150} height={150} alt={name} className="w-11/12 sm:w-60" />
              </a>
              <div className={"p-6 break-before-column"}>
                <h5
                  className={"mb-2 text-md break-before-column font-normal leading-tight text-neutral-800"}>
                  {name}
                </h5>
              </div>
            </div>
          )
        })}
      </Carousel>

    </div>
  );
}

