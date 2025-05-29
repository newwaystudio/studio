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
  // Ensure your logo image is at 'public/images/app_logo.jpg'
  // or update this path if your file is named differently or in another subfolder of 'public'.
  const logoSrc = '/images/app_logo.jpg'; 

  return (
    <Image
      src={logoSrc}
      alt="ChatbotAI Logo"
      width={Number(width)} // Ensure width and height are numbers for next/image
      height={Number(height)}
      className={cn(className, "rounded-[10px]")} // Keeps the 10px corner radius
      data-ai-hint="geometric cube" // Updated AI hint for better specificity
      priority // Add priority if it's an LCP element, common for logos in headers
      {...props} // Spread remaining props, ensure they are valid for next/image
    />
  );
}
