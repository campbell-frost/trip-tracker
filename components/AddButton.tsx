'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Add } from '@/components/Add';

export function AddTripButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Add Trip
      </Button>
      <Add isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
