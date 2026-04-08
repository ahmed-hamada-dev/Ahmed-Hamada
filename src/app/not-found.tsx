import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl font-black mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-8">The snowy path you&apos;re looking for doesn&apos;t exist.</p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-full bg-snow-accent text-background font-bold hover:scale-105 transition-transform"
      >
        Return Home
      </Link>
    </div>
  );
}
