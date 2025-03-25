"use client";
import Image from "next/image";

const services = [
  { icon: "/hair-styling.png", label: "Haircuts" },
  { icon: "/make-up.png", label: "Make-up" },
  { icon: "/nail-polish.png", label: "Nail Services" },
  { icon: "/cream.png", label: "Skin Care" },
  { icon: "heart.png", label: "Other" }
];

const ServicesOffered = () => {
  return (
    <div className="p-6 bg-white rounded-xl service_card" data-aos="fade-left">
      <h3 className="mb-4 text-sm font-medium text-center service-text">What services do you offer?</h3>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-3 mb-2 rounded-full bg-accent inner_img">
              <Image src={service.icon} alt={service.label} height={20} width={20} className="w-8 h-8 text-primary" />
            </div>
            <span className="text_service">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;
