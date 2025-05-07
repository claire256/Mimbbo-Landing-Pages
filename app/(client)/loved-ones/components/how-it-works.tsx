
import HowItWorks from "@/components/how-it-works";

const steps = [
  {
    src: "/message.png",
    title: "Tell us what you need",
    des: "From a fresh set of nails to a complete hair makeover.",
  },
  {
    src: "/pro.png",
    title: "Pick a pro",
    des: "Browse trusted professionals available near you.",
  },
  {
    src: "/mirror.png",
    title: "Relax & get pampered",
    des: "Your chosen expert comes to you — no stress, no commute.",
  },
];

export default function HowItWorksHome() {
  return (
    <main>
      <HowItWorks
        title="How it Works"
        description="Whether it’s hair, nails, makeup, or lashes — Mimbbo brings beauty services to your doorstep. Skip the salon and enjoy personal care where you’re most comfortable."
        steps={steps}
        showImages={true}
      />
    </main>
  );
}
