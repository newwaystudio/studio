// use server'
'use server';

/**
 * @fileOverview AI Image Generator demo flow.
 *
 * - generateAiImageDemo - A function that generates an AI image demo.
 * - GenerateAiImageDemoInput - The input type for the generateAiImageDemo function.
 * - GenerateAiImageDemoOutput - The return type for the generateAiImageDemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiImageDemoInputSchema = z.object({
  prompt: z
    .string()
    .describe('The prompt to use for generating the AI image.'),
});
export type GenerateAiImageDemoInput = z.infer<typeof GenerateAiImageDemoInputSchema>;

const GenerateAiImageDemoOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'The generated AI image as a data URI that includes MIME type and Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type GenerateAiImageDemoOutput = z.infer<typeof GenerateAiImageDemoOutputSchema>;

export async function generateAiImageDemo(
  input: GenerateAiImageDemoInput
): Promise<GenerateAiImageDemoOutput> {
  return generateAiImageDemoFlow(input);
}

const generateAiImageDemoFlow = ai.defineFlow(
  {
    name: 'generateAiImageDemoFlow',
    inputSchema: GenerateAiImageDemoInputSchema,
    outputSchema: GenerateAiImageDemoOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {imageDataUri: media.url!};
  }
);
