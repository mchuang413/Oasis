import React from 'react'
import PageTitle from '@/app/components/PageTitle'


const resources = [
  {
    id: 1,
    title: 'Mindfulness Meditation',
    description: 'Learn mindfulness techniques to improve mental well-being.',
    category: 'Mindfulness',
  },
  {
    id: 2,
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    category: 'Yoga',
  },
];

const page = () => {
  return (
    <div>
      <PageTitle title="Explore Opportunities" size="4"/>
      
    </div>
  )
}

export default page
