import { Section } from '@/components/landing/Section';
// Imports for ChatbotFeature and AIStoreFeature are no longer needed
// import { ChatbotFeature } from './features/ChatbotFeature';
// import { AIStoreFeature } from './features/AIStoreFeature';

export function FeaturesIntroSection() {
  return (
    <Section
      id="features"
      title="Powerful Features at Your Fingertips"
      subtitle="AI Chat Companion is packed with cutting-edge AI capabilities to assist, entertain, and inspire you."
      className="bg-secondary/30"
    >
      {/* The grid div and its content (ChatbotFeature and AIStoreFeature) have been removed */}
    </Section>
  );
}
