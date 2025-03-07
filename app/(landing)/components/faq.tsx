import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";

const FAQ = () => (
  <section className="faqs" data-aos="fade-up">
    <div className="grid gap-8 section-padding faq_section">
      <div className="faq_left">
        <h2 className="text-2xl font-semibold text-left theme-title">Frequently Asked Questions</h2>
        <div className="mt-6 faq_img">
          <Image src="/faq.png" alt="Beauty professional" width={300} height={400} className="object-cover rounded-xl" />
        </div>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: 'What is Mimbbo?', a: 'Mimbbo is a beauty marketplace...' },
            { q: 'Do I work for Mimbbo?', a: 'No, you remain independent...' },
            { q: 'Does this count as in the customer?', a: "No, it doesn't..." },
            { q: 'Is this the same as a house call?', a: 'It can be, if you choose...' },
            { q: 'Do I need a license to use Mimbbo?', a: 'Yes, you need to be licensed...' },
            { q: 'Can I still use my own booking system?', a: 'Yes, but we recommend...' },
            { q: 'What is the difference between direct booking and marketplace post?', a: 'Direct booking allows clients...' },
            { q: 'How much does it cost?', a: 'Mimbbo takes a small percentage...' },
            { q: 'Is Mimbbo available everywhere?', a: 'Mimbbo is expanding...' },
            { q: 'How do I get started?', a: 'Download the app, create your profile...' }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left faq-title">{index + 1}. {faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ