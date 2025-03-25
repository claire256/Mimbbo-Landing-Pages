import Image from "next/image";

const WhyJoin = () => (
  <section className="section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold pt-16 theme-title">Why Join Mimbbo?</h2>
    <div className="grid gap-6 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { src: '/marketing.png', title: 'Less marketing', desc: 'Clients post service requests; you pick what works for you. No need to chase them.' },
        { src: '/dollar.png', title: "It's Free", desc: 'No fees, no cuts—join free and keep every dollar you earn.' },
        { src: '/time.png', title: 'Work when you want', desc: 'Pick them up on your schedule—no commitments , no pressure.' }
      ].map((item, index) => (
        <div key={index} className="flex flex-col border border-[#C5CAD3] joining_card">
          <div className="icon">
            <Image src={item.src} alt={item.title} height={60} width={60} className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-semibold pt-4">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyJoin;