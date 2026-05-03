import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Differentials } from "@/components/differentials";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Quote } from "@/components/quote";
import { CTAFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <div className="hairline" aria-hidden="true" />
        <Features />
        <Differentials />
        <HowItWorks />
        <Pricing />
        <Quote />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
