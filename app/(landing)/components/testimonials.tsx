import Image from "next/image";

const Testimonials = () => (
  <section className="p md:px-8 md:pt-24 section-padding" data-aos="fade-up">
    <h2 className="text-2xl font-semibold theme-title">Testimonials</h2>
    <div className="grid gap-4 mt-8 sm:grid-cols-2 testimonialss">
      {[
        { name: 'Siv K.', role: 'Nurse, Owner, Hairitaje', text: 'Mimbbo makes it so easy to pick up beauty gigs...', src: '/su.png' },
        { name: 'Dorcas N.', role: 'College Student', text: `I've been using the app to pick up makeup gigs...`, src: '/su.png' }
      ].map((testimonial, index) => (
        <div key={index} className="flex justify-between gap-2 border-[#C5CAD3] rounded-[24px] h-[320px] border testimonial_img">
          <Image src={testimonial.src} alt={testimonial.name} width={60} height={60} className="w-full h-full rounded-[10px] object-cover mb-4 sm:mb-0" />
          <div className="testimonial_text">
            <div>
              <h3 className="text-lg font-medium">{testimonial.name}</h3>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
            <p className="mt-4 text-sm">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;