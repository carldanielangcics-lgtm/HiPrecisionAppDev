export default function HpLogo({ size = 32 }) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <rect x="13" y="4" width="6" height="24" rx="2" fill="white" />
      <rect x="4" y="13" width="24" height="6" rx="2" fill="white" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>
  );
}
