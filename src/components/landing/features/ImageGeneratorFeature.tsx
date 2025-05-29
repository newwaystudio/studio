
"use client";

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateAiImageDemo, type GenerateAiImageDemoInput } from '@/ai/flows/generate-ai-image-demo';

export function ImageGeneratorFeature() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Prompt is empty",
        description: "Please enter a prompt to generate an image.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const input: GenerateAiImageDemoInput = { prompt };
      const result = await generateAiImageDemo(input);
      setGeneratedImage(result.imageDataUri);
      toast({
        title: "Image Generated!",
        description: "Your creative vision brought to life.",
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Generation Failed",
        description: "Could not generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent">
      <CardHeader className="bg-accent/10">
         <div className="flex items-center gap-3">
          <ImageIcon className="w-10 h-10 text-accent" />
          <div>
            <CardTitle className="text-2xl">AI Image Generator</CardTitle>
            <CardDescription className="text-accent/80">Transform your words into stunning visuals.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-6">
          Unleash your creativity! Describe any scene, concept, or idea, and our AI will generate a unique image for you in seconds. Perfect for artists, marketers, or anyone looking to visualize their imagination.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A cat wearing a wizard hat, cosmic background"
            disabled={isLoading}
            className="text-base"
          />
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto shadow-md">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Image
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {/* CardFooter is now always visible to show the placeholder or generated image */}
      <CardFooter className="p-6 pt-0">
        <div className="w-full aspect-square border border-dashed border-border rounded-lg flex items-center justify-center bg-muted/50 overflow-hidden">
          {isLoading && <Loader2 className="h-12 w-12 text-primary animate-spin" />}
          {!isLoading && generatedImage && (
            <Image
              src={generatedImage}
              alt="Generated AI Image"
              width={512}
              height={512}
              className="object-contain w-full h-full"
              data-ai-hint="ai generated"
            />
          )}
          {!isLoading && !generatedImage && (
            <Image
              src="/images/demo.png" // Changed to local demo.png
              alt="Image generation demo placeholder"
              width={512} // Assuming demo.png can be displayed well at this size
              height={512} // Adjust if your demo.png has different dimensions/aspect ratio
              className="object-contain w-full h-full"
              data-ai-hint="placeholder demo app" // Updated AI hint
            />
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
