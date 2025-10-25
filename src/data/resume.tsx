import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Madhav Yadav",
  initials: "MY",
  url: "https://mymadhavyadav07.github.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Python Backend Developer curious about Computer Vision and Machine Learning. Building tech with purpose. Loves scrolling GitHub.",
  summary:
    "I am in love with the Tech behind things since 2019 and eventually turned out as a Python Back-End Developer. Currently, I am pursuing [Bachelor of Technology in Computer Science](#/education). I have worked on various projects, including building REST APIs, web scraping, and data analysis. I am currently working on a full-fledged production level application development at [@OSINTJOURNO](https://www.osintjourno.com).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Django",
    "FastAPI",
    "REST APIs",
    "Data Visualization",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Computer Vision (CV)",
    "Kubernetes",
    "Git",
    "Cybersecurity",
    "Linux",
    "GCP",
    "CI/CD",
    "Cloud Computing",
    "DevOps",
    "Agile Methodologies",
    "Version Control (Git)",
    "Project Management",
    "Code Review",
    "Pair Programming",
    "Documentation",
    "Critical Thinking",
    

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "mymadhavyadav07@gmail.com",
    tel: "+917754856822",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mymadhavyadav07",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mymadhavyadav07/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mymadhavyadav07",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "OSINT JOURNO",
      href: "https://osintjourno.com",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/osint_journo.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Contributing to OSINT JOURNO's open source projects.",
    },
  ],
  education: [
    {
      school: "AKTU",
      href: "https://aktu.ac.in/",
      degree: "Bachelor of Technology in Computer Science (B.Tech)",
      logoUrl: "/aktu.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Army Public School",
      href: "https://armypublicschoolalld.org",
      degree: "Intermediate",
      logoUrl: "/aps.png",
      start: "2011",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Steganographic Encoder",
      href: "https://github.com/mymadhavyadav07/Steganographic-Encoder",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "I was exploring steganography and came up with this project. The Steganographic Encoder is a Django-based web application that enables users to hide and extract secret messages within images using steganography techniques.",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Steganography",
      ],
      links: [
        {
          type: "Website",
          href: "https://steganographic-encoder.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymadhavyadav07/Steganographic-Encoder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stegano.png",
      video:
        "",
    },
    {
      title: "Remote Administration Tool",
      href: "https://github.com/mymadhavyadav07/Remote-Administration-Tool",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "This telegram bot allows you to access and manage various functionalities of your laptop remotely, providing convenience and flexibility like never before. Whether it's capturing webcam snapshots, recording audio, executing shell commands, or even receiving key press logs, this bot has got you covered.",
      technologies: [
        "Python",
        "Telegram Bot API",

      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/mymadhavyadav07/Remote-Administration-Tool",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/remote_admin_tool.png",
      video: "",
    },
    {
      title: "Flight Tracker",
      href: "https://github.com/shallvhack/Flight-Tracker",
      dates: "Jul 2023 - Jul 2023",
      active: true,
      description:
        "The Flight Tracker is a Python-based tool that allows users to track flights in real-time. It provides up-to-date information on the status, location, and other details of flights from various airlines worldwide.",
      technologies: [
        "Python",
        "API",
        "OSINT"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shallvhack/Flight-Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flight_tracker.png",
      video: "",
    },
    {
      title: "The Hacker News Scraper",
      href: "https://github.com/mymadhavyadav07/The-Hacker-News-Scraper",
      dates: "Jul 2023 - Jul 2023",
      active: true,
      description:
        "An automated Python scraper that pulls the latest security news from The Hacker News website and pushes updates into Discord channels for real‑time alerts.",
      technologies: [
        "Python",
        "Web Scraping",
        "Discord API",
        "BeatuifulSoup",
        "Requests",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shallvhack/The-Hacker-News-Scraper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hacker_news_scraper.png",
      video:
        "",
    },
  ],
  
} as const;
