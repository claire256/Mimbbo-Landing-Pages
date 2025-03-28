import Image from "next/image";

const WhyJoin = () => (
  <section className="section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold pt-16 theme-title">
      Why Join Mimbbo?
    </h2>
    <div className="grid gap-6 pt-14 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2">
      {[
        {
          src: "/Group.png",
          title: "More convenient",
          desc: "Enjoy the freedom to choose pros that match your budget and timing.",
        },
        {
          src: "/dollar.png",
          title: "Budget friendly",
          desc: "Set your budget upfront and receive offers from beauty pros who match your price range.",
        },
        {
          src: "/time.png",
          title: "Save time",
          desc: "Get quick replies from local beauty pros without the back-and-forth messaging.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col border border-[#C5CAD3] joining_card"
        >
          <div className="icon">
            <Image
              src={item.src}
              alt={item.title}
              height={60}
              width={60}
              className="w-12 h-12 text-primary"
            />
          </div>
          <h3 className="font-semibold pt-4">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyJoin;
