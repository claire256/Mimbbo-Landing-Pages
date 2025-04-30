import Image from "next/image";

const WhyJoin = () => (
  <section className="section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold pt-10 md:pt-32 theme-title">
      Why Join Mimbbo?
    </h2>
    <div className="flex flex-wrap gap-6 items-center justify-center md:pt-14">

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
          className=" border border-[#C5CAD3] w-[400px] h-[296px] rounded-xl p-6"
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
          <p className="pt-6 text-base  md:text-[16px] ">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyJoin;
