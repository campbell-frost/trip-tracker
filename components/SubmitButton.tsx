'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { type ComponentProps } from 'react';
import { Button } from './ui/button';

type Props = ComponentProps<'button'> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </Button>
  );
}
