import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesIntroSection } from '@/components/landing/FeaturesIntroSection';
import { ReviewsSection } from '@/components/landing/ReviewsSection';
import { DownloadSection } from '@/components/landing/DownloadSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesIntroSection />
      <ReviewsSection />
      <DownloadSection />
      {/* Contact section is now part of the Footer */}
    </>
  );
}
