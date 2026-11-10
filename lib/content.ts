export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
};

export type Workshop = {
  slug: string;
  title: string;
  category: string;
  format: string;
  location: string;
  duration: string;
  level: string;
  priceEGP: number;
  capacity: number;
  cohortDates: string[];
  description: string;
  outcomes: string[];
  materials: string[];
  instructorId: string;
  image: ContentImage;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ContentImage = {
  src: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  authorId: string;
  readingMinutes: number;
  tags: string[];
  sections: ArticleSection[];
  image: ContentImage;
};

export const studio = {
  name: "Grey Barnacle",
  tagline: "Draw beyond the expected.",
  established: 2024,
  location: "Cairo, Egypt",
  contactEmail: "hello@greybarnacle.example",
  introduction:
    "Grey Barnacle is an independent workshop studio for illustration, drawing and creative technology. We help image makers build practical skills, stay curious and make work with a point of view.",
  story:
    "A barnacle holds fast to rock while the tide keeps changing. We borrow that spirit: stay grounded in looking, drawing and craft, while learning to work confidently with new tools.",
  principles: [
    { title: "Learn together", description: "Small groups, generous critique and clear guidance. No assumed expertise." },
    { title: "Stay grounded", description: "Tools support the idea. Observation and human intention stay central." },
    { title: "Test the edges", description: "Follow the useful accidents and turn experiments into discoveries." },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    id: "yara-haddad",
    name: "Yara Haddad",
    role: "Illustrator & studio lead",
    bio: "Yara’s drawing practice starts with close observation and ends somewhere unexpected. She leads Grey Barnacle’s illustration programme and makes room for every student to find their own visual language.",
    focus: ["Drawing from observation", "Visual storytelling", "Workshop facilitation"],
  },
  {
    id: "omar-el-tayeb",
    name: "Omar El-Tayeb",
    role: "Digital illustrator & educator",
    bio: "Omar moves between hand-drawn marks, digital painting and printed matter. His sessions make technical workflows feel approachable without sanding off the character of the work.",
    focus: ["Digital illustration", "Colour and composition", "Image-making workflows"],
  },
  {
    id: "nadine-farouk",
    name: "Nadine Farouk",
    role: "Creative technologist",
    bio: "Nadine explores how emerging image tools can widen an artist’s process. She teaches experimentation with a clear point of view: the tool can surprise you, but the decisions remain yours.",
    focus: ["Creative technology", "Generative image practice", "Prototyping"],
  },
];

export const workshops: Workshop[] = [
  {
    slug: "draw-the-machine",
    title: "Draw the machine",
    category: "Digital image making",
    format: "Live online · 2 sessions",
    location: "Online · live from Cairo",
    duration: "2 × 2-hour sessions",
    level: "Open to all levels",
    priceEGP: 1800,
    capacity: 12,
    cohortDates: ["2027-01-17", "2027-01-24"],
    description: "Use generative image tools as a sketchbook, then bring the work back to your own hand. We’ll move between prompts, drawing and deliberate editing to build a small series that feels authored, not automated.",
    outcomes: [
      "Build a repeatable prompt-and-draw process for visual research.",
      "Develop a set of images from one starting idea.",
      "Edit and redraw generated material with intention.",
    ],
    materials: ["Laptop with internet access", "Any drawing app or image editor", "Paper sketchbook and a pencil"],
    instructorId: "nadine-farouk",
    image: {
      src: "https://images.unsplash.com/photo-1745302281184-dfdad65fe6cc?auto=format&fit=crop&w=1600&q=82",
      alt: "An illustrator using a stylus on a digital drawing tablet",
      photographer: "Jakub Żerdzicki",
      sourceUrl: "https://unsplash.com/photos/a-hand-holds-a-stylus-above-a-tablet-98fofJPADN4",
    },
  },
  {
    slug: "worlds-in-the-margins",
    title: "Worlds in the margins",
    category: "Drawing & visual storytelling",
    format: "In person · 1 day",
    location: "Grey Barnacle studio · Cairo",
    duration: "One 6-hour studio day",
    level: "Beginner friendly",
    priceEGP: 1500,
    capacity: 10,
    cohortDates: ["2027-02-06"],
    description: "Build a visual world from scraps, observations and the things you almost threw away. This hands-on studio day starts with drawing from life, then uses collage and digital tools to turn fragments into a place with its own rules.",
    outcomes: [
      "Collect and transform visual references into a personal image library.",
      "Use scale, shape and composition to suggest a believable world.",
      "Finish with a layered illustration and a clear next step for the idea.",
    ],
    materials: ["A5 or A4 sketchbook", "Pencils and a black drawing pen", "Laptop or tablet if you have one; shared tools are available"],
    instructorId: "yara-haddad",
    image: {
      src: "https://images.unsplash.com/photo-1758521232879-db3fe1cba509?auto=format&fit=crop&w=1600&q=82",
      alt: "An artist sketching in a notebook at a studio desk",
      photographer: "Vitaly Gariev",
      sourceUrl: "https://unsplash.com/photos/young-woman-drawing-at-a-desk-with-art-supplies-f_vDqj1fZsU",
    },
  },
  {
    slug: "image-after-image",
    title: "Image after image",
    category: "Digital illustration lab",
    format: "Live online · 3 sessions",
    location: "Online · live from Cairo",
    duration: "3 × 2-hour sessions",
    level: "Some drawing or image-making experience recommended",
    priceEGP: 2800,
    capacity: 12,
    cohortDates: ["2027-03-06", "2027-03-13", "2027-03-20"],
    description: "A practical sprint through collage, digital painting and iterative image-making. Make a visual system, test it across a sequence and learn how small decisions give a body of work its own rhythm.",
    outcomes: [
      "Create a flexible visual system for a short image series.",
      "Work confidently with layers, masks and digital collage.",
      "Use critique to decide what to keep, change or push further.",
    ],
    materials: ["Laptop or tablet with a drawing app", "A folder of personal reference images", "Optional: scanned marks, textures or found paper"],
    instructorId: "omar-el-tayeb",
    image: {
      src: "https://images.unsplash.com/photo-1508782077900-06e617d42f8f?auto=format&fit=crop&w=1600&q=82",
      alt: "A dark geometric concrete building with a strong architectural silhouette",
      photographer: "Maarten Deckers",
      sourceUrl: "https://unsplash.com/photos/black-concrete-structure-ALbHddfqhqY",
    },
  },
];

export const articles: JournalArticle[] = [
  {
    slug: "a-sketchbook-that-talks-back",
    title: "A sketchbook that talks back",
    category: "Process",
    publishedAt: "2026-10-12",
    excerpt: "What changes when a blank page starts answering? A field note on using image tools as a conversation partner while keeping your own eye in charge.",
    authorId: "nadine-farouk",
    readingMinutes: 4,
    tags: ["Creative process", "Image tools", "Drawing"],
    image: {
      src: "https://images.unsplash.com/photo-1782702497459-bd654d7d4e8e?auto=format&fit=crop&w=1600&q=82",
      alt: "A close view of a hand making marks in a sketchbook",
      photographer: "Arkan Izz Zaydan Maulana",
      sourceUrl: "https://unsplash.com/photos/a-persons-hand-sketching-in-a-spiral-notebook-JLygJyPIPWY",
    },
    sections: [
      {
        heading: "Start with a question, not a prompt",
        paragraphs: [
          "When a new image tool lands in the studio, the first instinct is often to ask it for a finished picture. We get more from it when we bring a smaller question instead: what if this shape were heavier, or this scene had one detail out of place?",
          "A sketchbook is useful because it lets an idea stay unfinished. Treating a tool like a page in that book gives you permission to explore without handing over the decision about what the work should become.",
        ],
      },
      {
        heading: "Keep your hand in the loop",
        paragraphs: [
          "Make a rough drawing first. Feed the idea into a new process, then look carefully at what comes back. The interesting part is rarely a perfect match. It’s the strange shadow, the accidental crop or a colour relationship you hadn’t considered.",
          "Bring those discoveries back to the page. Redraw a fragment, change the composition or leave the result behind and make something that borrows only its energy. Your choices are what turn an output into part of a practice.",
        ],
      },
      {
        heading: "A practice of useful replies",
        paragraphs: [
          "A tool can offer a reply; it cannot tell you which reply matters. Save the results that give you a new question and let the rest go. Over time, the sketchbook becomes a record of your curiosity rather than a catalogue of polished answers.",
        ],
      },
    ],
  },
  {
    slug: "permission-to-make-a-mess",
    title: "Permission to make a mess",
    category: "Studio notes",
    publishedAt: "2026-09-28",
    excerpt: "A case for unfinished things, noisy experiments and ideas that refuse to behave on the first try.",
    authorId: "yara-haddad",
    readingMinutes: 3,
    tags: ["Drawing", "Practice", "Experiment"],
    image: {
      src: "https://images.unsplash.com/photo-1472772049637-f128df70697d?auto=format&fit=crop&w=1600&q=82",
      alt: "A pencil, ruler and open notebook ready for a measured drawing study",
      photographer: "Tamarcus Brown",
      sourceUrl: "https://unsplash.com/photos/person-holding-ruler-and-pencil-on-spiral-notebook-eKkeKfDt1Vk",
    },
    sections: [
      {
        heading: "The first version is a place to begin",
        paragraphs: [
          "The studio table is rarely tidy halfway through a good session. A drawing gets taped over; a paper offcut turns out to have the right angle; the composition you planned makes room for something you weren’t looking for.",
          "That mess is not a failure of discipline. It is evidence that you are testing the idea in the world, where it can surprise you and ask for another pass.",
        ],
      },
      {
        heading: "Make room for the wrong turn",
        paragraphs: [
          "Try changing one thing at a time: scale, material, viewpoint or the order of the marks. Small tests make it easier to see what changed and why. Keep the versions beside each other so you can compare, not just remember.",
          "You don’t have to keep every experiment. You only need to stay with the work long enough to notice when a detour has become a direction.",
        ],
      },
      {
        heading: "Finish with a next step",
        paragraphs: [
          "A useful studio session does not always end with a finished image. It can end with a clearer question, a process you want to repeat or one fragment worth developing tomorrow. That is progress you can carry forward.",
        ],
      },
    ],
  },
  {
    slug: "the-new-pencil-case",
    title: "The new pencil case",
    category: "Tools",
    publishedAt: "2026-09-03",
    excerpt: "A useful way to think about a growing set of digital tools: personal, practical and never the point of the picture.",
    authorId: "omar-el-tayeb",
    readingMinutes: 5,
    tags: ["Digital illustration", "Tools", "Workflow"],
    image: {
      src: "https://images.unsplash.com/photo-1770208741337-8d8ed7b3aa2e?auto=format&fit=crop&w=1600&q=82",
      alt: "A dark, weathered concrete surface with subtle marks and texture",
      photographer: "remapstudio",
      sourceUrl: "https://unsplash.com/photos/close-up-of-a-textured-concrete-wall-with-dark-stains-fx6Qku9rlro",
    },
    sections: [
      {
        heading: "Choose tools by the job",
        paragraphs: [
          "A pencil case is personal because every object earns its place. The same can be true of a digital workflow. You may need a brush that behaves like dry graphite, a layer that protects the drawing underneath or a way to collect reference without losing the thread of the work.",
          "Start with a task you already understand. Look for the simplest tool that makes it easier, then spend time learning what it actually does before adding another one.",
        ],
      },
      {
        heading: "Build a small, useful kit",
        paragraphs: [
          "A drawing surface, a handful of brushes, a reliable way to save versions and a folder for references can take you a long way. More options are not automatically more creative; too many can make it hard to hear your own decisions.",
          "Keep a note of what helps and what gets in the way. A workflow should support the way you think, not turn every drawing into a software exercise.",
        ],
      },
      {
        heading: "Keep the picture in charge",
        paragraphs: [
          "Tools change. Looking closely, choosing what to leave out and deciding when an image is ready are lasting skills. Let new technology expand the range of things you can try, then return to the picture and make the next call yourself.",
        ],
      },
    ],
  },
];

export function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Cairo",
  }).format(new Date(year, month - 1, day, 12));
}

export function formatPrice(priceEGP: number) {
  return `EGP ${new Intl.NumberFormat("en-EG", { maximumFractionDigits: 0 }).format(priceEGP)}`;
}
