import { useState, type ReactNode } from "react";
import {
  Button,
  Field,
  Input,
  Select,
  Textarea,
} from "@fluentui/react-components";
import {
  ArrowRightRegular,
  CheckmarkCircleRegular,
  CheckmarkRegular,
  MailRegular,
} from "@fluentui/react-icons";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { principles } from "./content/principles";
import { projects } from "./content/projects";
import { services } from "./content/services";
import {
  engagementModels,
  faqs,
  footerColumns,
  numbers,
  proofPoints,
} from "./content/site";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Selected work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function SiteHeader() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark">TR</span>
          <span>Triale</span>
        </Link>
        <div className="header-meta">
          <span>Independent product studio</span>
          <span>Lagos / Nigeria</span>
        </div>
      </header>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark">TR</span>
            <span>Triale</span>
          </Link>
          <p>
            Independent software building for teams doing consequential work.
            Small, senior, and accountable from the first call to the last
            commit.
          </p>
          <a className="email-link" href="mailto:hello@triale.studio">
            <MailRegular /> hello@triale.studio
          </a>
        </div>
        {footerColumns.map((column) => (
          <nav
            className="footer-column"
            key={column.heading}
            aria-label={column.heading}
          >
            <span className="eyebrow">{column.heading}</span>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to}>{link.label}</Link>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Triale. All rights reserved.</span>
        <span>Work worth doing, made visible.</span>
      </div>
    </footer>
  );
}

function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

function Hero({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  action?: string;
}) {
  return (
    <section className="hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {action && (
        <Link className="button primary" to="/contact">
          {action}
          <ArrowRightRegular />
        </Link>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={`${project.name} project context`} />
      <span className="badge">{project.sector}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="card-meta">
        <span>{project.outcome}</span>
        <span>{project.type}</span>
      </div>
    </article>
  );
}

function SectionHeading({
  hint,
  title,
  count,
}: {
  hint: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{hint}</span>
        <h2>{title}</h2>
      </div>
      {count && <span className="badge">{count}</span>}
    </div>
  );
}

function ProofList() {
  return (
    <ul className="proof-list">
      {proofPoints.map((point) => (
        <li key={point}>
          <CheckmarkRegular /> {point}
        </li>
      ))}
    </ul>
  );
}

function NumbersBand() {
  return (
    <div className="numbers-band">
      {numbers.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function EngagementModels() {
  return (
    <div className="model-grid">
      {engagementModels.map((model) => (
        <article className="model-card" key={model.name}>
          <h3>{model.name}</h3>
          <p>{model.body}</p>
        </article>
      ))}
    </div>
  );
}

function FaqSection() {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.q}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Independent software building / 2022—24"
        title="Make useful things visible."
        subtitle="End-to-end services from a small, senior team. Flexible engagements ready to start in under two weeks, on-budget delivery, and engineering that leaves your team stronger than it found it."
        action="Start a conversation"
      />
      <ProofList />
      <section>
        <SectionHeading
          hint="Engagement models"
          title="Start your project, your way"
          count="04 models"
        />
        <p className="section-lede">
          Whether you are testing the waters or scaling fast, each option gives
          you control, clarity, and a clear path to progress — no matter where
          you are starting from.
        </p>
        <EngagementModels />
      </section>
      <section>
        <SectionHeading
          hint="Selected work"
          title="A few things we are proud of"
          count="03 studies"
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <section className="split-section">
        <div>
          <span className="eyebrow">How we deliver</span>
          <h2>Software delivery without doubt.</h2>
        </div>
        <div className="split-copy">
          <p>
            We stay close to the work from first sketch to the first real
            release. From idea to launch, our process is built for reliability,
            and every build is engineered for resilience.
          </p>
          <p>
            Because peace of mind is not a promise we make. It is how we work:
            visible progress, no blind spots, and a team that clears the
            roadblocks instead of reporting them.
          </p>
          <Link className="button secondary" to="/services">
            See our services <ArrowRightRegular />
          </Link>
        </div>
      </section>
      <NumbersBand />
      <section>
        <SectionHeading
          hint="FAQs"
          title="No surprises, except how easy it is to start"
        />
        <FaqSection />
      </section>
      <section className="callout">
        <span className="eyebrow">Next step</span>
        <h2>
          You already have enough to stress about. Your software should not be
          part of it.
        </h2>
        <p>
          Bring us the knotty version. We are most useful when the brief is
          still becoming clear.
        </p>
        <Link className="button primary" to="/contact">
          Start a conversation <ArrowRightRegular />
        </Link>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services / What we do"
        title="From first question to useful release."
        subtitle="Strategy, interface, and engineering in one small, accountable team."
      />
      <section>
        <SectionHeading
          hint="Capabilities"
          title="The right amount of structure"
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.bestFor}</p>
              <div className="card-meta">
                <span>Starting point</span>
                <strong>{service.start}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="models">
        <SectionHeading
          hint="Engagement models"
          title="Start your project, your way"
          count="04 models"
        />
        <p className="section-lede">
          Each option gives you control, clarity, and a clear path to progress,
          no matter your starting point. Compare the details, or just tell us
          which one sounds closest.
        </p>
        <EngagementModels />
      </section>
      <section className="callout">
        <span className="eyebrow">A good first step</span>
        <h2>Bring us the knotty version.</h2>
        <p>We are most useful when the brief is still becoming clear.</p>
        <Link className="button primary" to="/contact">
          Tell us what is moving <ArrowRightRegular />
        </Link>
      </section>
    </>
  );
}

function WorkPage() {
  return (
    <>
      <Hero
        eyebrow="Selected work / 2024—26"
        title="Useful things, built with intent."
        subtitle="A short record of platforms, services, and systems we have made with teams doing consequential work."
        action="Start a conversation"
      />
      <section>
        <SectionHeading
          hint="Outcomes over outputs"
          title="A few things we are proud of"
          count="03 studies"
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About / The studio"
        title="Close to the work, clear about the why."
        subtitle="Triale is an independent studio for people making products that have to hold up in the real world."
      />
      <section className="split-section about-intro">
        <div>
          <span className="eyebrow">Our point of view</span>
          <h2>Good work gets more useful as it gets more specific.</h2>
        </div>
        <div className="split-copy">
          <p>
            We bring strategy, design, and engineering into the same room. That
            makes space for better questions, faster learning, and software with
            a point of view.
          </p>
          <Link className="button secondary" to="/contact">
            Work with us <ArrowRightRegular />
          </Link>
        </div>
      </section>
      <section id="principles">
        <SectionHeading
          hint="Working principles"
          title="A few things we believe"
        />
        <div className="principle-list">
          {principles.map((principle) => (
            <article key={principle.title}>
              <span className="service-number">{principle.owner}</span>
              <h3>{principle.title}</h3>
              <p>{principle.meaning}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const valid = email.includes("@") && message.trim().length > 10;
  return (
    <>
      <Hero
        eyebrow="Contact / Start somewhere"
        title="Tell us what you are trying to make."
        subtitle="A useful first conversation does not need a perfect brief. Give us the shape of the question and we will take it from there."
      />
      <section className="contact-grid">
        <div className="contact-note">
          <span className="eyebrow">What happens next</span>
          <h2>One clear conversation.</h2>
          <p>
            We will reply within two working days with a thoughtful next step,
            even if that step is a different direction.
          </p>
          <a className="email-link" href="mailto:hello@triale.studio">
            <MailRegular /> hello@triale.studio
          </a>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (valid) setSent(true);
          }}
          noValidate
        >
          {sent ? (
            <div className="success-state">
              <CheckmarkCircleRegular />
              <h2>Message received.</h2>
              <p>We will be in touch shortly.</p>
            </div>
          ) : (
            <>
              <Field label="Project type">
                <Select defaultValue="new-product">
                  <option value="new-product">New product</option>
                  <option value="existing-product">Existing product</option>
                  <option value="team-support">Team support</option>
                </Select>
              </Field>
              <Field label="Timeline">
                <Select defaultValue="this-quarter">
                  <option value="this-quarter">This quarter</option>
                  <option value="next-quarter">Next quarter</option>
                  <option value="Exploring">Exploring</option>
                </Select>
              </Field>
              <Field
                label="Email"
                validationState={
                  email && !email.includes("@") ? "error" : "none"
                }
                validationMessage={
                  email && !email.includes("@")
                    ? "Use a valid email address."
                    : undefined
                }
              >
                <Input
                  value={email}
                  onChange={(_, data) => setEmail(data.value)}
                  type="email"
                  required
                />
              </Field>
              <Field
                label="Message"
                validationState={
                  message && message.trim().length <= 10 ? "error" : "none"
                }
                validationMessage={
                  message && message.trim().length <= 10
                    ? "Give us a little more to work with."
                    : undefined
                }
              >
                <Textarea
                  value={message}
                  onChange={(_, data) => setMessage(data.value)}
                  placeholder="Tell us what you are trying to make, change, or understand."
                  required
                />
              </Field>
              <Button appearance="primary" type="submit" disabled={!valid}>
                Send project note <ArrowRightRegular />
              </Button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export default function App() {
  return (
    <PageFrame>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </PageFrame>
  );
}
