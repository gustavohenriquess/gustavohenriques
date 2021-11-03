import { IconBaseProps } from "react-icons";

import {
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const media: Media[] = [
  {
    title: "Github",
    href: "https://github.com/gustavohenriquess",
    icon: FaGithub,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/GuHenrique/",
    icon: FaLinkedinIn,
  },
  {
    title: "Telegram",
    href: "https://telegram.me/gustavohenriques",
    icon: FaTelegramPlane,
  },
  {
    title: "E-mail",
    href: "mailto: gustavo._henrique@hotmail.com",
    icon: FaEnvelope,
  },
];

type Media = {
  title: string;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
};

export function getMedias() {
  return media;
}
