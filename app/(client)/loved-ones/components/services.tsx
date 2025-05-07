import Services from "@/components/services";

const servicesData = [
  {
    src: "./dryer.png",
    title: "Hair",
    list: ["Silk Presses", "Braids", "Blowouts", "Trims"],
  },
  {
    src: "./cutex.png",
    title: "Nails",
    list: ["Manis", "Pedis", "Gel sets", "Nail art"],
  },
  {
    src: "./skin.png",
    title: "Skin",
    list: ["Facials", "Brow shaping", "Lash extensions"],
  },
  {
    src: "./event.png",
    title: "Events",
    list: ["Quick glam for weddings, parties, or big moments"],
  },
];

export default function ServicesHome() {
  return (
    <Services
      heading="What Services Can You Book?"
      services={servicesData}
      bgColor="bg-white"
    />
  );
}
