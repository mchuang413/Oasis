import React from 'react'
import PageTitle from '../components/PageTitle'
import WellnessCard from '../components/WellnessCard'

const resources = [
  {
    id: 1,
    website: '',
    title: 'Mindfulness Meditation',
    description: 'Learn mindfulness techniques to improve mental well-being.',
    image: 'meditation.jpeg',
    category: 'Mindfulness',
  },
  {
    id: 2,
    website: 'https://www.youtube.com/watch?v=j7rKKpwdXNE&ab_channel=YogaWithAdriene',
    title: 'Yoga for Beginners',
    description: 'yoga yoga yoga yogurt!',
    image: 'yoga-with-adriene-1152x576.jpg',
    category: 'Yoga',
  },
  {
    id: 3,
    website: 'https://www.mindful.org/a-12-minute-meditation-to-replenish-cognitive-energy/',
    title: '12-Minute Meditation to Replenish Cognitive Energy',
    description: 'Boost your cognitive energy resources by intentionally focusing on your senses and all that you notice in and around your body.',
    image: 'smile.webp',
    category: 'Meditation',
  },
  {
    id: 4,
    website: 'https://www.mindful.org/why-we-talk-to-ourselves-the-science-of-your-internal-monologue/',
    title: 'Why We Talk to Ourselves: The Science of Your Internal Monologue',
    description: 'Some of us chatter to ourselves all day long while others’ inner lives take the form of pictures or, like Einstein, abstract visual concepts. But as mindfulness urges us to pay more attention, it’s worth asking: What can our interior life teach us?',
    image: 'brain.jpg',
    category: 'Focus',
  },
  {
    id: 5,
    website: 'https://www.mindful.org/a-12-minute-meditation-to-remind-yourself-that-you-are-enough/',
    title: '12-Minute Meditation to Remind Yourself That You Are Enough',
    description: 'In this guided meditation, Jenée Johnson offers affirmations to help you remember your inherent worth and reconnect with compassion.',
    image: 'A-12-Minute-Meditation-to-Remind-Yourself-That-You-Are-Enough-.png',
    category: 'Meditation',
  },
  {
    id: 6,
    website: 'https://calmmindfulness.org/',
    title: 'CALM - Centre For The Advanced Learning of Mindfulness',
    description: 'CALM provides the Mindfulness for Earth (M4E) and Mindfulness-Based Cognitive Therapy for Life (MBCT-L) programmes within the public, private and government sectors including Mental Health, Education, and Police organisations in the U.K., Europe, U.S.A., and internationally.',
    image: 'waterfall.jpg',
    category: 'Mindfulness',
  },
  {
    id: 7,
    website: 'https://www.uclahealth.org/programs/marc/free-guided-meditations/guided-meditations',
    title: 'UCLA Health',
    description: 'For an introduction to mindfulness meditation that you can practice on your own, download the UCLA Mindful App (iTunes / Google Play), stream, or download the guided meditations below. Recorded by UCLA MARC\'s Director of Mindfulness Education, Diana Winston.',
    image: 'ucla.jpg',
    category: 'Meditation',
  },
  {
    id: 8,
    website: 'https://chopra.com/',
    title: 'Chopra',
    description: 'We believe well-being should be accessible for all. We know self-care doesn\'t look the same for everyone, and that\'s ok. That\'s why we provide resources for every person, in every stage of their journey.',
    image: 'chopra.png',
    category: 'Self-care',
  },
  {
    id: 8,
    website: 'https://www.mindful.org/most-habit-tools-fail-with-anxiety-heres-one-that-works/',
    title: 'Most Habit-Change Tools Fail With Anxiety—Here’s One that Works',
    description: 'Our automatic reactions are the result of unexamined habits, including anxiety. In his book Unwinding Anxiety, neuroscientist and psychiatrist Judson Brewer explores how mindfulness can plant the seeds for a calmer mind.',
    image: 'habit.png',
    category: 'Anxiety',
  }
];

const page = () => {
  return (
    <div>
      <PageTitle title="Explore Opportunities" size="4"/>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-4/5 min-h-9/10 mx-auto">
      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <WellnessCard id={resource.id} website={resource.w} title={resource.title} desc={resource.description} img={resource.image} tag={resource.category}/>
        ))}
      </div> }
      </div>
    </div>
  )
}

export default page
