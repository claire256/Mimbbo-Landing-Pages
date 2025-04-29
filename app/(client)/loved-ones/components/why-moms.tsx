import WhySection from '@/components/why-section';

const items = [
  {
    src: '/skip.png',
    title: 'Skip the Sitters',
    des: 'No need to arrange childcare. Get pampered while the kids nap or play.',
  },
  {
    src: '/stay.png',
    title: 'Stay in Your Comfort Zone',
    des: 'No more rushing across town. We bring the beauty studio to your living room.',
  },
  {
    src: '/flexible.png',
    title: 'Flexible Scheduling',
    des: 'Early mornings, late evenings, weekends—we work around your life.',
  },
  {
    src: '/selfcare.png',
    title: 'Real Self-Care, Finally',
    des: 'You do so much for everyone else. This one’s for you.',
  },
];

export default function WhyMoms() {
  return (
    <main>
    <WhySection
      title="Why Moms Love Mimbbo"
      subtitle="Aliquam lacinia diam quis lacus euismod"
      imageSrc="/curlymom.png"
      items={items}
    />
    </main>
  );
}
