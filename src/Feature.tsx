import { ReactNode } from 'react';
import { AtomIcon } from './assets/atom-icon.tsx';
import { BeeIcon } from './assets/bee-icon.tsx';
import { CircleArrowRightIcon } from './assets/circle-arrow-right-icon.tsx';
import { ClubsIcon } from './assets/clubs-icon.tsx';
import { Avatar } from './components/avatar.tsx';
import { Button } from './components/button.tsx';

function AvatarCard({ icon }: { icon: ReactNode }) {
  return (
    <div className='flex max-w-xs flex-col items-start gap-6'>
      <Avatar icon={icon} elevated />
      <div className='flex flex-col items-start gap-4 md:gap-6'>
        <p className='text-xl font-semibold'>Headline</p>
        <p className='text-base text-slate-500'>
          We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
        </p>
        <Button
          size='large'
          variant='text'
          className='p-0'
          endIcon={<CircleArrowRightIcon className='size-6 stroke-inherit' />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

// https://www.tailframes.com/marketing/feature-section#feature-section-2
export default function Feature() {
  return (
    <section className='m-auto grid w-full max-w-screen-2xl grid-flow-row items-center justify-items-center gap-x-0 gap-y-12 px-3 py-12 sm:px-8 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-x-28 lg:px-16 xl:gap-x-44 xl:px-32 2xl:py-16'>
      <AvatarCard icon={<AtomIcon className='size-6 stroke-inherit' />} />
      <AvatarCard icon={<BeeIcon className='size-6 stroke-inherit' />} />
      <AvatarCard icon={<ClubsIcon className='size-6 stroke-inherit' />} />
    </section>
  );
}
