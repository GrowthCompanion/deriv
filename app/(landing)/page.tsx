import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white font-bold mb-8">Deriv Affiliate AI Platform</h1>
      <div className="flex flex-col gap-4"> 
        <a href="/verification" className="bg-blue-500 text-center text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-block">
          Proceed to Demo
        </a>
       
      </div>
    </div>
  );
};

export default LandingPage;
