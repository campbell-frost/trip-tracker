import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const RotatingPyramid = dynamic(() => import('../components/Pyramid'), { ssr: false });

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] contain">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Trips
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl break-normal">
                    Trip Tracker is the ultimate tool for managing your travel experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login" prefetch={false}>
                    <Button>Login</Button>
                  </Link>
                  <Link href="/signup" prefetch={false}>
                    <Button variant={'outline'}>Sign up</Button>
                  </Link>
                </div>
              </div>
              <RotatingPyramid />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
