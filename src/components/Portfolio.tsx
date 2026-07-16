import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Sparkles,
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu,
  GraduationCap,
  Award,
  ArrowRight,
  ExternalLink,
  Star,
  CheckCircle2,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiGit,
  SiJsonwebtokens,
  SiFramer,
} from "react-icons/si";

/* ---------------- Nav ---------------- */
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/* ---------------- Loading screen ---------------- */
function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1100);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-brand"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-1 grid place-items-center rounded-xl bg-background">
            <span className="font-[Poppins] text-2xl font-bold text-gradient">P</span>
          </div>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-gradient-brand"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Blobs bg ---------------- */
function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#6C63FF]/25 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[#8B5CF6]/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-[#06B6D4]/20 blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(108,99,255,0.08)_1px,transparent_0)] [background-size:28px_28px]" />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 ${
          scrolled ? "glass-strong rounded-2xl" : ""
        } transition-all`}
        style={scrolled ? { marginLeft: "1rem", marginRight: "1rem" } : {}}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 py-3">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <span className="font-[Poppins] text-lg font-bold text-white">P</span>
          </div>
          <span className="hidden font-[Poppins] text-base font-semibold tracking-tight sm:block">
            Priya<span className="text-gradient">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-gradient-brand opacity-15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 lg:inline-flex"
        >
          Let's talk
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/60 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mx-4 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <ul className="flex flex-col p-2">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium hover:bg-primary/10"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- Section wrapper ---------------- */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-[Poppins] text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------- Hero ---------------- */
const ROLES = [
  "Full-Stack Web Developer",
  "React & Node.js Engineer",
  "UI/UX Enthusiast",
  "AI-Powered App Builder",
];
function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 85;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function Hero() {
  const typed = useTyping(ROLES);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);

  const floating = [
    { Icon: SiReact, top: "8%", left: "6%", delay: 0, color: "#61DAFB" },
    { Icon: SiTypescript, top: "18%", right: "8%", delay: 0.4, color: "#3178C6" },
    { Icon: SiNodedotjs, bottom: "18%", left: "10%", delay: 0.8, color: "#5FA04E" },
    { Icon: SiTailwindcss, bottom: "10%", right: "14%", delay: 1.2, color: "#38BDF8" },
    { Icon: SiMongodb, top: "40%", left: "2%", delay: 1.6, color: "#47A248" },
    { Icon: SiFramer, top: "55%", right: "3%", delay: 2, color: "#8B5CF6" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {floating.map(({ Icon, top, left, right, bottom, delay, color }, idx) => (
        <motion.div
          key={idx}
          className="pointer-events-none absolute hidden sm:block"
          style={{
            top,
            left,
            right,
            bottom,
            x: mouse.x * (idx % 2 ? -1 : 1),
            y: mouse.y * (idx % 2 ? 1 : -1),
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + delay }}
        >
          <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
            <div className="glass grid h-14 w-14 place-items-center rounded-2xl">
              <Icon size={26} color={color} />
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities · 2027 Grad
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-2 font-[Poppins] text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Priya <br />
            <span className="text-gradient">Parashuram</span>
            <br />
            Kencharaddi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-lg text-muted-foreground"
          >
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
              Final Year CSE
            </span>
            <span className="font-medium text-foreground">
              {typed}
              <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-primary animate-blink" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building responsive, scalable, and user-focused web applications with modern
            technologies — from thoughtful UI to robust APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/70 px-6 py-3 font-semibold backdrop-blur transition-colors hover:bg-white"
            >
              Contact Me
              <Mail size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {[
              { n: "3+", l: "Projects" },
              { n: "8.38", l: "CGPA" },
              { n: "15+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l}>
            <div className="font-[Poppins] text-2xl font-bold text-gradient sm:text-3xl text-center">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong relative h-full w-full overflow-hidden rounded-[2rem] p-6"
          >
            {/* Fake code card */}
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-muted-foreground">priya.tsx</span>
            </div>
            <pre className="overflow-hidden text-[13px] leading-relaxed">
              <code>
                <span className="text-purple-500">const</span>{" "}
                <span className="text-sky-600">developer</span> = {"{"}
                {"\n  "}name:{" "}
                <span className="text-emerald-600">'Priya'</span>,
                {"\n  "}role:{" "}
                <span className="text-emerald-600">'Full-Stack'</span>,
                {"\n  "}stack: [
                <span className="text-emerald-600">'React'</span>,{" "}
                <span className="text-emerald-600">'Node'</span>,
                {"\n         "}
                <span className="text-emerald-600">'FastAPI'</span>,{" "}
                <span className="text-emerald-600">'Mongo'</span>],
                {"\n  "}focus:{" "}
                <span className="text-emerald-600">'AI + UX'</span>,
                {"\n  "}shipping:{" "}
                <span className="text-orange-500">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss, SiFastapi].map(
                (Ic, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="glass grid aspect-square place-items-center rounded-xl"
                  >
                    <Ic size={22} className="text-primary" />
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const traits = [
    { icon: Sparkles, t: "Passionate Builder", d: "Curious mind who ships thoughtfully crafted products." },
    { icon: Code2, t: "Clean, Scalable Code", d: "Readable, maintainable, tested where it matters." },
    { icon: Layers, t: "Full-Stack Mindset", d: "From pixel-perfect UI to robust API design." },
    { icon: Cpu, t: "AI-Powered Apps", d: "Blending LLMs into product experiences that feel magical." },
  ];
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          A student engineer building <span className="text-gradient">delightful</span> web
          experiences.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 sm:p-10"
        >
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            I'm a <span className="font-semibold">Final Year Computer Science Engineering</span>{" "}
            student and aspiring <span className="font-semibold">Full-Stack Web Developer</span>{" "}
            with a strong bias toward well-designed, user-first products. I love turning ideas
            into clean, performant interfaces backed by scalable APIs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            My recent work explores <span className="text-foreground font-medium">AI-powered
            experiences</span> — from wedding planning to campus management — where thoughtful UX
            meets modern tooling. I care about details, collaborate closely with teams, and I'm
            always learning something new.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Problem Solving",
              "Responsive UI",
              "REST APIs",
              "AI Integration",
              "Team Collaboration",
              "Continuous Learner",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {traits.map((tr, i) => (
            <motion.div
              key={tr.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-5 transition-shadow hover:shadow-soft"
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <tr.icon size={18} />
              </div>
              <div className="font-[Poppins] font-semibold">{tr.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{tr.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
type Skill = { name: string; level: number; Icon?: React.ComponentType<{ size?: number; className?: string }> };
const SKILL_GROUPS: { title: string; icon: React.ComponentType<{ size?: number }>; items: Skill[] }[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", level: 90, Icon: SiJavascript },
      { name: "HTML", level: 95, Icon: SiHtml5 },
      { name: "CSS", level: 92, Icon: SiCss },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: [
      { name: "React.js", level: 90, Icon: SiReact },
      { name: "Tailwind CSS", level: 92, Icon: SiTailwindcss },
      { name: "Bootstrap", level: 85, Icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    items: [
      { name: "Node.js", level: 85, Icon: SiNodedotjs },
      { name: "Express.js", level: 85, Icon: SiExpress },
      { name: "FastAPI", level: 80, Icon: SiFastapi },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", level: 85, Icon: SiMysql },
      { name: "PostgreSQL", level: 82, Icon: SiPostgresql },
      { name: "MongoDB", level: 88, Icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: 88, Icon: SiGit },
      { name: "VS Code", level: 95 },
      { name: "Blackbox AI", level: 80 },
      { name: "Claude AI", level: 85 },
      { name: "ChatGPT", level: 90 },
    ],
  },
  {
    title: "Other",
    icon: Sparkles,
    items: [
      { name: "REST APIs", level: 88 },
      { name: "JWT Authentication", level: 85, Icon: SiJsonwebtokens },
      { name: "Responsive Design", level: 92 },
      { name: "UI / UX", level: 85 },
    ],
  },
];

function SkillBar({ s, delay }: { s: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium">
          {s.Icon && <s.Icon size={14} className="text-primary" />}
          {s.name}
        </span>
        <span className="text-xs text-muted-foreground">{s.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-brand"
          initial={{ width: 0 }}
          animate={inView ? { width: `${s.level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools I use to <span className="text-gradient">ship</span> ideas.
        </>
      }
      subtitle="A blend of modern frontend, reliable backend, and pragmatic AI tooling."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-soft"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <g.icon size={18} />
              </div>
              <h3 className="font-[Poppins] text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map((s, i) => (
                <SkillBar key={s.name} s={s} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */
type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  gradient: string;
  accent: string;
  emoji: string;
};
const PROJECTS: Project[] = [
  {
    title: "EverAfter",
    tagline: "Luxury Wedding & Event Management Platform",
    description:
      "Full-stack AI-powered wedding & event management platform with role-based dashboards for Admin, Vendor, and Customer. AI planning, vendor marketplace, budgets, guest tracking, secure booking, analytics.",
    features: [
      "Role-based dashboards (Admin / Vendor / Customer)",
      "Gemini AI-powered planning & recommendations",
      "Vendor marketplace with secure booking",
      "Budget, guest tracking & analytics",
      "Motion-rich, responsive UI",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "Framer Motion",
      "Recharts",
    ],
    gradient: "from-[#8B5CF6] via-[#6C63FF] to-[#06B6D4]",
    accent: "#8B5CF6",
    emoji: "💍",
  },
  {
    title: "CampusConnect",
    tagline: "Smart Campus Management System",
    description:
      "A smart campus platform with Admin, Faculty, and Student dashboards — attendance, classrooms, events, complaints, announcements, AI chatbot assistance, and analytics.",
    features: [
      "Admin, Faculty, Student dashboards",
      "Attendance & classroom modules",
      "Events, announcements & complaints",
      "AI chatbot assistance",
      "Analytics & responsive interfaces",
    ],
    stack: ["React.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "JWT", "Gemini AI"],
    gradient: "from-[#06B6D4] via-[#0EA5E9] to-[#6C63FF]",
    accent: "#06B6D4",
    emoji: "🎓",
  },
  {
    title: "Alumni Connect",
    tagline: "Full-Stack Alumni Networking Platform",
    description:
      "Role-based alumni networking system with mentorship, job opportunities, event management, secure authentication, profile management, and responsive dashboards.",
    features: [
      "Mentorship & job opportunities",
      "Event management",
      "Secure authentication & profiles",
      "Role-based dashboards",
      "Responsive Bootstrap UI",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "EJS", "Bootstrap", "JavaScript"],
    gradient: "from-[#F472B6] via-[#8B5CF6] to-[#6C63FF]",
    accent: "#8B5CF6",
    emoji: "🤝",
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="glass-strong group relative overflow-hidden rounded-3xl"
    >
      <div
        className={`grid gap-0 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Visual */}
        <div
          className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${p.gradient} p-8 sm:min-h-[380px]`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.4),transparent_50%)]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between text-white">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-80">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-white/20 text-[10px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              Case Study
            </div>

            <div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 text-6xl drop-shadow-lg sm:text-7xl"
              >
                {p.emoji}
              </motion.div>
              <h3 className="font-[Poppins] text-3xl font-bold tracking-tight sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm opacity-90 sm:text-base">{p.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.stack.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[11px] font-medium backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-widest"
            style={{ color: p.accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
            Featured Project
          </div>
          <h4 className="font-[Poppins] text-2xl font-bold sm:text-3xl">Overview</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {p.description}
          </p>

          <div className="mt-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Key Features
            </div>
            <ul className="space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: p.accent }}
                  />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Full Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={
        <>
          Projects that blend <span className="text-gradient">craft & code</span>.
        </>
      }
      subtitle="A closer look at three full-stack builds — from concept to polished, production-ready UI."
    >
      <div className="space-y-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          My academic <span className="text-gradient">journey</span>.
        </>
      }
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-14 sm:pl-0"
        >
          <div className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-brand text-white shadow-glow sm:left-1/2">
            <GraduationCap size={16} />
          </div>

          <div className="sm:pl-[calc(50%+2.5rem)]">
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                  2023 – 2027
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700">
                  CGPA · 8.38
                </span>
              </div>
              <h3 className="font-[Poppins] text-xl font-bold sm:text-2xl">
                Bachelor of Engineering
              </h3>
              <p className="mt-1 font-medium text-foreground/80">
                Computer Science & Engineering
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Smt. Kamala &amp; Sri Venkappa M. Agadi College of Engineering &amp; Technology
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { l: "Expected", v: "2027" },
                  { l: "CGPA", v: "8.38" },
                  { l: "Focus", v: "Full-Stack" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border bg-white/60 p-3">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                    <div className="font-[Poppins] text-lg font-bold text-gradient">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  const certs = [
    {
      title: "Enhancing Soft Skills and Personality",
      issuer: "NPTEL · IIT Kanpur",
      badge: "Elite + Silver Medal",
      score: "80%",
      color: "from-[#6C63FF] to-[#8B5CF6]",
      icon: "🥈",
    },
    {
      title: "100 Days of Code — Complete Python Bootcamp",
      issuer: "Udemy",
      badge: "Certificate of Completion",
      score: "100 Days",
      color: "from-[#06B6D4] to-[#6C63FF]",
      icon: "🐍",
    },
  ];
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Continuous <span className="text-gradient">learning</span>.
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-soft sm:p-8"
          >
            <div
              className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
            />
            <div className="relative flex items-start gap-4">
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-2xl shadow-glow`}
              >
                {c.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <Award size={12} /> {c.issuer}
                </div>
                <h3 className="mt-1 font-[Poppins] text-lg font-bold leading-snug">
                  {c.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                    <Star size={11} /> {c.badge}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    Score: {c.score}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errs, setErrs] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: typeof errs = {};
    if (!form.name.trim()) errors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
    if (form.message.trim().length < 10) errors.message = "Message should be at least 10 characters";
    setErrs(errors);
    if (Object.keys(errors).length) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={submit} className="glass-strong space-y-4 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="Your name"
            maxLength={100}
            aria-label="Your name"
          />
          {errs.name && <p className="mt-1 text-xs text-destructive">{errs.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="you@example.com"
            maxLength={255}
            aria-label="Your email"
          />
          {errs.email && <p className="mt-1 text-xs text-destructive">{errs.email}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          maxLength={1000}
          className="w-full resize-none rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
          placeholder="Tell me a little about your project or opportunity..."
          aria-label="Your message"
        />
        {errs.message && <p className="mt-1 text-xs text-destructive">{errs.message}</p>}
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          I'll get back within 24–48 hours.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
        >
          {sent ? "Sent!" : "Send Message"}
          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium text-emerald-600"
        >
          ✓ Thanks! Your message has been recorded.
        </motion.p>
      )}
    </form>
  );
}

function Contact() {
  const cards = [
    {
      Icon: Mail,
      label: "Email",
      value: "priyakencharaddi@gmail.com",
      href: "mailto:priyakencharaddi@gmail.com",
    },
    { Icon: Phone, label: "Phone", value: "+91 · 6361324375", href: "#contact" },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/priya-kencharaddi",
      href: "https://www.linkedin.com/in/priya-parashuram-kencharaddi-7483382a2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    { Icon: MapPin, label: "Location", value: "Karnataka, India", href: "#contact" },
  ];
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">great</span>.
        </>
      }
      subtitle="Open to internships, full-time roles, and interesting collaborations."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-5 transition-shadow hover:shadow-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <c.Icon size={18} />
                </div>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 truncate font-medium">{c.value}</div>
            </motion.a>
          ))}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <footer className="relative mt-10 border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
            <span className="font-[Poppins] font-bold">P</span>
          </div>
          <div>
            <div className="font-[Poppins] font-semibold">Priya Parashuram Kencharaddi</div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} · Crafted with care.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/priya-parashuram-kencharaddi-7483382a2?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com/PriyaKencharaddi", label: "GitHub" },
            { Icon: Mail, href: "mailto:priyakencharaddi@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-glow"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

/* ---------------- Root Portfolio ---------------- */
export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Blobs />
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}