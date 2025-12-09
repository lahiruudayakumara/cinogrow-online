import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // simulate send
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-lg p-6 md:p-10">
          <div className="md:flex md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
                Contact Us
              </h2>
              <p className="text-sm text-gray-600">
                Questions or feedback about CinoGrow? Send a message and we will reply promptly.
              </p>
            </div>

            <div className="mt-4 md:mt-0 text-left md:text-right">
              <p className="text-xs text-gray-500">Project lead</p>
              <p className="font-medium text-gray-900">Dr. A. Researcher</p>
              <p className="mt-2 text-sm">
                <a
                  href="mailto:info@cinogrow.example"
                  className="text-emerald-700 hover:underline"
                >
                  info@cinogrow.example
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-gray-700">Your name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    placeholder="Jane Doe"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-gray-700">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-gray-700">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                  placeholder="Tell us about your question or feedback..."
                />
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow transition focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {sent && <span className="text-sm text-emerald-700">Message sent — thank you!</span>}
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <h4 className="text-lg font-semibold text-emerald-800 mb-1">Visit / Mail</h4>
                <p className="text-sm text-gray-700">
                  Department of Agricultural Engineering
                  <br />
                  University of Example, Sri Lanka
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">Quick Contacts</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>
                    <strong className="text-gray-900">Email:</strong>{" "}
                    <a href="mailto:info@cinogrow.example" className="text-emerald-700 hover:underline">
                      info@cinogrow.example
                    </a>
                  </li>
                  <li>
                    <strong className="text-gray-900">Phone:</strong>{" "}
                    <a href="tel:+94123456789" className="text-emerald-700 hover:underline">
                      +94 123 456 789
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-5 text-sm text-gray-600">
                <p>
                  We aim to respond within 2 business days. For collaboration or media inquiries, please indicate the subject in your message.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* toast */}
      {sent && (
        <div className="fixed bottom-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Message sent — thank you!
        </div>
      )}
    </section>
  );
};

export default ContactSection;