import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow text-blue3">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="bg-blue-gradient hover:bg-blue1 text-white font-bold py-2 px-4 rounded">
          Go back home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
