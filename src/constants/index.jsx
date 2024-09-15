import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Prateek",
    company: "Freelance Developer",
    image: user1,
    text: "The YouTube detoxifier completely transformed my online experience. My feed is now filled with productive content, helping me focus on my work and personal growth.",
  },
  {
    user: "Ishav",
    company: "Tech Enthusiast",
    image: user2,
    text: "I was skeptical at first, but this detoxifier has made a huge difference. My YouTube feed is now a source of inspiration and learning rather than a time-sink.",
  },
  {
    user: "Harsh",
    company: "Student",
    image: user3,
    text: "As a student, I struggled with YouTube distractions. This detoxifier has helped me curate a feed that supports my studies and hobbies. It's been a game-changer for my productivity!",
  },
  {
    user: "Vatan",
    company: "Digital Marketer",
    image: user4,
    text: "The YouTube detoxifier has not only improved my personal browsing but also helped me discover valuable content for my work. It's an essential tool for anyone in the digital space.",
  },
  {
    user: "Ayush",
    company: "Fitness Trainer",
    image: user5,
    text: "I'm amazed at how much more focused and motivated I feel since using this detoxifier. My YouTube feed now aligns perfectly with my fitness goals and career aspirations.",
  },
  {
    user: "Rahul",
    company: "Software Engineer",
    image: user6,
    text: "This detoxifier has revolutionized my YouTube experience. I now spend less time mindlessly scrolling and more time learning new skills relevant to my field. Highly recommended!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Smart Content Filtering",
    description:
      "Advanced AI algorithms automatically filter out distracting content and promote videos aligned with your interests and goals.",
  },
  {
    icon: <Fingerprint />,
    text: "Personalized Feed Curation",
    description:
      "Easily customize your YouTube feed by specifying topics, keywords, and channels you want to focus on.",
  },
  {
    icon: <ShieldHalf />,
    text: "Distraction Blocker",
    description:
      "Set up powerful blockers to prevent access to time-wasting content and channels, helping you stay focused on productive videos.",
  },
  {
    icon: <BatteryCharging />,
    text: "Productivity Insights",
    description:
      "Track your viewing habits and receive detailed reports on how you spend your time on YouTube, encouraging more mindful consumption.",
  },
  {
    icon: <PlugZap />,
    text: "Time Management Tools",
    description:
      "Set daily viewing limits and schedule 'productive hours' to ensure a balanced approach to YouTube usage.",
  },
  {
    icon: <GlobeLock />,
    text: "Cross-Platform Sync",
    description:
      "Seamlessly sync your detoxified YouTube experience across all your devices, maintaining a consistent, focused feed everywhere.",
  },
];

export const checklistItems = [
  {
    title: "Instant Feed Cleanup",
    description:
      "Quickly remove distracting content from your YouTube feed with just a few clicks.",
  },
  {
    title: "Customized Content Suggestions",
    description:
      "Receive personalized video recommendations based on your specified interests and goals.",
  },
  {
    title: "AI-Powered Content Analysis",
    description:
      "Leverage advanced AI to automatically categorize and filter videos, saving you time and effort.",
  },
  {
    title: "Easy Progress Tracking",
    description:
      "Monitor your viewing habits and productivity improvements with intuitive dashboards and reports.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Smart content filtering",
      "Basic feed customization",
      "Limited distraction blocking",
      "Weekly usage reports",
    ],
  },
  {
    title: "Pro",
    price: "$9.99",
    features: [
      "Advanced AI-powered filtering",
      "Unlimited feed customization",
      "Full distraction blocking",
      "Daily insights and reports",
    ],
  },
  {
    title: "Family",
    price: "$19.99",
    features: [
      "All Pro features",
      "Up to 5 user accounts",
      "Parental controls",
      "Cross-device sync",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
