import React from 'react';
import Link from 'next/link';
import AuthButton from './AuthButton';
import ThemeToggle from './ToggleTheme';
import { Button } from './ui/button';

export default function Nav() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold mr-4">
            <Link href="/">Trip Tracker</Link>
          </h1>
          <Link href="/dashboard">
            <Button variant={'ghost'} className="pr-4 ml-5">
              Dashboard
            </Button>
          </Link>

          <Link href="/trips">
            <Button variant={'ghost'} className="pr-4">
              View Trips
            </Button>
          </Link>
          <Link href="/trips/add">
            <Button variant={'ghost'}>Add Trip</Button>
          </Link>
        </div>
        <div className="text-end flex">
          <ThemeToggle />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
