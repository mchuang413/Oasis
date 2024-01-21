import React from 'react'
import Link from 'next/link'

const About = ({}) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-black-800 mb-4">About</h1>
      <div class="place-items-center grid grid-cols-2 gap-1 py-8">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="/assets/michael.jpg" alt="chris" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Michael Chuang</h2>
            <p>
              Hello, I'm Michael Chuang, a sophomore at Cupertino High School. My passion lies in coding and creating projects, and I'm excited about how this website can assist you. In a rapidly advancing technological world, prioritizing well-being and maintaining a happy lifestyle is crucial. Beyond coding, I'm a competitive swimmer representing the Santa Clara Swim Club national swim team. Swimming serves as a valuable means to relax the body during stressful times.</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="/assets/chris.jpg" alt="'michael'" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Christopher Zhang</h2>
            <p>Greetings, I'm Christopher Zhang, a sophomore at Cupertino High School. I have a keen interest in coding projects and derive great satisfaction from assisting others in their endeavors. Beyond the digital realm, I find joy in tennis, piano, and skiing. On weekends, you'll often find me at Lake Tahoe, indulging in the thrill of skiing. I believe in the power of technology and diverse hobbies to enrich our lives. Let's embark on this journey together!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
