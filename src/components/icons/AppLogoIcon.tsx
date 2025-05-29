import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Top diamond */}
      <path d="M32 4L12 16V28L32 40L52 28V16L32 4Z M32 10L46 20L32 30L18 20L32 10Z"/>
      {/* Left diamond */}
      <path d="M10 30L32 42L32 60L10 48L10 30Z M16 34L16 48L30 54L30 40L16 34Z"/>
      {/* Right diamond */}
      <path d="M54 30L32 42L32 60L54 48L54 30Z M48 34L48 48L34 54L34 40L48 34Z"/>
    </svg>
  );
}
