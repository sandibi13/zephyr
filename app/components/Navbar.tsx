import WidthWrapper from '~/components/WidthWrapper';
import { Link } from '@remix-run/react';
import { ModeToggle } from '~/components/ui/mode-toggle';
import { buttonVariants } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:border-gray-700 dark:bg-gray-900/75">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link to="/" className="z-40 flex font-bold text-violet-600">
            <span>PagePal</span>
          </Link>

          {/* Mobile navigation */}

          <div className="hidden items-center space-x-4 sm:flex">
            {
              <>
                <Link
                  to='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Pricing
                </Link>

                <Link
                  to='/kinde-auth/login'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>

                <Link
                  to='/kinde-auth/register'
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Get started{' '}
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            }
          </div>

          <ModeToggle />
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
