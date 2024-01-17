import React from 'react'
import Link from 'next/link'

const About = ({}) => {
  return (
    <>
    <div class="place-items-center grid grid-cols-2 gap-1 py-8">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="/assets/michael.jpg" alt="chris" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Michael Chuang</h2>
          <p>I swim</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="/assets/chris.jpg" alt="'michael'" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Christopher Zhang</h2>
          <p>I ski</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default About