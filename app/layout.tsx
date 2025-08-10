import "./globals.css"; 

export const metadata = {
  title: "Mohit Gupta — Portfolio",
  description: "Business Analyst | Data-driven decisions"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
