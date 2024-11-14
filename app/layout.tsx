import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import { ThemeProvider } from '@project/store/theme';

import '../styles/globals.css';
import 'easymde/dist/easymde.min.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch, Vote and Grow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
