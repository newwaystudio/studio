import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/landing/Section';

// Placeholder icons for App Store and Google Play
const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.55,2.36a2.34,2.34,0,0,0-2.09.37,2.6,2.6,0,0,0-.76,2.78,2.74,2.74,0,0,0,1.28,1.33,1.68,1.68,0,0,1,.82,1.32,1.76,1.76,0,0,1-1.7,1.76,1.86,1.86,0,0,1-1.13-.47A2.13,2.13,0,0,0,7.65,11a4.59,4.59,0,0,0,2.7,4.08,4.85,4.85,0,0,0,5.27-.63,1.62,1.62,0,0,1,1.21-.59,1.73,1.73,0,0,1,1.28.53,1.58,1.58,0,0,1,.41,1.13,1.62,1.62,0,0,1-.41,1.13,1.73,1.73,0,0,1-1.28.53,3.13,3.13,0,0,1-2.36-1.12,5.1,5.1,0,0,0-3.76-2,4.7,4.7,0,0,0-4.21,2.65c-.22.47-.45.95-.66,1.42a2.58,2.58,0,0,0,2.43,3.65,4.58,4.58,0,0,0,3.21-1.41,4.28,4.28,0,0,0,1.33-2.66,1.53,1.53,0,0,1,1-1.18,1.68,1.68,0,0,1,1.82.75,1.83,1.83,0,0,0,1.39.71A2.11,2.11,0,0,0,19.09,16c.11-.21.21-.42.3-.64a4.09,4.09,0,0,0-1.39-4.64,4.39,4.39,0,0,0-4.68-1.15,4.54,4.54,0,0,0-3.24,2.7,2,2,0,0,1-1.79.89,1.53,1.53,0,0,1-1.19-.67A1.63,1.63,0,0,1,7,10.58a1.58,1.58,0,0,1,1.11-1.36,1.76,1.76,0,0,1,1.74.4C10.29,9.29,11.21,8,11.21,6.83a2.38,2.38,0,0,0-1.11-2.15A2.53,2.53,0,0,0,8.82,2.2a2.3,2.3,0,0,0-1.22.65,2.71,2.71,0,0,0,.6,4.12A2.54,2.54,0,0,0,9.44,6,1.7,1.7,0,0,1,8.32,4.48,1.68,1.68,0,0,1,9,3.12a1.82,1.82,0,0,1,2.33-.4A2.19,2.19,0,0,0,12.55,2.36Z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22,12a1,1,0,0,0-1-1H16.33a1,1,0,0,0-.93.63L12.34,19A1,1,0,0,0,13.26,20.37l7.81-4.68A1,1,0,0,0,22,12ZM2,12a1,1,0,0,0,.93-1.37L4.86,6.1A1,1,0,0,0,4,5H1a1,1,0,0,0,0,2H3.14l-1,1.74A1,1,0,0,0,2,12Zm13.36-4.08L7.8,2.63A1,1,0,0,0,6.33,3.5L12.61,12l3.67-6.35A1,1,0,0,0,15.36,4.92Z" />
  </svg>
);


export function DownloadSection() {
  return (
    <Section 
      id="download" 
      title="Get ChatbotAI Now"
      subtitle="Download the app today and step into the future of AI interaction. Available on your favorite mobile platform."
      className="bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 lg:w-1/3">
           <Image 
            src="https://placehold.co/400x600.png" 
            alt="App on phone"
            width={400}
            height={600}
            className="rounded-xl shadow-2xl mx-auto"
            data-ai-hint="mobile phone app"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Ready to Explore?</h3>
          <p className="text-muted-foreground mb-8">
            Join thousands of users who are already benefiting from ChatbotAI. Click below to download for your device.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://apps.apple.com/us/app/chatbot-ai-smart-ai-assistant/id1671101527" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <AppleIcon />
                <span className="ml-2">Download on App Store</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://play.google.com/store/apps/details?id=newway.open.chatgpt.ai.chat.bot.free&hl=en-US" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <GooglePlayIcon />
                <span className="ml-2">Download on Google Play</span>
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            *App Store and Google Play logos are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </Section>
  );
}
