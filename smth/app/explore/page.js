import React from 'react'
import PageTitle from '../components/PageTitle'
import WellnessCard from '../components/WellnessCard'

const resources = [
  {
    id: 1,
    title: 'Mindfulness Meditation',
    description: 'Learn mindfulness techniques to improve mental well-being.',
    image: 'meditation.png',
    category: 'Mindfulness',
  },
  {
    id: 2,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 3,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 4,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 5,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 6,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 7,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 8,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 9,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
  {
    id: 10,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
];

const page = () => {
  return (
    <div>
      <PageTitle title="Explore Opportunities" size="4"/>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-4/5 min-h-9/10 mx-auto">
      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <WellnessCard id={resource.id} title={resource.title} desc={resource.description} img={resource.image}/>
        ))}
      </div> }
      </div>
    </div>
  )
}

export default page
