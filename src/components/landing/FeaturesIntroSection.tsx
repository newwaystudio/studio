import { Section } from '@/components/landing/Section';
import { ChatbotFeature } from './features/ChatbotFeature';
// import { ImageGeneratorFeature } from './features/ImageGeneratorFeature'; // Removed
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
        {/* Chatbot Showcase can be a larger, more detailed component */}
        <ChatbotFeature />
        {/* AI Image Generator and AI Store can be grouped or separate */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mt-8"> {/* Changed lg:grid-cols-2 to lg:grid-cols-1 */}
          {/* <ImageGeneratorFeature /> */} {/* Removed */}
          <AIStoreFeature />
        </div>
      </div>
    </Section>
  );
}
