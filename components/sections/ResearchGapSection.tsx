import React from "react";

const gaps = [
  {
    title: "Localized Agronomic Data",
    desc: "Limited high-resolution, region-specific datasets for cinnamon microclimates and soil variability.",
  },
  {
    title: "Integrated Disease Models",
    desc: "Few models combine remote sensing, weather and on-field symptoms for early disease detection.",
  },
  {
    title: "Oil Yield Prediction",
    desc: "Insufficient predictive models that correlate agronomic practices and phenology with essential oil yield and composition.",
  },
  {
    title: "Smallholder Adoption Studies",
    desc: "Lack of socio-economic research on barriers and incentives for smallholders to adopt AI-driven tools.",
  },
];

const ResearchGapSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Research Gaps</h2>
          <p className="text-gray-600">
            Key gaps we've identified that guide our ongoing work and future studies.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {gaps.map((g, i) => (
            <article
              key={i}
              className="bg-green-50 border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">{g.title}</h3>
              <p className="text-sm text-gray-700">{g.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs/pp1.pdf"
            className="inline-block px-5 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition cursor-pointer"
            aria-label="View project proposal"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Proposal & Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchGapSection;