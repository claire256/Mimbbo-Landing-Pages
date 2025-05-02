import Image from "next/image";

const Testimonials = () => (
  <section
    className=" md:mt-28 mt-10 section-padding"
    data-aos="fade-up"
  >
    <h2 className="text-2xl font-semibold theme-title ">Testimonials</h2>
    <div className="grid gap-14 md:mt-14   sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 lg:place-items-center testimonialss">
      {[
        {
          name: "Siv K.",
          role: "Nurse, Owner, Hairitaje",
          text: "Mimbbo makes it so easy to pick up beauty gigs during my off seasons from travel nursing. It’s perfect for keeping my business, Hairitaje, busy when I need it—and letting me focus on my nursing career when I don’t.",
          src: "/sru.png",
        },
        {
          name: "Dorcas N.",
          role: "College Student",
          text: `I've been using the app to pick up makeup gigs on the weekends. It’s perfect for making extra cash when I need it, without the commitment of a full-time job.`,
          src: "/dorc.png",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="flex justify-between gap-1 border-[#C5CAD3] h-auto w-auto border  testimonial_img"
        >
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            width={270}
            height={320}
            className="w-auto h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="testimonial_text">
            <div>
              <h3 className="text-lg font-medium select-none">{testimonial.name}</h3>
              <p className="text-xs text-muted-foreground select-none">
                {testimonial.role}
              </p>
            </div>
            <p className="mt-4 text-sm select-none">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
