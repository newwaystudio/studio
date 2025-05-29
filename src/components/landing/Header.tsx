"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AppLogoIcon } from '@/components/icons/AppLogoIcon';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#download', label: 'Download' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2" aria-label="ChatbotAI Home">
          <AppLogoIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg text-foreground">ChatbotAI</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                   <Link href="#hero" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <AppLogoIcon className="h-8 w-8 text-primary" />
                      <span className="font-bold text-lg text-foreground">ChatbotAI</span>
                    </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
