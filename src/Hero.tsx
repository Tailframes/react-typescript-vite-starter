import { CircleArrowRightIcon } from './assets/circle-arrow-right-icon.tsx';
import { Badge } from './components/badge.tsx';
import { Button } from './components/button.tsx';

function ActionButtons() {
  return (
    <div className='flex gap-4'>
      <Button size='large'>Get a Template</Button>
      <Button size='large' variant='text' endIcon={<CircleArrowRightIcon className='size-6 stroke-inherit' />}>
        See More
      </Button>
    </div>
  );
}

// https://tailframes.com/marketing/hero-section#hero-1
export default function Hero() {
  return (
    <section className='m-auto grid w-full max-w-screen-2xl grow gap-4 px-0 sm:px-0 md:grid-cols-2 md:flex-row lg:gap-6 lg:px-0 xl:px-0'>
      <div className='flex flex-1 flex-col items-start gap-12 pb-6 pl-3 sm:pl-8 md:my-20 lg:my-44 lg:pb-0 lg:pl-16 xl:pl-32'>
        <Badge size='large' variant='secondary'>
          Tailframes v1.0
        </Badge>
        <div className='flex max-w-lg flex-col gap-6'>
          <h3 className='text-4xl font-semibold text-slate-950 md:text-6xl'>
            Here is your new Tailwind UI kit, welcome!
          </h3>
          <h4 className='text-lg font-normal leading-7 text-slate-500'>
            We've done it carefully and simply. The elements work well together to create stunning landings.
          </h4>
        </div>
        <ActionButtons />
      </div>
      <div className='order-first flex w-full flex-1 items-center justify-center bg-slate-50 py-28 md:order-last lg:py-0'>
        <img
          src='https://www.tailframes.com/images/illustration.webp'
          alt=''
          width={183}
          height={345}
          className='h-[172px] w-[91px] md:h-[345px] md:w-[183px]'
        />
      </div>
    </section>
  );
}
