// Images are hot-linked from Base44. Download them into /public/img and swap these paths.
const B = "https://media.base44.com/images/public/6a25613186b01e1a2bbb56da/";
// Set to true once you have put optimised photos in /public/img (see README: "npm run images").
const USE_LOCAL_IMAGES = false;
const L = (name, remote) => (USE_LOCAL_IMAGES ? `/img/${name}.webp` : remote);
// BACP BADGE PLACEHOLDER
// 1. Download your official badge from your BACP member account.
// 2. Put the file in the "public/img" folder (e.g. public/img/bacp-badge.png).
// 3. Put its path between the quotes below, e.g. "/img/bacp-badge.png".
// While this is empty, no badge is shown anywhere on the site.
const BACP_BADGE_PATH = "/img/bacp-badge.png";
export const bacpBadge = BACP_BADGE_PATH || null;
export const img = {
  hero: L("hero", B + "d43acb7ea_generated_2bbde0f8.png"),
  aboutHero: L("about-hero", B + "bf110d622_generated_24e224b6.png"),
  office: L("office", B + "5509dbd0c_generated_b59ea392.png"),
  pct: L("pct", B + "9c9ca522e_generated_a813b47e.png"),
  cbt: L("cbt", B + "1c2c28b22_generated_930b55cd.png"),
  eft: L("eft", B + "3de875f1c_generated_62d47f4c.png"),
};
// Which version of the site to build. Set VITE_BRAND=helen in Vercel for the Helen Rose site; anything else builds Hindy Rose.
const brands = {
  hindy: {
    name: "Hindy Rose", first: "Hindy",
    email: "hindyrosetherapy@gmail.com",
    // TODO: replace with the real LinkedIn profile URL
    linkedin: "https://www.linkedin.com/in/REPLACE-WITH-YOUR-PROFILE",
    accessKey: "106e8db6-e05e-4ad0-8bb2-cf40040beb51",
  },
  helen: {
    name: "Helen Rose", first: "Helen",
    // Logo files live in public/helen. logoMark = the round "HR" roundel (header), logo = the full logo (footer).
    // The Hindy Rose brand has no logo files, so it keeps showing its name as text.
    logoMark: "/helen/logo-mark.webp", logo: "/helen/logo.webp",
    // TODO: confirm this email address exists
    email: "helenrosetherapy@gmail.com",
    // TODO: replace with the real LinkedIn profile URL
    linkedin: "https://www.linkedin.com/in/REPLACE-WITH-YOUR-PROFILE",
    accessKey: "106e8db6-e05e-4ad0-8bb2-cf40040beb51",
  },
};
export const brand = brands[import.meta.env.VITE_BRAND] || brands.hindy;
export const contact = { email: brand.email, phone: "07930 259523", tel: "+447930259523", linkedin: brand.linkedin };
export const principles = [
  ["Tailored to You", "No two journeys are the same. Every session is shaped around your unique experiences, needs and pace of growth.", L("dew", B + "bab81f701_generated_37fe492d.png")],
  ["Confidential", "A warm, judgment-free space where your privacy is always protected and your story is always safe.", L("stone", B + "23da8ffa1_generated_7024e088.png")],
  ["Compassionate", "Genuine, human care that meets you exactly where you are — never pushing, always alongside you.", L("linen", B + "0df36556d_generated_12a24f6e.png")],
  ["Scientifically Proven & Alternative", "Evidence-based methods like CBT blended with integrative techniques like EFT — supporting anxiety, depression, self-esteem, grief, stress and more.", L("fern", B + "79fa40dcb_generated_11e41aa4.png")],
];
export const services = [
  { icon: "Brain", tag: "MBACP", title: "Cognitive Behavioural Therapy", full: "Cognitive Behavioural Therapy (CBT)", img: img.cbt,
    short: "A structured, evidence-based method that examines the link between thoughts, feelings and behaviour. CBT gives you practical tools to reframe unhelpful patterns and build lasting change.",
    long: "A structured, evidence-based method that examines the link between thoughts, feelings and behaviour. CBT gives you practical tools to reframe unhelpful patterns and build lasting change.",
    list: ["Anxiety & panic", "Depression", "Negative thinking patterns", "Phobias & fears", "Stress management", "Sleep difficulties"] },
  { icon: "Heart", tag: "MBACP", title: "Person Centred Therapy", img: img.pct,
    short: "A warm, humanistic approach where you lead the way. A non-judgmental space to explore your feelings, build self-awareness and reconnect with your own sense of direction.",
    long: "A warm, humanistic approach where you lead the way. Person Centred Therapy offers a non-judgmental space to explore your feelings, build self-awareness and reconnect with your own sense of direction.",
    list: ["Anxiety & stress", "Depression & low mood", "Self-esteem & confidence", "Grief & loss", "Life transitions", "Feeling stuck or lost"] },
  { icon: "Leaf", tag: "Internationally Accredited", title: "Emotional Freedom Techniques", full: "Emotional Freedom Techniques (EFT)", img: img.eft,
    short: "An integrative mind-body technique combining gentle tapping on meridian points with focused attention. EFT helps release emotional distress at its root, often bringing relief where talking alone has stalled.",
    long: "An integrative mind-body technique that combines gentle tapping on meridian points with focused attention. EFT helps release emotional distress at its root, often bringing relief where other approaches have stalled.",
    list: ["Trauma & PTSD", "Phobias & fears", "Cravings & emotional eating", "Performance anxiety", "Deep-seated limiting beliefs", "Physical tension & stress"] },
];
export const badges = [["Award", "MBACP Member"], ["Brain", "CBT Qualified"], ["Leaf", "EFT Internationally Accredited"]];
export const approach = [
  ["Brain", "Scientifically Proven", "Person Centred Therapy and CBT, grounded in established clinical research."],
  ["Leaf", "Alternative Methods", "EFT tapping and integrative techniques that work where talking alone can't."],
  ["Shield", "Tailored & Confidential", "Every session is shaped around you, in a space that is always private and compassionate."],
];
export const creds = [
  ["Award", "MBACP Member", "Registered member of the British Association for Counselling and Psychotherapy."],
  ["BookOpen", "Person Centred & CBT Practitioner", "Trained in evidence-based therapies including Person Centred and Cognitive Behavioural Therapy."],
  ["Leaf", "Internationally Accredited EFT Practitioner", "Accredited in Emotional Freedom Techniques, offering integrative mind-body support."],
  ["Heart", "Continuing Professional Development", "Committed to ongoing learning and the latest therapeutic research."],
  ["HeartHandshake", "Extensive Grief Counselling", "Years of dedicated experience supporting individuals through loss, bereavement and the complex emotions that accompany grief."],
  ["PhoneCall", "Manchester Crisis Helpline Volunteer", "Hundreds of volunteer hours on the Manchester helpline for mental health crises, offering immediate, compassionate support to those in their most difficult moments."],
];
export const values = [
  ["Compassion First", "I believe every person deserves to be met with warmth, respect, and genuine care — no matter where they are in their journey."],
  ["Radical Honesty", "Healing thrives in truth. I create a space where honesty is safe, encouraged, and met without judgment."],
  ["Whole-Person Healing", "I don't treat symptoms in isolation. I work with you as a complete person — mind, body, and spirit — because that's how lasting change happens."],
];
export const story = [
  "My journey into therapy began with a simple belief: that healing happens not through fixing, but through being truly seen and heard. That belief still shapes every session I offer.",
  "Over the years I've trained across a range of evidence-based and alternative approaches — qualifying as a member of the BACP and building a practice around Person Centred Therapy, CBT and EFT.",
  "Discovering EFT was a turning point. I watched clients who had felt \"stuck\" for years find relief in just a few sessions, as we addressed emotions in the body as well as the mind. It showed me that lasting change becomes possible when we work with the whole person.",
  "Alongside my training, I've built extensive experience in grief counselling — walking alongside people through loss and bereavement — and spent hundreds of hours on a volunteer basis on the Manchester helpline for mental health crises, offering immediate, compassionate support when it's needed most.",
  "Today, from my practice in Manchester and online via Zoom, I offer a warm, flexible and personalised approach — helping you feel more like yourself again.",
];
