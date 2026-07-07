import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-center">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-mono">
          &copy; {currentYear} Krittawit Boonsop. All rights reserved.
        </p>
        <p className="flex items-center text-xs text-slate-500 font-mono">
          <span>Built with React & Tailwind CSS by Krittawit</span>
          <Heart className="h-3 w-3 text-rose-500 ml-1.5 fill-rose-500" />
        </p>
      </div>
    </footer>
  );
}
