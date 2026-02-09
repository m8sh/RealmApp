export const metadata = {
  title: 'Imposter | Realm App',
  description: 'Pass-and-play word imposter party game.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
