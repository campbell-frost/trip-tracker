import React from 'react';
import Nav from '@/components/Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
