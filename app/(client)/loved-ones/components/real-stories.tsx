import CardCarousel from '@/components/card-carousel';

const testimonialCards = [
  {
    id: 1,
    src: '/masai.jpeg',
    name: 'Nia, Atlanta',
    title: 'Working mom',
    text: 'I got a silk press while my toddler watched cartoons. No driving, no stress.',
  },
  {
    id: 2,
    src: '/alex.png',
    name: 'Alexis, Brooklyn',
    title: 'Working Professional',
    text: "I booked lashes for Sunday night-right after bedtime. Best thing I've done for myself in months.",
  },
  {
    id: 3,
    src: '/masai.jpeg',
    name: 'Tasha, Houston',
    title: 'Event Ready',
    text: 'I booked lashes for Sunday night-right after bedtime. Best thing I’ve done for myself in.',
  },
];

export default function RealStories() {
  return (
    <CardCarousel
      title="Real Stories from Real Moms"
      subtitle="Hear from clients just like you."
      cards={testimonialCards}
      bgColor="bg-primary" // Optional
    />
  );
}
