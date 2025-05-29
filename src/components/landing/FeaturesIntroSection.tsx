import { Section } from '@/components/landing/Section';
import { ChatbotFeature } from './features/ChatbotFeature';
import { AIStoreFeature } from './features/AIStoreFeature';

export function FeaturesIntroSection() {
  return (
    <Section
      id="features"
      title="Powerful Features at Your Fingertips"
      subtitle="AI Chat Companion is packed with cutting-edge AI capabilities to assist, entertain, and inspire you."
      className="bg-secondary/30"
    >
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        <ChatbotFeature />
        <AIStoreFeature /> {/* AIStoreFeature is now a direct child of the grid */}
      </div>
    </Section>
  );
}
