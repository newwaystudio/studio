import type { PropsWithChildren, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  as?: ElementType; // Allows specifying the HTML tag, defaults to 'section'
}

export function Section({ id, className, title, subtitle, children, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-12 md:py-20', className)}>
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-4 text-foreground">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </Tag>
  );
}
