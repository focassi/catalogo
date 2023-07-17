"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Course } from './Course';

import {coursesData} from './courses.json';

export function Courses({title, n}) {
  const coursesToShow = (n === null) ? coursesData : coursesData.slice(0, n);

  return (
    <div className={'container mx-auto max-w-screen-xl'}>
      <div className={"pt-10 pb-5"}>
        <h3 className={"w-full text-4xl text-center font-light"}>
          {title}
        </h3>
      </div>
      <div className={"flex flex-wrap justify-around pb-8"}>
        {
          coursesToShow.map(({ title, img, description }) => (
            <Course key={title} title={title} img={img} description={description} className={`px-6 md:px-0`}/>
          ))
        }
      </div>
    </div>
  )
}
