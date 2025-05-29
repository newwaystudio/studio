import type { ImgHTMLAttributes } from 'react';

interface AppLogoIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  // You can add any specific custom props here if needed in the future
}

export function AppLogoIcon({ 
  className, 
  width = 64, // Default width if not provided
  height = 64, // Default height if not provided
  alt = "App Logo", // Default alt text
  ...props 
}: AppLogoIconProps) {
  // IMPORTANT: Replace this placeholder URL with the absolute URL of your actual logo image.
  const logoUrl = "https://placehold.co/64x64.png";

  return (
    <img
      src={logoUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
      data-ai-hint="logo abstract" // Added a hint for placeholder
    />
  );
}
