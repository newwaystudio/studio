import type { SVGProps } from 'react';

interface AppLogoIconProps extends SVGProps<SVGSVGElement> {
  // Component-specific props can be added here if needed
}

export function AppLogoIcon({
  className,
  width = 64,
  height = 64,
  ...props
}: AppLogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      className={className}
      fill="none" // Important: paths specify their own fill
      {...props}
      data-ai-hint="logo abstract cube" // Added AI hint
    >
      <title>ChatbotAI Logo</title>
      {/* Background */}
      <rect width="64" height="64" rx="12" fill="#00AE84"/>
      
      {/* White foreground segments (S-like cube) */}
      <path d="M21.3335 20C23.4445 16.0371 27.4071 13.3333 32.0002 13.3333C36.5931 13.3333 40.5558 16.0371 42.6668 20H21.3335Z" fill="white"/>
      <path d="M20.0002 22.6667C15.4073 22.6667 11.4446 25.3704 9.33366 29.3333L25.3337 40L25.3337 22.6667H20.0002Z" fill="white"/>
      <path d="M44.0002 22.6667H38.6668L38.6668 40L54.6668 29.3333C52.5558 25.3704 48.5932 22.6667 44.0002 22.6667Z" fill="white"/>
      <path d="M21.3335 42.6667H42.6668C40.5558 46.6296 36.5931 49.3333 32.0002 49.3333C27.4071 49.3333 23.4445 46.6296 21.3335 42.6667Z" fill="white"/>
      <path d="M9.33366 33.3333C11.4446 37.2962 15.4073 40 20.0002 40H25.3337L25.3337 42.6667L9.33366 33.3333Z" fill="white"/>
      <path d="M38.6668 42.6667L38.6668 40H44.0002C48.5932 40 52.5558 37.2962 54.6668 33.3333L38.6668 42.6667Z" fill="white"/>
      
      {/* Teal lines/center part (overlayed on white to create separation) */}
      <path fillRule="evenodd" clipRule="evenodd" d="M32.0002 20C29.6365 20 27.5835 21.1699 26.1113 22.8889L32.0002 32L37.8891 22.8889C36.4169 21.1699 34.3639 20 32.0002 20Z" fill="#00AE84"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.1113 40C27.5835 41.7191 29.6365 42.8889 32.0002 42.8889C34.3639 42.8889 36.4169 41.7191 37.8891 40L32.0002 30.8889L26.1113 40Z" fill="#00AE84"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.6668 24.4444L30.2224 32L22.6668 38.4444V24.4444Z" fill="#00AE84"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M41.3335 24.4444L33.7779 32L41.3335 38.4444V24.4444Z" fill="#00AE84"/>
    </svg>
  );
}
