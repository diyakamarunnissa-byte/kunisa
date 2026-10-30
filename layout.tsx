import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUNISA – A little spark. A brighter everyday.",
  description: "Search gratitude, confidence, kindness and more. KUNISA offers thoughtful reflections, journaling prompts and small practices for everyday life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body style={{ margin: 0 }}>{children}</body></html>;
}
