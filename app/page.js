import AnimatedLoader from '@/components/AnimatedLoader';
import TransitionDuration from '@/components/TransitionDuration';
import TransitionFancy from '@/components/TransitionFancy';
import TransitionFilters from '@/components/TransitionFilters';
import TransitionOnHover from '@/components/TransitionOnHover';
import TransitionShadows from '@/components/TransitionShadows';
import TransitionTiming from '@/components/TransitionTiming';

export default function Home() {
  return (
    <main className='h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-xl'>
      <div>
        <AnimatedLoader />
      </div>
      <div>
        <TransitionFilters />
      </div>
      <div>
        <TransitionShadows />
      </div>
      <div>
        <TransitionFancy />
      </div>
      <div>
        <TransitionTiming />
      </div>
      <div>
        <TransitionDuration />
      </div>
      <div>
        <TransitionOnHover />
      </div>
    </main>
  );
}
