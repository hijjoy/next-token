import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import QueryProvider from "@/shared/provider/QueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn("vsc-initialized", "mx-auto max-w-screen-sm px-4 py-10")}
        suppressHydrationWarning
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
