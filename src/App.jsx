import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Heart, Brain, Leaf, Award, BookOpen, HeartHandshake, PhoneCall, Shield, Mail, Phone, MapPin, Video, Clock, ArrowRight, Menu, X, Linkedin } from "lucide-react";
const Icons = { Heart, Brain, Leaf, Award, BookOpen, HeartHandshake, PhoneCall, Shield, Mail, Phone, MapPin, Video, Clock, ArrowRight, Menu, X, Linkedin };
import { img, contact, brand, bacpBadge, principles, services, badges, approach, creds, values, story } from "./content.js";

const Icon = ({ name, size = 22 }) => { const I = Icons[name]; return I ? <I size={size} strokeWidth={1.5} /> : null; };

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const BacpBadge = () => bacpBadge ? (
  <div className="bacp"><img src={bacpBadge} alt="BACP registered member badge, on the Professional Standards Authority Accredited Register" loading="lazy" /></div>
) : null;

const Btn = ({ to, children, variant = "solid", ...p }) => (
  <Link to={to} className={`btn btn-${variant}`} {...p}>{children} {variant !== "ghost" && <Icons.ArrowRight size={18} />}</Link>
);

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["/", "Home"], ["/services", "Services"], ["/about", "About Me"], ["/contact", "Contact"]];
  return (
    <header className={`header ${scrolled || open ? "solid" : ""}`}>
      <div className="bar">
        <Link to="/" className="logo">{brand.name}</Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map(([to, t]) => <NavLink key={to} to={to} end className="navlink">{t}</NavLink>)}
          <Link to="/contact" className="btn btn-solid btn-sm">Book a Consultation</Link>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <Icons.X /> : <Icons.Menu />}</button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer"><div className="wrap foot-grid">
      <div><h3 className="serif">{brand.name}</h3><p>Therapy that supports real change. Person Centred Therapy, CBT and EFT — in person in Manchester and online via Zoom.</p><BacpBadge /></div>
      <div><h4>Navigate</h4>{[["/", "Home"], ["/services", "Services"], ["/about", "About Me"], ["/contact", "Contact"]].map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}</div>
      <div><h4>Get in Touch</h4><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.tel}`}>{contact.phone}</a><a className="li" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Icons.Linkedin size={18} /> LinkedIn</a></div>
      <div className="legal"><span>© {new Date().getFullYear()} {brand.name} Therapy. All rights reserved.</span><Link to="/privacy">Privacy Notice</Link></div>
    </div></footer>
  );
}

const Badges = () => (
  <section className="badges"><div className="wrap badge-row">{badges.map(([i, t]) => <span key={t}><Icon name={i} />{t}</span>)}</div></section>
);

const CTA = ({ title, text, label, to = "/contact", note }) => (
  <section className="section center"><Reveal className="wrap narrow">
    <h2 className="serif">{title}</h2><p className="lead">{text}</p>
    <Btn to={to}>{label}</Btn>{note && <p className="note">{note}</p>}
  </Reveal></section>
);

function Home() {
  return (<>
    <section className="hero" style={{ backgroundImage: `url(${img.hero})` }}><div className="hero-fade" />
      <div className="wrap hero-in">
        <p className="eyebrow light">{brand.name} · Therapist</p>
        <h1 className="serif">Therapy That Supports <span className="script">Real Change</span></h1>
        <p className="hero-sub">A warm, flexible and personalised approach to help you feel more like yourself again.</p>
        <div className="btn-row"><Btn to="/contact">Start a Conversation</Btn><Btn to="/services" variant="ghost">Explore Services</Btn></div>
      </div></section>
    <Badges />
    <section className="section"><div className="wrap">
      <Reveal><p className="eyebrow">My Approach</p><h2 className="serif">Using scientifically proven & alternative methods</h2>
        <p className="lead">Support for anxiety, depression, self-esteem, grief, stress and more.</p></Reveal>
      <div className="principles">{principles.map(([t, d, src], i) => (
        <Reveal key={t} delay={i * 80} className="principle"><img src={src} alt="" loading="lazy" />
          <div><span className="num serif">0{i + 1}</span><h3 className="serif">{t}</h3><p>{d}</p></div></Reveal>))}</div>
    </div></section>
    <section className="section alt"><div className="wrap">
      <Reveal><p className="eyebrow">Core Services</p><h2 className="serif">Three ways we can work together</h2></Reveal>
      <div className="cards">{services.map((s, i) => (
        <Reveal key={s.title} delay={i * 100} className="card"><img src={s.img} alt={s.title} loading="lazy" />
          <div className="card-body"><p className="eyebrow soft">{s.tag}</p><h3 className="serif">{s.title}</h3><p>{s.short}</p>
            <Link to="/services" className="link">Learn More <Icons.ArrowRight size={18} /></Link></div></Reveal>))}</div>
    </div></section>
    <section className="section dark curve"><div className="wrap read">
      <Reveal><p className="eyebrow light">Your Healing Journey</p><h2 className="serif">It's okay to not be okay. That's exactly where we begin.</h2>
        <p>Taking the first step toward therapy can feel overwhelming. You might be wondering if your concerns are "serious enough," or whether talking about your feelings will really make a difference. These are completely natural thoughts — and you're not alone in having them.</p>
        <p>What I want you to know is that there is no wrong reason to seek support. Whether you're navigating a major life change, working through past trauma, or simply feeling stuck, therapy provides a space where you can breathe, reflect, and begin to move forward.</p></Reveal>
      <div className="three">
        <Reveal><h3 className="serif">How the Process Works</h3><p>We start with a no-pressure initial conversation — a chance for us to understand your goals and see if we're the right fit. From there, we build a personalized plan that evolves with you.</p></Reveal>
        <Reveal delay={100}><h3 className="serif">What to Expect</h3><p>Each session is a collaborative space. There's no script, no judgment, and absolutely no pressure to share more than you're ready to. I meet you exactly where you are.</p></Reveal>
        <Reveal delay={200}><h3 className="serif">Proven & Alternative Methods</h3><p>My approach blends evidence-based therapies like Person Centred Therapy and CBT with the integrative power of EFT — giving you both understanding and lasting release.</p></Reveal>
      </div></div></section>
    <CTA title="Ready to take the first step?" text="You don't need to have everything figured out. You just need to be willing to begin. I'm here to walk alongside you — at your own pace, in your own time." label="Book a Free Consultation" note="No commitment required · Completely confidential" />
  </>);
}

function Services() {
  return (<>
    <section className="section page-top"><Reveal className="wrap"><p className="eyebrow">Services</p><h1 className="serif">Pathways to healing, tailored to you</h1>
      <p className="lead">Each service is designed to meet you exactly where you are. Whether you need a listening ear, practical tools for change, or the deeper release of EFT — there's a path forward.</p></Reveal></section>
    {services.map((s, i) => (
      <section key={s.title} className={`section ${i === 1 ? "alt" : ""}`}><div className={`wrap split ${i % 2 ? "flip" : ""}`}>
        <Reveal><img className="big" src={s.img} alt={s.title} loading="lazy" /></Reveal>
        <Reveal delay={100}><p className="eyebrow soft iconrow"><Icon name={s.icon} />{s.tag}</p><h2 className="serif">{s.full || s.title}</h2><p className="lead">{s.long}</p>
          <ul className="dots">{s.list.map((l) => <li key={l}>{l}</li>)}</ul><Btn to="/contact">Book a Session</Btn></Reveal>
      </div></section>))}
    <section className="section dark center"><div className="wrap">
      <Reveal><h2 className="serif">My Approach</h2><p className="lead">Every session is built on a foundation of these core principles.</p></Reveal>
      <div className="three icons">{approach.map(([i, t, d], k) => <Reveal key={t} delay={k * 100}><span className="gold"><Icon name={i} size={36} /></span><h3 className="serif">{t}</h3><p>{d}</p></Reveal>)}</div></div></section>
    <CTA title="Not sure which service is right for you?" text="That's perfectly okay. Book a free consultation and we'll find the best path forward together." label="Start a Conversation" />
  </>);
}

function About() {
  return (<>
    <section className="hero short" style={{ backgroundImage: `url(${img.aboutHero})` }}><div className="hero-fade" />
      <div className="wrap hero-in"><p className="eyebrow light">About Me</p><h1 className="serif">Hi, I'm {brand.first} — a therapist supporting real change</h1>
        <p className="hero-sub">I offer a warm, flexible and personalised approach to help you feel more like yourself again — in person in Manchester and online via Zoom.</p></div></section>
    <Badges />
    <section className="section"><div className="wrap split">
      <Reveal><img className="big" src={img.office} alt="A warm and inviting therapy office" loading="lazy" /></Reveal>
      <Reveal delay={100} className="read"><h2 className="serif">My Story</h2>{story.map((p) => <p key={p}>{p}</p>)}<a className="btn btn-outline" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Icons.Linkedin size={18} /> Connect on LinkedIn</a></Reveal></div></section>
    <section className="section alt"><div className="wrap">
      <Reveal><h2 className="serif">Credentials & Experience</h2><p className="lead">Professional qualifications you can trust.</p></Reveal>
      <div className="cred-grid">{creds.map(([i, t, d], k) => (
        <Reveal key={t} delay={(k % 3) * 80} className="cred"><span className="gold"><Icon name={i} size={28} /></span><div><h3 className="serif">{t}</h3><p>{d}</p></div></Reveal>))}</div>
      {bacpBadge && <Reveal className="bacp-row"><BacpBadge /></Reveal>}</div></section>
    <section className="section dark"><div className="wrap"><Reveal><h2 className="serif">Values That Guide My Work</h2></Reveal>
      <div className="three">{values.map(([t, d], k) => <Reveal key={t} delay={k * 100}><h3 className="serif">{t}</h3><p>{d}</p></Reveal>)}</div></div></section>
    <CTA title="Let's begin your journey together" text="I'd love to hear from you. Reach out for a free, no-obligation conversation about how I can support you." label="Get in Touch" />
  </>);
}

function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", heard: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck.checked) return; // spam trap
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) { setStatus("bademail"); return; }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: brand.accessKey,
          subject: `Website enquiry from ${f.name} (${brand.name} site)`,
          from_name: `${brand.name} website`,
          name: f.name, email: f.email, phone: f.phone || "not given",
          how_did_you_hear_about_us: f.heard || "not given", message: f.message,
        }),
      });
      const data = await res.json();
      if (data.success) { setStatus("sent"); setF({ name: "", email: "", phone: "", heard: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };
  return (
    <section className="section page-top"><div className="wrap contact-grid">
      <Reveal><p className="eyebrow">Contact</p><h1 className="serif">Let's start a conversation</h1>
        <p className="lead">Whether you're ready to book your first session or simply have a question, I'm here to listen. There's no pressure — just a warm invitation to connect.</p>
        <form onSubmit={submit}>
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />
          <label><span className="lbl">Full Name <b>*</b></span><input required placeholder="Your name" value={f.name} onChange={set("name")} /></label>
          <label><span className="lbl">Email <b>*</b></span><input required type="email" inputMode="email" autoComplete="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}" title="Please enter a valid email address, e.g. name@example.com" placeholder="you@email.com" value={f.email} onChange={set("email")} /></label>
          <label><span className="lbl">Phone</span><input type="tel" placeholder="07700 900000" value={f.phone} onChange={set("phone")} /></label>
          <label><span className="lbl">How did you hear about us? <span className="opt">(optional)</span></span><select value={f.heard} onChange={set("heard")}><option value="">Select an option</option>
            <option>Print advertiser</option><option>Word of mouth</option><option>Google search</option><option>Other</option></select></label>
          <label><span className="lbl">Your Message <b>*</b></span><textarea required rows="5" placeholder="Tell me a little about what you're looking for, or simply say hello..." value={f.message} onChange={set("message")} /></label>
          <label className="consent"><input type="checkbox" required /><span>I consent to {brand.name} using the details I have provided to reply to my enquiry. See the <Link to="/privacy">Privacy Notice</Link>. <b>*</b></span></label>
          <button className="btn btn-solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"} <Icons.ArrowRight size={18} /></button>
          {status === "sent" && <p className="msg ok" role="status">Thank you — your message has been sent. I'll reply within 24 hours.</p>}
          {status === "bademail" && <p className="msg bad" role="alert">Please enter a valid email address, for example name@example.com.</p>}
          {status === "error" && <p className="msg bad" role="alert">Sorry, that didn't send. Please try again, or email {contact.email} directly.</p>}
          <p className="note">All inquiries are completely confidential.</p>
        </form></Reveal>
      <Reveal delay={100} className="side">
        <div className="panel"><h3 className="serif">Contact Information</h3>
          {[["Mail", "Email", [contact.email]], ["Phone", "Phone", [contact.phone]], ["MapPin", "Location", ["Manchester", "In-person sessions"]],
            ["Video", "Online", ["Zoom Sessions", "Online therapy"]], ["Clock", "Hours", ["Flexible hours, afternoon and evening after work availability, please be in touch for more information"]]].map(([i, l, v]) => (
            <div className="info" key={l}><span className="gold"><Icon name={i} /></span><div><small>{l.toUpperCase()}</small>{v.map((x) => <p key={x}>{x}</p>)}</div></div>))}
          <div className="info"><span className="gold"><Icons.Linkedin size={22} strokeWidth={1.5} /></span><div><small>LINKEDIN</small><p><a className="link-inline" href={contact.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p></div></div></div>
        <div className="panel outline"><h3 className="serif">What Happens Next?</h3>
          <ol><li><b>1.</b> I'll respond to your message within 24 hours.</li><li><b>2.</b> We'll schedule a brief, free phone consultation.</li><li><b>3.</b> Together, we'll determine the best path forward for you.</li></ol></div>
      </Reveal>
    </div></section>
  );
}

function Privacy() {
  return (
    <section className="section page-top"><div className="wrap legal-page">
      <h1 className="serif">Privacy Notice</h1><p className="updated">Last updated: October 2026</p>
      <p style={{ marginTop: "1.5rem" }}>This privacy notice explains how {brand.name} ("I", "my") collects, uses and protects any personal information you provide when using this website and contact form. I am committed to ensuring that your privacy is protected. As a solo practitioner and data controller, I follow data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
      <h2 className="serif">1. Information I collect</h2>
      <p>When you complete the contact form on this website, I collect:</p>
      <ul><li><b>Full name</b></li><li><b>Email address</b></li><li><b>Phone number</b> (if you provide it)</li><li><b>Enquiry details and message content</b>, which may include confidential health-related information or your reasons for seeking therapy</li><li><b>How you heard about me</b> (if you choose to say)</li><li><b>Technical data</b>, such as basic server logs or your IP address, recorded automatically by the website hosting provider</li></ul>
      <h2 className="serif">2. Why I collect it and my lawful basis</h2>
      <p>I use your information to respond to your enquiry, arrange an initial consultation, work out whether my services suit your needs, and keep administrative records of prospective client enquiries.</p>
      <ul><li><b>Legitimate interests / contract preparation:</b> to respond to your direct request for information before potentially entering into a therapeutic contract.</li><li><b>Explicit consent / health care exemption:</b> messages sent through this form may disclose physical or mental health details (special category data). I process these with your explicit consent and within the ethical and professional duty of confidentiality.</li></ul>
      <h2 className="serif">3. How your information is handled and shared</h2>
      <p>Your information is treated with strict professional confidentiality. I do not sell, rent or trade your personal data. I only share data with essential service providers (data processors) needed to run this site and communicate with you:</p>
      <ul><li><b>Website hosting and infrastructure:</b> Vercel (hosting) and Cloudflare (domain name and DNS)</li><li><b>Form handling and email:</b> Web3Forms (delivers contact form messages to me) and Google (Gmail)</li></ul>
      <p>All service providers are bound by security and confidentiality obligations.</p>
      <h2 className="serif">4. Data retention</h2>
      <ul><li><b>Enquiries that do not proceed to therapy:</b> your form submission and our correspondence will be securely deleted 6 months after our last contact.</li><li><b>Enquiries that proceed to therapy:</b> your contact details become part of your active client file, kept in line with professional regulatory guidelines and insurance requirements (typically 5 to 7 years after therapy ends).</li></ul>
      <h2 className="serif">5. Security</h2>
      <p>I use appropriate technical and administrative safeguards to prevent unauthorised access, disclosure or loss of your personal details. However, sending information over the public internet is never completely secure, so please avoid sending deeply sensitive clinical details through the website form.</p>
      <h2 className="serif">6. Your rights</h2>
      <p>Under data protection law you have the right to:</p>
      <ul><li><b>Access:</b> ask for a copy of the personal information I hold about you</li><li><b>Rectification:</b> ask me to correct inaccurate or incomplete records</li><li><b>Erasure:</b> ask me to delete your enquiry details where there is no overriding legal or professional obligation to keep them</li><li><b>Withdraw consent:</b> withdraw your consent to be contacted at any time</li></ul>
      <p style={{ marginTop: "1rem" }}>To use any of these rights, please contact me using the details below.</p>
      <h2 className="serif">7. Contact details</h2>
      <ul><li><b>Name:</b> {brand.name}</li><li><b>Professional membership:</b> MBACP (British Association for Counselling and Psychotherapy)</li><li><b>Email:</b> <a href={`mailto:${contact.email}`}>{contact.email}</a></li><li><b>Phone:</b> {contact.phone}</li><li><b>Location:</b> Manchester, UK</li></ul>
      <p style={{ marginTop: "1rem" }}>If you believe your data has been handled improperly, you also have the right to complain to the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
    </div></section>
  );
}

export default function App() {
  return (<><Header /><main><Routes>
    <Route path="/" element={<Home />} /><Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} />
    <Route path="*" element={<Home />} /></Routes></main><Footer /></>);
}
