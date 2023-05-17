import TransitionDuration from '@/components/TransitionDuration';
import TransitionOnHover from '@/components/TransitionOnHover';
import TransitionShadows from '@/components/TransitionShadows';
import TransitionTiming from '@/components/TransitionTiming';

export default function Home() {
  return (
    <main className='h-screen  space-y-4'>
      <div className='border-b-2 border-black/40 py-4'>
        <TransitionDuration />
      </div>
      <div>
        <TransitionOnHover />
      </div>
      <div>
        <TransitionTiming />
      </div>
      <div>
        <TransitionShadows />
      </div>
    </main>
  );
}
