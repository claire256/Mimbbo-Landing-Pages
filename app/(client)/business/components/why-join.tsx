import Image from "next/image";

const WhyJoin = () => (
  <section className="section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold pt-16 theme-title">
      Why Join Mimbbo?
    </h2>
    <div className="flex flex-wrap gap-10 items-center justify-center pt-14">
      {[
        {
          src: "/marketing.png",
          title: "Less marketing",
          desc: "Clients post service requests; you pick what works for you. No need to chase them.",
        },
        {
          src: "/dollar.png",
          title: "It's Free",
          desc: "No fees, no cuts—join free and keep every dollar you earn.",
        },
        {
          src: "/time.png",
          title: "Work when you want",
          desc: "Pick them up on your schedule—no commitments , no pressure.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="border border-[#C5CAD3] w-[400px] h-[296px] rounded-xl p-6"
        >
          <div className="icon">
            <Image
              src={item.src}
              alt={item.title}
              height={60}
              width={60}
              className=" text-primary"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl pt-10">{item.title}</h3>
          <p className="pt-6 text-sm  md:text-base">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyJoin;
