import { ReactElement } from "react";
import IconVk from '/src/assets/icons/social-vk.svg?react';
import IconYoutube from '/src/assets/icons/social-youtube.svg?react';
import IconOk from '/src/assets/icons/social-ok.svg?react';
import IconTelegram from '/src/assets/icons/social-tg.svg?react';

interface SocialData {
  url: string;
  icon: ReactElement;
}

export const socialDatas: SocialData[] = [
  {
    url: 'https://vk.com/yashin2236',
    icon: <IconVk />,
  },
  {
    url: 'https://youtube.com/c/Lomt1k',
    icon: <IconYoutube />,
  },
  {
    url: 'https://ok.ru/',
    icon: <IconOk />,
  },
  {
    url: 'https://t.me/yashin2236',
    icon: <IconTelegram />,
  },
];