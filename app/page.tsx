"use client";

import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";

type IconProps = {
  size?: number;
  className?: string;
};

type FormDataState = {
  name: string;
  email: string;
  message: string;
};

type FormState = {
  loading: boolean;
  success: boolean;
  error: string;
};

function IconMenu({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function IconX({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMail({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconLinkedIn({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconFileText({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function IconArrowUpRight({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function PranoyPolicyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: "",
  });

  const navigation = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Themes", href: "#themes" },
      { label: "Writing", href: "#writing" },
      { label: "Projects", href: "#projects" },
      { label: "CV", href: "#cv" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const featuredWriting = [
    {
      title:
        "The Role of Programmable CBDCs in Shaping Capital Flows and Exchange Rate Dynamics",
      category: "Monetary Policy",
      summary:
        "A quantitative and policy-oriented analysis of how programmable central bank digital currencies could reshape capital mobility, exchange rate dynamics and state capacity.",
      status: "Draft in progress",
    },
    {
      title:
        "Wired for Instability? An Empirical Stress Test of AI-Sector Capital Flows and Bubble Risk",
      category: "Financial Stability",
      summary:
        "An empirical investigation into whether capital allocation into AI-intensive sectors is drifting away from fundamentals, and what that may imply for systemic risk.",
      status: "Research in progress",
    },
  ];

  const projects = [
    {
      title: "AI Capital Allocation & Bubble Risk",
      description:
        "A data-driven research project examining valuation divergence, capital concentration and volatility clustering in AI-linked sectors through a financial stability lens.",
    },
    {
      title: "CBDCs, Capital Controls and Monetary Order",
      description:
        "Research exploring whether programmable monetary systems can reintroduce embedded forms of capital control within liberalised financial regimes.",
    },
    {
      title: "Energy, Trade and Strategic Risk",
      description:
        "Work focused on how insurance, shipping, energy markets and geopolitical disruption shape the resilience of global trade and policy response.",
    },
  ];

  const formEndpoint = "https://formspree.io/f/your-form-id";
  const isPlaceholderEndpoint = formEndpoint.includes("your-form-id");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ loading: true, success: false, error: "" });

    if (isPlaceholderEndpoint) {
      setFormState({
        loading: false,
        success: false,
        error:
          "The contact form is ready, but it needs a live Formspree endpoint before messages can be delivered.",
      });
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setFormState({ loading: false, success: true, error: "" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState({
        loading: false,
        success: false,
        error: "Message could not be sent right now. Please try again later.",
      });
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-red-400">
              Pranoy Roy Choudhury
            </p>
            <h1 className="mt-1 text-sm text-neutral-300">
              Economic Policy · Financial Systems · Markets
            </h1>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-2xl border border-white/10 p-2 text-neutral-200 transition hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconX size={18} /> : <IconMenu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm text-neutral-300">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
                Policy research portfolio
              </p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                When financial systems come under pressure, policy is forced to adapt.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Focused on how institutions respond when financial systems come under strain across monetary systems, capital flows and technological change.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-950/40 transition hover:bg-red-400"
                >
                  Explore profile
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-200">
                  <li>• Monetary policy and central banking operations</li>
                  <li>• Financial stability and capital flow dynamics</li>
                  <li>• Payments systems and regulatory design</li>
                  <li>• Trade, energy and geoeconomic risks</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-red-300">
                  Active research note
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Currently investigating AI-sector capital flow dynamics and
                  the systemic risk implications of programmable monetary systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  About
                </p>
              </div>
              <div className="space-y-5 text-base leading-8 text-neutral-300">
  <p>
    I am a Master’s student in International Political Economy at King’s College London. Over time, my work has come to revolve around a few recurring questions: how financial systems transmit risk, how that risk turns into instability and how governments respond when it does.
  </p>

  <p>
    My focus sits at the intersection of financial systems and policy frameworks, particularly when established tools begin to lose their grip. What matters in these moments is not just what policies exist but how they are adapted in practice. That includes changes in regulation, shifts in monetary strategy and the quiet reworking of institutions as markets and technology move faster than expected.
  </p>

  <p>
    I previously worked as a researcher at King’s Think Tank, where I looked at how programmable central bank digital currencies could affect capital flows and exchange rate dynamics. I now serve as Chief Data Officer at the Geoeconomic Strategy Unit. My work there centres on building a country-level analytical framework that brings together macroeconomic, political and financial data into a single model. The role cuts across functions. It involves designing the structure of the model itself, working closely with technical teams on implementation and engaging with the commercial side to ensure the output is both credible and usable.
  </p>

  <p>
    Across both strands of my work, the underlying interest is the same. Economic systems rarely adjust smoothly. They come under pressure, adapt unevenly and reveal their limits in the process. Understanding those moments and what they tell us about the design of policy and institutions is what drives my research.
  </p>
</div>
            </div>
          </div>
        </section>

        <section id="themes" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Research themes
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Core areas of interest
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-xl font-semibold">Monetary systems</h4>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  Monetary policy, central banking, capital mobility, financial
                  repression and the changing architecture of digital money.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-xl font-semibold">Financial stability</h4>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  Asset-price excess, capital concentration, systemic fragility
                  and the policy implications of rapid technological shifts in
                  markets.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-xl font-semibold">Trade and geoeconomics</h4>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  Energy markets, shipping, insurance, sanctions risk and the
                  political economy of global trade disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Writing
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Articles and research
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-red-300">
                Coming soon
              </p>
              <h4 className="mt-4 text-2xl font-semibold">
                The writing archive is being built
              </h4>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
                This section is ready to house published essays, research
                commentary and longer-form policy writing. The first pieces are
                currently being developed and can be published here as soon as
                they are ready.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {featuredWriting.map((article) => (
                  <div
                    key={article.title}
                    className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-red-300">
                      {article.status} · {article.category}
                    </p>
                    <h5 className="mt-3 text-lg font-semibold leading-7">
                      {article.title}
                    </h5>
                    <p className="mt-3 text-sm leading-7 text-neutral-400">
                      {article.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Projects
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Research and analytical work
            </h3>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
                >
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section id="cv" className="border-b border-white/10">
  <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          CV snapshot
        </p>
        <h3 className="mt-3 text-3xl font-semibold">
          Education and experience
        </h3>
      </div>
      
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:bg-white/5"
      >
        <IconFileText size={16} />
        Download full CV
      </a>
    </div>

    <div className="mt-10 grid gap-10 md:grid-cols-3">

      {/* Education */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h4 className="text-lg font-semibold">Education</h4>
        <div className="mt-4 space-y-5 text-sm leading-7 text-neutral-300">
          <div>
            <strong>MA International Political Economy</strong>
            <br />
            King&apos;s College London
          </div>
          <div>
            <strong>BA History, Politics and International Relations</strong>
            <br />
            Royal Holloway, University of London
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h4 className="text-lg font-semibold">Experience</h4>
        <div className="mt-4 space-y-5 text-sm leading-7 text-neutral-300">
          <div>
            <strong>Chief Data Officer</strong>
            <br />
            Geoeconomic Strategy Unit
            <p className="mt-2 text-neutral-400">
              Leading the development of a macro-financial data framework
              integrating economic, political and financial data into a
              structured model for country-level analysis.
            </p>
          </div>
          <div>
            <strong>Researcher</strong>
            <br />
            King&apos;s Think Tank
            <p className="mt-2 text-neutral-400">
              Conducted policy-focused research on programmable digital
              currencies and capital flows with an emphasis on monetary
              systems and regulatory implications.
            </p>
          </div>
          <div>
            <strong>Insurance &amp; Claims Executive</strong>
            <br />
            AET
            <p className="mt-2 text-neutral-400">
              Worked on risk, insurance and regulatory exposure within global
              shipping markets, with direct insight into trade flows,
              compliance and financial risk management.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h4 className="text-lg font-semibold">Capabilities</h4>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
          <li>Macro-financial analysis and policy-oriented research</li>
          <li>Quantitative modelling and data analysis in Python</li>
          <li>Country-level risk and opportunity assessment frameworks</li>
          <li>Translating technical outputs into commercially and policy-relevant insights</li>
        </ul>
      </div>

    </div>
  </div>
</section>

        <section id="contact">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-white/5 to-red-500/10 p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                  Contact
                </p>
                <h3 className="mt-3 text-3xl font-semibold">Get in touch</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
                  For research, writing or policy opportunities, the site is
                  set up to support direct contact without publicly displaying a
                  personal email address.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/pranoy-roy-choudhury/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/30 hover:bg-white/5"
                  >
                    <IconLinkedIn size={16} />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:pranoyroychoudhury98@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/30 hover:bg-white/5"
                  >
                    <IconMail size={16} />
                    Direct email
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                  Reach out
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-red-400/50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-red-400/50"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-red-400/50"
                  />
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-950/40 transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <IconArrowUpRight size={16} />
                    {formState.loading ? "Sending..." : "Send message"}
                  </button>
                </form>

                {formState.success && (
                  <p className="mt-4 text-sm leading-7 text-green-400">
                    Message sent successfully.
                  </p>
                )}

                {formState.error && (
                  <p className="mt-4 text-sm leading-7 text-amber-300">
                    {formState.error}
                  </p>
                )}

                <p className="mt-4 text-xs leading-6 text-neutral-500">
                  Replace the placeholder Formspree URL in the code with your
                  live endpoint before deploying.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Pranoy Roy Choudhury</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="transition hover:text-neutral-300">
              Back to top
            </a>
            <a
              href="https://www.linkedin.com/in/pranoy-roy-choudhury/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}