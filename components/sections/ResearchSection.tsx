import React from "react";

const ResearchSection: React.FC = () => {
  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
      alt: "Field study in cinnamon plantation",
      caption: "Field Studies",
    },
    {
      src: "https://images.unsplash.com/photo-1581094658483-9a2f0b1b7d1e?auto=format&fit=crop&w=1200&q=80",
      alt: "Lab analysis of cinnamon samples",
      caption: "Lab Analysis",
    },
    {
      src: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1200&q=80",
      alt: "Quality inspection and drying",
      caption: "Quality & Drying",
    },
  ];

  const references = [
    { title: "Project Proposal (PP1)", href: "/docs/pp1.pdf" },
    { title: "Literature Survey", href: "/docs/literature-survey.pdf" },
    { title: "Final Report", href: "/docs/final-report.pdf" },
  ];

  return (
    <section className="py-16 bg-green-50 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
            Our Research
          </h2>
          <p className="text-lg text-gray-700">
            We investigate sustainable cultivation, quality improvement and
            processing methods for Ceylon cinnamon to help farmers improve yield
            and product value.
          </p>
        </div>

        {/* Intro + Project Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Project Scope
            </h3>
            <p className="text-gray-700 mb-4">
              The project focuses on integrating field studies, lab analysis and
              data-driven tools to provide actionable recommendations for
              cinnamon cultivation and post-harvest processing.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Field trials to evaluate cultivation practices</li>
              <li>Laboratory analysis of chemical and sensory quality</li>
              <li>Development of decision-support models for farmers</li>
              <li>Recommendations for sustainable post-harvest handling</li>
            </ul>
          </div>

          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80"
              alt="Introduction to research"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Literature Survey */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-800 mb-3">
            Literature Survey
          </h3>
          <p className="text-gray-700 mb-4">
            A concise review of prior work on Cinnamomum verum covering agronomy,
            phytochemistry, processing techniques and market studies. The survey
            informs our experimental design and modeling approach.
          </p>
          <div>
            <a
              href="/literature-survey"
              className="inline-block px-5 py-2 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 transition cursor-pointer"
              aria-label="Go to literature survey page"
            >
              View Literature Survey
            </a>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {gallery.map((img, idx) => (
            <figure
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-56 sm:h-48">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <figcaption className="p-4">
                <h4 className="font-semibold text-green-700">{img.caption}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Short description for {img.caption.toLowerCase()}.
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* References */}
        <div className="pt-6 border-t border-green-100">
          <h3 className="text-xl font-semibold text-green-800 mb-4">References</h3>
          <ul className="space-y-2 text-gray-700">
            {references.map((ref, i) => (
              <li key={i}>
                <a
                  href={ref.href}
                  className="text-green-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;