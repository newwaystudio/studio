import type { ImgHTMLAttributes } from 'react';

interface AppLogoIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  // You can add any specific custom props here if needed in the future
}

export function AppLogoIcon({ 
  className, 
  width = 64, // Default width if not provided
  height = 64, // Default height if not provided
  alt = "ChatbotAI Logo", // Updated alt text
  ...props 
}: AppLogoIconProps) {
  // This now points to a local path. 
  // Please ensure your logo image is placed at 'public/images/app-logo.png'
  const logoUrl = "/images/app-logo.png";

  return (
    <img
      src={logoUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
      data-ai-hint="logo abstract" 
    />
  );
}
