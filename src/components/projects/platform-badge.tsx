import { FaAndroid, FaApple } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import type { PlatformInfo } from "./project-utils";

const ICONS = {
  android: <FaAndroid className="text-emerald-400" />,
  ios: <FaApple className="text-zinc-200" />,
  web: <HiOutlineGlobeAlt className="text-sky-400" />,
};

type Props = {
  platform: PlatformInfo;
  className?: string;
};

export default function PlatformBadge({ platform, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ${className}`}
    >
      <span className="flex items-center gap-1">
        {platform.icons.map((icon) => (
          <span key={icon} className="text-sm leading-none">
            {ICONS[icon]}
          </span>
        ))}
      </span>
      {platform.label}
    </span>
  );
}
