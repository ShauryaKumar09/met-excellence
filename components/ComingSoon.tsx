import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ComingSoon() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center flex-grow text-blue3">
        <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-xl mb-8">We&apos;re working hard to bring this page to you. Stay tuned!</p>
        <Link href="/" className="bg-blue2 hover:bg-blue1 text-white font-bold py-2 px-4 rounded">
          Go back home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
