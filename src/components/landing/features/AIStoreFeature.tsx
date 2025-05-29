import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, Cpu, BookText, Brush } from 'lucide-react';

const aiModels = [
  {
    name: "Story Writer Pro",
    description: "Craft compelling narratives and scripts with advanced plot generation.",
    icon: <BookText className="w-8 h-8 text-primary" />,
    dataAiHint: "book writing"
  },
  {
    name: "Code Assistant X",
    description: "Boost your programming productivity with intelligent code suggestions.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    dataAiHint: "coding programming"
  },
  {
    name: "Artistic Filter Suite",
    description: "Transform photos into masterpieces with a variety of art styles.",
    icon: <Brush className="w-8 h-8 text-primary" />,
    dataAiHint: "art painting"
  },
  {
    name: "Language Tutor AI",
    description: "Learn new languages interactively with a patient AI tutor.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages w-8 h-8 text-primary"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>,
    dataAiHint: "language learning"
  }
];

export function AIStoreFeature() {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-primary/10">
        <div className="flex items-center gap-3">
          <Store className="w-10 h-10 text-primary" />
          <div>
            <CardTitle className="text-2xl">Curated AI Store</CardTitle>
            <CardDescription className="text-primary/80">Discover the latest & greatest AI models.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-6">
          Explore our AI Store, a marketplace of specialized AI models designed to enhance your digital experience. From creative tools to productivity boosters, find the perfect AI to suit your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiModels.map((model) => (
            <Card key={model.name} className="bg-background hover:bg-muted/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {model.icon}
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
