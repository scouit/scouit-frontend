interface PropsType {
  size?: number;
  onClick?: () => void;
}

export const Write = ({ size = 24, onClick }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
  >
    <path
      d="M2.66248 21.75H6.90498L22.4615 6.19355L18.2185 1.95105L2.66248 17.5075V21.75Z"
      stroke="#555555"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M13.976 6.1936L18.2185 10.4361"
      stroke="#555555"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
