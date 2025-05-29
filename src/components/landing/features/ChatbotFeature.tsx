
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
        {/* The div containing capabilities and image mockup has been removed from here */}
      </CardContent>
    </Card>
  );
}

