"use client"
import Image from "next/image";
import { clientsData } from "./clients.json";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const cloudURL = "https://res.cloudinary.com/dtisjc6sf/image/upload/c_thumb,w_385,h_274,g_auto/f_auto/q_auto/v1/";


export function Multicarousel() {
  const clients = clientsData;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="py-5">
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
            <div key={id} className={"block max-w-sm my-6 px-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"}>
              <a href="#!" >
                <Image src={`${img}`} width={385} height={274} alt={name} />
              </a>
              <div className={"p-6"}>
                <h5
                  className={"mb-2 text-xl font-normal leading-tight text-neutral-800"}>
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

