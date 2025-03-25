import Image from "next/image";

const WhyJoin = () => (
  <section className="section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold pt-16 theme-title">Why Join Mimbbo?</h2>
    <div className="grid gap-6 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { src: '/marketing.png', title: 'Less marketing', desc: 'Stop cold calling potential clients! Our platform brings clients directly to you' },
        { src: '/dollar.png', title: "It's Free", desc: 'No signup fee, no monthly fee, no hidden fees' },
        { src: '/time.png', title: 'Work when you want', desc: 'Set your own schedule and choose which clients to work with' }
      ].map((item, index) => (
        <div key={index} className="flex flex-col border border-[#C5CAD3] joining_card">
          <div className="icon">
            <Image src={item.src} alt={item.title} height={60} width={60} className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyJoin;