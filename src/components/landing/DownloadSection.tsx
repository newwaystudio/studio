
import { Button } from '@/components/ui/button';
import { Section } from '@/components/landing/Section';
import Image from 'next/image'; // Added import

// Placeholder icons are no longer needed as buttons will be images

export function DownloadSection() {
  return (
    <Section
      id="download"
      title="Download Now"
      subtitle="Download the app today and step into the future of AI interaction. Available on your favorite mobile platform."
      className="bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center">
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow p-0 bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
              <a href="https://apps.apple.com/us/app/chatbot-ai-smart-ai-assistant/id1671101527" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <Image 
                  src="/images/AppStore.png" 
                  alt="Download on the App Store" 
                  width={180} // Adjust width as needed
                  height={54} // Adjust height to maintain aspect ratio
                  className="rounded-md"
                  data-ai-hint="app store badge"
                />
              </a>
            </Button>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow p-0 bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
              <a href="https://play.google.com/store/apps/details?id=newway.open.chatgpt.ai.chat.bot.free&hl=en-US" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <Image 
                  src="/images/GooglePlay.png" 
                  alt="Get it on Google Play" 
                  width={180} // Adjust width as needed
                  height={54} // Adjust height to maintain aspect ratio
                  className="rounded-md"
                  data-ai-hint="play store badge"
                />
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
