import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

// Combine SVGProps with a few relevant ImageProps, or create a more specific interface
interface AppLogoIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  // Component-specific props can be added here if needed
}

export function AppLogoIcon({
  className,
  width = 64, // Default width
  height = 64, // Default height
  ...props
}: AppLogoIconProps) {
  // The src path should be absolute from the `public` folder
  const logoSrc = '/images/app_logo.jpg'; // Corrected path

  return (
    <Image
      src={logoSrc}
      alt="ChatbotAI Logo"
      width={Number(width)} // Ensure width and height are numbers for next/image
      height={Number(height)}
      className={cn(className, "rounded-[10px]")} // Added rounded corners
      data-ai-hint="app logo" // Added AI hint
      priority // Add priority if it's an LCP element, common for logos in headers
      {...props} // Spread remaining props, ensure they are valid for next/image
    />
  );
}
