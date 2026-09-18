type IconProps = {
  className?: string;
};

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function AcademyIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 10.7V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5.3" />
      <path d="M20.5 9v5.5" />
    </svg>
  );
}

export function ProduzioneIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <rect x="3" y="6.5" width="12" height="11" rx="1.5" />
      <path d="M15 10.5 21 7v10l-6-3.5" />
    </svg>
  );
}

export function ArchivioIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="5" rx="1" />
      <path d="M4.5 9v9a1.5 1.5 0 0 0 1.5 1.5h12A1.5 1.5 0 0 0 19.5 18V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function PubblicazioneIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <path d="M12 3v11" />
      <circle cx="12" cy="16.5" r="2" />
      <path d="M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7" />
      <path d="M5.5 3.5a9 9 0 0 0 0 13M18.5 3.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export function MuseoIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4.5 9.5v9M9.5 9.5v9M14.5 9.5v9M19.5 9.5v9" />
      <path d="M3 18.5h18" />
    </svg>
  );
}

const iconMap = {
  academy: AcademyIcon,
  produzione: ProduzioneIcon,
  archivio: ArchivioIcon,
  pubblicazione: PubblicazioneIcon,
  museo: MuseoIcon,
};

export function AreaIcon({
  name,
  className,
}: {
  name: keyof typeof iconMap;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
