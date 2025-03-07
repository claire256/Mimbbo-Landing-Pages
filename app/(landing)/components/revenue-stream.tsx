"use client";
import ImageGrid from "./image-grid";

const RevenueStream = () => {
  return (
    <section className="section-h" data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title">Unlock a New Revenue Stream</h2>
      <p className="mt-2 text-sm text-muted-foreground md:text-base paragraph">
        Let clients book directly with you through the mobile app, and start your journey
      </p>
      {/* grid layout */}
      <ImageGrid />
    </section>
  );
};

export default RevenueStream;
