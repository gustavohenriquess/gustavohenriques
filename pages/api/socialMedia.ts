import { IconBaseProps } from "react-icons";
import { CgBrowser } from "react-icons/cg";

import {
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const media: Media[] = [
  {
    title: "Github",
    href: "https://github.com/gustavohenriquess",
    icon: FaGithub,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/gustaavohenriques/",
    icon: FaInstagram,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/gustavohenriquess/",
    icon: FaLinkedinIn,
  },
  {
    title: "Telegram",
    href: "https://telegram.me/gustavohenriques",
    icon: FaTelegramPlane,
  },
  {
    title: "Email",
    href: "mailto: gustavo._henrique@hotmail.com",
    icon: FaEnvelope,
  },
];

const mediaCard: Media[] = [
  {
    title: "Website",
    href: "/",
    icon: CgBrowser,
    target: "_self",
  },
  {
    title: "Github",
    href: "https://github.com/gustavohenriquess",
    icon: FaGithub,
    target: "_blank",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/gustavohenriquess/",
    icon: FaLinkedinIn,
    target: "_blank",
  },
  {
    title: "Telegram",
    href: "https://telegram.me/gustavohenriques",
    icon: FaTelegramPlane,
    target: "_blank",
  },
  {
    title: "Email",
    href: "mailto: gustavo._henrique@hotmail.com",
    icon: FaEnvelope,
    target: "_blank",
  },
];

type Media = {
  title: string;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
  target?: string;
};

export function getMedias() {
  return media;
}

export function getMediasCard() {
  return mediaCard;
}
