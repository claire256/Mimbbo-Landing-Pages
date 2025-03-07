"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="max-w-5xl px-6 pt-16 mx-auto text-center md:px-8 md:pt-24" data-aos="fade-up">
      <h1 className="text-4xl font-bold tracking-tight banner_text">
        Find Your Next <br /> Beauty Gig Here
      </h1>
      <p className="mt-4 text-sm text-muted-foreground md:text-base banner-p">
        Join thousands of beauty pros who have found gigs on Mimbbo in 3 minutes
      </p>
      <Button className="px-6 py-2 mt-6 text-white rounded-md theme-btn">Join as a client</Button>
      <p className="mt-2 text-xs text-muted-foreground alrdy">
        Already have an account?{" "}
        <Link href="#" className="underline">
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default HeroSection;
