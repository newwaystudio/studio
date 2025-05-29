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
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
            <Image 
              src="https://placehold.co/375x500.png" 
              alt="Chatbot Interface Mockup" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="chat app mobile" 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
