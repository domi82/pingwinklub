const icons: Record<string, React.ReactElement> = {
  paddle: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="17" cy="17" r="13" stroke="#E03C00" strokeWidth="2.5"/>
      <line x1="4.5" y1="17" x2="29.5" y2="17" stroke="#E03C00" strokeWidth="1.8"/>
      <path d="M26.5 26.5 L41 41" stroke="#E03C00" strokeWidth="5.5" strokeLinecap="round"/>
      <circle cx="41" cy="8" r="5" fill="#E03C00"/>
    </svg>
  ),
  coach: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 5H33L28 28H20L15 5Z" fill="#F2B705"/>
      <path d="M15 9C9 9 6 17 11 22L15 25" stroke="#F2B705" strokeWidth="3" strokeLinecap="round"/>
      <path d="M33 9C39 9 42 17 37 22L33 25" stroke="#F2B705" strokeWidth="3" strokeLinecap="round"/>
      <rect x="22" y="28" width="4" height="9" fill="#F2B705"/>
      <rect x="15" y="37" width="18" height="4" rx="2" fill="#F2B705"/>
    </svg>
  ),
  facility: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 20L24 6L41 20" fill="#024873"/>
      <rect x="10" y="19" width="28" height="26" rx="2" fill="#024873"/>
      <rect x="14" y="25" width="8" height="7" rx="1" fill="white" fillOpacity="0.55"/>
      <rect x="26" y="25" width="8" height="7" rx="1" fill="white" fillOpacity="0.55"/>
      <rect x="19" y="34" width="10" height="11" rx="1" fill="white" fillOpacity="0.35"/>
    </svg>
  ),
};

export function FeatureIcon({ name }: { name: string }) {
  return icons[name] ?? null;
}
