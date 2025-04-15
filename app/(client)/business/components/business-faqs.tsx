import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import FaqsComp from "@/components/faqs";


const faqs = [
  {
    q: "1. What is Mimbbo?",
    a: "Mimbbo is a beauty marketplace that makes it easy to find local beauty pros that fit your budget.",
  },
  {
    q: "2. Do I work for Mimbbo?",
    a: "Nope! You remain independent. You have full control over which jobs you take and how you manage your business.",
  },
  {
    q: "3. Does this mean i go to the customer?",
    a: "It depends. Some clients specifically want in-home services — those gigs will be labeled as Mimbbo at Home. If you’re not offering house calls, you can still take regular jobs where clients come to you or meet at your usual location.",
  },
  {
    q: "4. Is it safe to do a house calls?",
    a: (
      <>
        Every client who requests a Mimbbo at Home service must complete our
        verification process before their job goes live. Here’s how we protect
        you:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            ID Verification: Clients are required to upload a government-issued
            ID for identity confirmation.
          </li>
          <li>
            Verified Contact Info: We check email and phone numbers before they
            can post gigs.
          </li>
          <li>
            Location Transparency: You'll know the type of location (home,
            hotel, dorm, etc.) before accepting any job.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "5. Do I need a license to use Mimbbo?",
    a: "Mimbbo is open to all skill levels, whether you’re licensed or self-taught. It’s up to the customer to choose who they want to work with based on your profile, experience, and reviews.",
  },
  {
    q: "6. What areas do I need to travel to?",
    a: "That’s 100% up to you. You set your travel preferences and service radius. Most Mimbbo at Home gigs are within your city or surrounding metro area.",
  },
  {
    q: "7. Can I set my own prices?",
    a: "Yes. For marketplace gigs, you can choose to bid with your rate. For promos or direct bookings, you set your pricing and service terms.",
  },
  {
    q: "8. How much does it cost?",
    a: "Mimbbo is free to join, and you keep 100% of your earnings, minus standard credit card processing fees.",
  },
  {
    q: "9. Is Mimbbo available everywhere?",
    a: "We’re currently focused on select markets, but we’re expanding quickly! Join the platform to get notified when new opportunities are available in your area.",
  },
  {
    q: "10. How do I get started?",
    a: "Sign up on Mimbbo, complete your profile, and start exploring available beauty gigs. You can apply for marketplace jobs, post promotions, and connect with new clients right away!",
  },
];

const FAQ = () => {


  return (
    <section className="faqs" data-aos="fade-up">
           <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8 md:place-items-center section-padding faq_section">
              <div className="faq_left">
                <h2 className="text-2xl font-semibold text-left theme-title">Frequently Asked <br></br>Questions</h2>
                <div className="mt-6 faq_img">
                  <Image
                    src="/faq.png"
                    alt="FAQ Image"
                    width={480}
                    height={520}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
      <FaqsComp faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ;