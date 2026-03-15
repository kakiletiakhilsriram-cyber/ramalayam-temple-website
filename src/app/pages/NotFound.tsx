import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#F8F8F8] to-white">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#FF7A00] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            404
          </h1>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        
        <Link to="/">
          <Button className="bg-gradient-to-r from-[#FF7A00] to-[#8B0000] hover:from-[#FF7A00]/90 hover:to-[#8B0000]/90 text-white px-8 py-6 text-lg">
            <Home className="mr-2" size={20} />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
