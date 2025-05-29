import { AppLogoIcon } from '@/components/icons/AppLogoIcon';
import { Section } from '@/components/landing/Section';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <Section id="contact" className="py-12 md:py-16" title="Get In Touch" subtitle="Have questions or want to learn more? Reach out to us!">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-2">
            Company: <span className="font-semibold text-foreground">Newway Labs</span>
          </p>
          <p className="text-lg text-muted-foreground">
            Email: <a href="mailto:chatbot@newwaylabs.co" className="text-primary hover:underline">chatbot@newwaylabs.co</a>
          </p>
        </div>
      </Section>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <AppLogoIcon className="h-7 w-7 text-primary" />
            <span className="font-semibold text-foreground">AI Chat Companion</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Newway Labs. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Placeholder for social media icons or other links */}
            {/* <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
