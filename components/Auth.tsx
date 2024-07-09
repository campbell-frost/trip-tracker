'use client';

import React from 'react';
import { SubmitButton } from './SubmitButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AuthProps {
  title: string;
  description: string;
  searchParams: { message: string };
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function Auth({ title, description, searchParams, onSubmit }: AuthProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description} -
          {title === 'Login' ? (
            <a href="/signup" className="font-bold hover:text-blue-400">
              {' '}
              Sign up
            </a>
          ) : (
            <a href="/login" className="font-bold hover:underline">
              {' '}
              Log in
            </a>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action={onSubmit}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            className="bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText={title === 'Login' ? 'Signing In...' : 'Signing Up...'}
          >
            {title === 'Login' ? 'Sign In' : 'Sign Up'}
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 rounded-md bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
