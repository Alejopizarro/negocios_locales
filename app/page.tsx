import Cases from "@/components/cases";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Problems from "@/components/problems";
import Solutions from "@/components/solutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problems />
      <Solutions />
      <Cases />
      <Pricing />
    </div>
  );
}
