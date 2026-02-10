export const metadata = {
  title: 'Realm App',
  description: 'Realm GC imposter game.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
