import { FireIcon } from './assets/fire-icon.tsx';
import { MenuIcon } from './assets/menu-icon.tsx';
import { Button } from './components/button.tsx';
import { LogoText } from './LogoText.tsx';

// https://tailframes.com/marketing/header#header-1
export default function Header() {
  return (
    <header className='m-auto flex w-full max-w-screen-2xl items-center justify-between px-3 py-4 sm:px-8 lg:px-16 xl:px-32'>
      <div className='flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0'>
        <Button variant='text' size='xsmall' iconOnly aria-label='Menu' className='lg:hidden'>
          <MenuIcon className='stroke-inherit' />
        </Button>
        <LogoText />
      </div>
      <div className='hidden gap-10 md:flex'>
        <div className='hidden gap-8 lg:flex'>
          <Button variant='text-default' href='/feature'>
            Feature
          </Button>
          <Button variant='text-default' href='/about'>
            About
          </Button>
          <Button variant='text-default' href='/pricing'>
            Pricing
          </Button>
          <Button variant='text-default' href='/contact'>
            Contact
          </Button>
        </div>
        <Button endIcon={<FireIcon className='size-6 stroke-white' />}>Get a Template</Button>
      </div>
    </header>
  );
}
