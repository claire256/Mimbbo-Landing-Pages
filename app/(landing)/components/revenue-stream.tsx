"use client";
import ImageGrid from "./image-grid";

const RevenueStream = () => {
  return (
    <section className="section-h" data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title font-inter">Unlock a New Revenue Stream</h2>
      <p className="pt-6 text-sm text-dark md:text-base paragraph">
      Earn more by picking up appointment requests from clients near you, without extra marketing
       </p>
      {/* grid layout */}
      <ImageGrid />
    </section>
  );
};

export default RevenueStream;
