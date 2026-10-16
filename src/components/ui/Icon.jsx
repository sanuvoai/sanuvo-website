const PATHS = {
  check:    <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow:    <path d="M5 12h14M13 6l6 6-6 6" />,
  menu:     <path d="M4 7h16M4 12h16M4 17h16" />,
  close:    <path d="M6 6l12 12M18 6L6 18" />,
  journal:  <path d="M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6" />,
  match:    <path d="M4 8h12M12 4l4 4-4 4M20 16H8M12 12l-4 4 4 4" />,
  cash:     <path d="M4 19V5M4 19h16M8 15l3.5-4 3 2.5L20 8" />,
  files:    <path d="M8 4h9a2 2 0 012 2v11M5 8h10v12H5z" />,
  search:   <path d="M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4" />,
  clock:    <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2" />,
  approve:  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2.2 2.2L15 10.5" />,
  status:   <path d="M5 6h14M5 12h9M5 18h5M19 15v6M16 18h6" />,
  flag:     <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
  export:   <path d="M12 15V4M8 8l4-4 4 4M5 14v5h14v-5" />,
  chevron:  <path d="M6 9l6 6 6-6" />,
  calendar: <path d="M5 6h14v14H5zM5 10h14M9 3v4M15 3v4M9.5 15l1.8 1.8 3.4-3.6" />,
  receipt:  <path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" />,
  swap:     <path d="M8 20V4M4 8l4-4 4 4M16 4v16M12 16l4 4 4-4" />,
  bars:     <path d="M4 20h16M7 20v-7M12 20V6M17 20V10" />,
  layers:   <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  sliders:  <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4.5v5M6 14.5v5" />,
  code:     <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  mail:     <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  phone:    <path d="M6.5 4h3l1.5 4-2 1.3a11 11 0 005.7 5.7L16 13l4 1.5v3a2 2 0 01-2 2A15 15 0 014.5 6a2 2 0 012-2z" />,
};

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24" width={size} height={size}
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
