import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Background: Uses currentColor, which will be the primary app color */}
      <rect width="64" height="64" fill="currentColor"/>

      {/* White logo shapes */}
      {/* These paths are designed to emulate the provided logo image */}
      
      {/* Top Face - Left Part */}
      <path d="M32 32 C 22.84 30.72 14.72 24.8 12.48 21.08 C 18.2 15.16 25.84 10.08 32 8.24V32Z" fill="white"/>
      {/* Top Face - Right Part */}
      <path d="M32 32 C 41.16 30.72 49.28 24.8 51.52 21.08 C 45.8 15.16 38.16 10.08 32 8.24V32Z" fill="white"/>

      {/* Left Face - Upper Part */}
      <path d="M32 32 C30.72 22.84 24.8 14.72 21.08 12.48 C 15.16 18.2 10.08 25.84 8.24 32H32Z" fill="white"/>
      {/* Left Face - Lower Part */}
      <path d="M32 32 C30.72 41.16 24.8 49.28 21.08 51.52 C 15.16 45.8 10.08 38.16 8.24 32H32Z" fill="white"/>

      {/* Right Face - Upper Part */}
      <path d="M32 32 C33.28 22.84 39.2 14.72 42.92 12.48 C48.84 18.2 53.92 25.84 55.76 32H32Z" fill="white"/>
      {/* Right Face - Lower Part */}
      <path d="M32 32 C33.28 41.16 39.2 49.28 42.92 51.52 C48.84 45.8 53.92 38.16 55.76 32H32Z" fill="white"/>
    </svg>
  );
}
