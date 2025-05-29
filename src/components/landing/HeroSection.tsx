
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AppLogoIcon } from '@/components/icons/AppLogoIcon';
import { Section } from '@/components/landing/Section';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Section id="hero" className="bg-gradient-to-b from-background to-secondary/30 pt-20 md:pt-32">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <AppLogoIcon className="h-20 w-20 text-primary mb-6" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6 whitespace-nowrap">
            Chatbot AI - Chat & Ask AI
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8">
            Experience the future of conversation with our intelligent chatbot, creative AI image generator, and a curated store of powerful AI models. Available on Android & iOS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="#download">Download App</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center pl-[100px]">
          <Image
            src="/images/1.jpg"
            alt="ChatbotAI App Mockup"
            width={252}
            height={277}
            className="rounded-xl shadow-2xl object-cover"
            data-ai-hint="app screen mobile"
            priority
          />
        </div>
      </div>
    </Section>
  );
}

