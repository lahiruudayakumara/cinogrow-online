
const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-gray-100 mb-4">
            CinoGrow - Smart Cinnamon Cultivation
          </h1>
          <p className="text-lg sm:text-xl text-white/90 dark:text-gray-200 mb-8">
            CinoGrow is a machine learning–based decision support system designed to
            optimize cinnamon cultivation in Sri Lanka. It integrates AI-driven insights
            for fertilizer recommendations, disease detection, yield forecasting, and
            oil yield optimization empowering farmers to make data-driven, efficient,
            and sustainable agricultural decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#solution"
              className="inline-block px-6 py-3 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 transition cursor-pointer"
              aria-label="Learn more about the solution"
            >
              Learn the Solution
            </a>

            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-white/90 text-green-600 font-medium shadow hover:opacity-90 transition cursor-pointer"
              aria-label="Contact us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
