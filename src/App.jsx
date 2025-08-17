import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import BounceLoader from "./components/BounceLoader";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />

      {/* Each section wrapped separately */}
      <Suspense fallback={<BounceLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<BounceLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<BounceLoader />}>
        <Experiences />
      </Suspense>

      <Suspense fallback={<BounceLoader />}>
        <Testimonial />
      </Suspense>

      <Suspense fallback={<BounceLoader />}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
