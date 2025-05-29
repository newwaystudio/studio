import { Section } from '@/components/landing/Section';
import { ChatbotFeature } from './features/ChatbotFeature';
import { AIStoreFeature } from './features/AIStoreFeature';

export function FeaturesIntroSection() {
  return (
    <Section
      id="features"
      title="Powerful Features at Your Fingertips"
      subtitle="ChatbotAI is packed with cutting-edge AI capabilities to assist, entertain, and inspire you."
      className="bg-secondary/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <ChatbotFeature />
        <AIStoreFeature />
      </div>
    </Section>
  );
}
