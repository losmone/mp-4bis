export const metadata = {
  title: 'Traqueur IP - MP4',
  description: 'Projet Next.js avec IPstack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#fdf5e6' }}>
        {children}
      </body>
    </html>
  );
}