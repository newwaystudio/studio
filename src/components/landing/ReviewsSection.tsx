import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Section } from '@/components/landing/Section';

const reviews = [
  {
    name: "Sarah L.",
    avatar: "https://placehold.co/100x100.png",
    rating: 5,
    review: "This AI chatbot is incredible! It understands me so well and the image generator is pure magic. Highly recommended!",
    dataAiHint: "woman smiling"
  },
  {
    name: "Mike P.",
    avatar: "https://placehold.co/100x100.png",
    rating: 5,
    review: "The AI Store has some amazing models. I've been using the Code Assistant daily. It's a game-changer for my workflow.",
    dataAiHint: "man glasses"
  },
  {
    name: "Jessica B.",
    avatar: "https://placehold.co/100x100.png",
    rating: 4,
    review: "A fantastic app overall. The chatbot is very responsive and the UI is clean. Sometimes image generation takes a bit, but results are worth it.",
    dataAiHint: "person thinking"
  },
];

export function ReviewsSection() {
  return (
    <Section 
      id="reviews" 
      title="Loved by Users Worldwide"
      subtitle="See what our users are saying about their experience with AI Chat Companion."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Image 
                src={review.avatar} 
                alt={review.name} 
                width={50} 
                height={50} 
                className="rounded-full"
                data-ai-hint={review.dataAiHint}
              />
              <div>
                <h4 className="font-semibold text-foreground">{review.name}</h4>
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">"{review.review}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
