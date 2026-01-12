interface MosqueIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function MosqueIcon({ size = 24, color = "#ffffff", className = "" }: MosqueIconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5,5.49A1.76,1.76,0,0,1,11,3"
        style={{
          fill: 'none',
          stroke: color,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
      <line
        x1="12"
        y1="6"
        x2="12"
        y2="9"
        style={{
          fill: 'none',
          stroke: color,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
      <path
        d="M19,21a8.93,8.93,0,0,0,1-3.67c0-2-.92-3.25-3.24-4.51A17.44,17.44,0,0,1,12,9a17.44,17.44,0,0,1-4.76,3.82C4.92,14.08,4,15.37,4,17.33A8.93,8.93,0,0,0,5,21Z"
        style={{
          fill: 'none',
          stroke: color,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
    </svg>
  );
}