import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Howling MŪNE OS',
  description: 'A living client journey system and visual vault for Howling MŪNE.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
