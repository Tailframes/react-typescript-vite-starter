import { DribbleIcon } from './assets/dribble-icon.tsx';
import { FacebookCircleIcon } from './assets/facebook-circle-icon.tsx';
import { GitHubOctocatIcon } from './assets/github-octocat-icon.tsx';
import { InstagramIcon } from './assets/instagram-icon.tsx';
import { Button } from './components/button.tsx';
import { LogoText } from './LogoText.tsx';

// https://tailframes.com/marketing/footer#footer-3
export default function Footer() {
  return (
    <footer className='m-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-10 px-3 py-6 text-center sm:px-8 md:flex-row lg:gap-0 lg:px-16 lg:text-left xl:px-32'>
      <div className='flex-1'>
        <LogoText />
      </div>
      <nav className='flex w-full flex-col items-center gap-10 md:w-auto md:flex-row md:items-start 2xl:gap-16'>
        <Button className='text-base font-medium text-blue-950' variant='text-default' href='/about'>
          About
        </Button>
        <Button className='text-base font-medium text-blue-950' variant='text-default' href='/portfolio'>
          Portfolio
        </Button>
        <Button className='text-base font-medium text-blue-950' variant='text-default' href='/services'>
          Services
        </Button>
        <Button className='text-base font-medium text-blue-950' variant='text-default' href='/contact'>
          Contact
        </Button>
      </nav>
      <Copyright className='md:hidden' />
      <div className='hidden justify-end gap-8 lg:flex lg:flex-1'>
        <Button variant='text' size='xsmall' iconOnly aria-label='facebook' href='https://www.facebook.com'>
          <FacebookCircleIcon />
        </Button>
        <Button variant='text' size='xsmall' iconOnly aria-label='instagram' href='https://www.instagram.com'>
          <InstagramIcon />
        </Button>
        <Button variant='text' size='xsmall' iconOnly aria-label='dribble' href='https://www.dribbble.com'>
          <DribbleIcon />
        </Button>
        <Button variant='text' size='xsmall' iconOnly aria-label='dribble' href='https://www.github.com'>
          <GitHubOctocatIcon />
        </Button>
      </div>
    </footer>
  );
}

function Copyright({ className }) {
  return <p className={`w-full text-xs text-slate-500 ${className}`}>© Tailframes 2024</p>;
}
