import { Button } from "../../../components/ui/button";
import heroImage from "../../../assets/stream-hero-section.jpeg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col items-center gap-10">
        <div className="mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Stream Live, Capture Leads, Boost Engagement
          </h1>
        </div>
        <div>
          <p className="text-xl text-center">
            Transform your website into a powerful lead generation tool with our seamless live streaming
            solution. Engage your audience in real-time and watch your conversions soar.
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <Link to="/register">
              <Button>Get started</Button>
            </Link>
          </div>
          <div>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg md:rounded-3xl" />
        </div>
      </section>
    </>
  );
}
