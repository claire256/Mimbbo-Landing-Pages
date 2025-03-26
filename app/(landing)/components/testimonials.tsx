import Image from "next/image";

const Testimonials = () => (
  <section
    className="p md:px-8 md:pt-24 section-padding mt-24"
    data-aos="fade-up"
  >
    <h2 className="text-2xl font-semibold theme-title pt-20">Testimonials</h2>
    <div className="grid gap-4 mt-12 sm:grid-cols-2 testimonialss">
      {[
        {
          name: "Siv K.",
          role: "Nurse, Owner, Hairitaje",
          text: "Mimbbo makes it so easy to pick up beauty gigs during my off seasons from travel nursing. It’s perfect for keeping my business, Hairitaje, busy when I need it—and letting me focus on my nursing career when I don’t..",
          src: "/sru.png",
        },
        {
          name: "Dorcas N.",
          role: "College Student",
          text: `I've been using the app to pick up makeup gigs on the weekends. It’s perfect for making extra cash when I need it, without the commitment of a full-time job.`,
          src: "/dorcus.png",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="flex justify-between gap-1 border-[#C5CAD3] h-[320px] border w-[688px] testimonial_img"
        >
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            width={60}
            height={60}
            className="w-full h-full object-cover mb-4 sm:mb-0"
          />
          <div className="testimonial_text">
            <div>
              <h3 className="text-lg font-medium">{testimonial.name}</h3>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
            <p className="mt-4 text-sm">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
