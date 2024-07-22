import { Icons } from "~/components/icons";

export const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Engage", href: "/#engage" },
];

export const twitterUrl = "https://twitter.com/sandibi13";
export const githubUrl = "https://github.com/sandibi13/zephyr";

export enum Paths {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Chat = "/chat",
  Feedback = "/feedback",
  Settings = "/settings",
  VerifyEmail = "/verify-email",
  ResetPassword = "/reset-password",
}

export const features = [
  {
    name: "Real-time Messaging",
    description: "Instant responses for seamless interaction.",
    logo: Icons.MessageCircle,
  },
  {
    name: "Contextual Memory",
    description: "Remembers conversation context for relevant responses.",
    logo: Icons.BookOpen,
  },
  {
    name: "Multilingual Support",
    description: "Interact in multiple languages.",
    logo: Icons.Globe,
  },
  {
    name: "User Authentication",
    description: "Sign up, sign in, and manage profiles.",
    logo: Icons.UserCheck,
  },
  {
    name: "Rich Media Support",
    description: "Handles images, videos, and links.",
    logo: Icons.Image,
  },
  {
    name: "Interactive Responses",
    description: "Displays answers with interactive elements.",
    logo: Icons.Zap,
  },
];
