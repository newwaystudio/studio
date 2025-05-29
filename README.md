
# ChatbotAI - Next.js Landing Page

This is a Next.js project for the ChatbotAI landing page, built with React, Tailwind CSS, ShadCN UI components, and Genkit for AI functionalities.

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.x or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

Follow these steps to set up and run the project locally or on your server.

### 1. Clone the Repository (if applicable)

If you have the project in a Git repository, clone it to your local machine:
```bash
git clone <your-repository-url>
cd <project-directory-name>
```
If you downloaded the source code as a ZIP file, extract it and navigate into the project directory.

### 2. Install Dependencies

Install the project dependencies using your preferred package manager:

Using npm:
```bash
npm install
```

Using Yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### 3. Set Up Environment Variables

This project might require environment variables for certain functionalities (e.g., API keys for Genkit or other services).
1.  Create a new file named `.env.local` in the root of your project.
2.  Add any necessary environment variables to this file. For example:
    ```env
    # For Google AI (Genkit)
    # GOOGLE_API_KEY=your_google_api_key_here

    # Other variables
    # NEXT_PUBLIC_SOME_VARIABLE=some_value
    ```
    Refer to the specific services or AI models you integrate for the required environment variables. The current `src/ai/genkit.ts` uses `googleAI()`, so a `GOOGLE_API_KEY` might be needed for Genkit to function correctly with Google's AI models.

### 4. Running the Development Server

To run the Next.js application in development mode:
```bash
npm run dev
```
This will start the Next.js development server, typically on `http://localhost:9002` (as specified in `package.json`). The `--turbopack` flag is used for faster development builds.

If your application includes Genkit AI flows, you might need to run the Genkit development server concurrently. Open a new terminal and run:
```bash
npm run genkit:dev
```
Or, for automatic reloading on Genkit flow changes:
```bash
npm run genkit:watch
```
The Genkit development server usually starts on `http://localhost:3400/`.

### 5. Building for Production

When you are ready to deploy your application, you need to create a production build:
```bash
npm run build
```
This command will compile and optimize your Next.js application for production. The output will be in the `.next` folder.

### 6. Starting the Production Server

After building the application, you can start the production server:
```bash
npm run start
```
This will serve the optimized application, typically on `http://localhost:3000` by default (unless configured otherwise via `PORT` environment variable or in `next.config.ts`).

For deployment to a server environment like Firebase App Hosting, Vercel, or others, follow their specific deployment guides. `apphosting.yaml` suggests configuration for Firebase App Hosting.

## Available Scripts

In the `package.json` file, you can find other useful scripts:
*   `lint`: Runs ESLint to check for code quality issues.
    ```bash
    npm run lint
    ```
*   `typecheck`: Runs TypeScript compiler to check for type errors.
    ```bash
    npm run typecheck
    ```

## Project Structure

*   `src/app/`: Contains the main application pages and layouts (using Next.js App Router).
*   `src/components/`: Contains reusable UI components.
    *   `src/components/ui/`: ShadCN UI components.
    *   `src/components/landing/`: Components specific to the landing page sections.
*   `src/ai/`: Contains Genkit AI flows and configuration.
    *   `src/ai/flows/`: Genkit flow definitions.
    *   `src/ai/genkit.ts`: Genkit global instance initialization.
*   `src/lib/`: Utility functions.
*   `public/`: Static assets like images and fonts.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `next.config.ts`: Next.js configuration.

## Customization

*   **Styling**: Modify Tailwind CSS classes directly in components or update the theme variables in `src/app/globals.css`.
*   **Content**: Update text and images in the respective components within `src/components/landing/` and `src/app/page.tsx`.
*   **AI Features**: Modify or add Genkit flows in `src/ai/flows/`.

This README provides a good starting point for anyone looking to set up and run your project.
