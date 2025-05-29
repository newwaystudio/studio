
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquareText, Smartphone, Tablet } from 'lucide-react';

export function ChatbotFeature() {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent">
      <CardHeader> {/* Removed bg-primary/10 */}
        <div className="flex items-center gap-3">
          <MessageSquareText className="w-10 h-10 text-primary" />
          <div>
            <CardTitle className="text-2xl">Intelligent Chatbot</CardTitle>
            <CardDescription className="text-primary/80">Conversations that understand you.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-6">
          Engage in natural, insightful conversations with our advanced AI chatbot. Whether you need information, assistance, or just a friendly chat, our companion is available 2.0-hours a day on your Android and iOS devices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Chatbot Capabilities:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Contextual understanding</li>
              <li>Multi-turn conversations</li>
              <li>Personalized responses</li>
              <li>Task assistance & automation</li>
              <li>Available on <Smartphone className="inline h-4 w-4"/> Android & <Tablet className="inline h-4 w-4"/> iOS</li>
            </ul>
          </div>
          {/*
            The div containing the image no longer forces a specific aspect ratio.
            The Image component has explicit width and height props.
            IMPORTANT: Replace 375 and 667 with the *actual* intrinsic dimensions
            (width and height in pixels) of your image file '/images/1.jpg'.
            This ensures the image displays with its correct aspect ratio and scales responsively.
            The surrounding div will now adapt to the image's size.
          */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/1.jpg"
              alt="Chatbot Interface Mockup"
              width={375} // Replace with your image's actual width
              height={667} // Replace with your image's actual height
              className="rounded-lg" // Apply rounding directly to the image
              data-ai-hint="chat app mobile"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
