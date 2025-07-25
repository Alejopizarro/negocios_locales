import AboutUs from "@/components/about-us";
import HeroIii from "@/components/hero-iii";
import HowAbout from "@/components/how-about";
import MobileFirst from "@/components/mobile-first";
import Pricing from "@/components/pricing";
import SeoLocal from "@/components/seo-local";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroIii />
      <AboutUs />
      <HowAbout />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MobileFirst />
        <hr className="my-8 h-[0.05rem] bg-white shadow-2xl shadow-slate-50" />
        <SeoLocal />
      </div>
      {/* <Problems />
      <Solutions />
      <Cases /> */}
      <Pricing />
    </div>
  );
}
