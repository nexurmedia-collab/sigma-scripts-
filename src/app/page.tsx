import Hero from "@/components/sections/Hero";
import CommunityIntro from "@/components/sections/CommunityIntro";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedScripts from "@/components/sections/FeaturedScripts";
import ScriptPacks from "@/components/sections/ScriptPacks";
import LibraryAccessCTA from "@/components/sections/LibraryAccessCTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Showcase from "@/components/sections/Showcase";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunityIntro />
      <TrustBar />
      <ScriptPacks />
      <LibraryAccessCTA />
      <FeaturedScripts />
      <WhyChooseUs />
      <Showcase />
      <Reviews />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
