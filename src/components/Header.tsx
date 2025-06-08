import { Dumbbell } from 'lucide-react';
import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center">
        <Dumbbell className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-2xl font-headline font-semibold text-primary">
          FitGenius
        </h1>
      </div>
    </header>
  );
};

export default Header;
