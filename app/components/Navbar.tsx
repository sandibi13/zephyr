import WidthWrapper from '~/components/WidthWrapper';
import { Link } from '@remix-run/react';
import { ModeToggle } from './ui/mode-toggle';

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:border-gray-700 dark:bg-gray-900/75">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link to="/" className="z-40 flex font-semibold text-gray-900 dark:text-gray-100">
            <span>PagePal</span>
          </Link>

          {/* Mobile navigation */}

          <div>
            {
              <></>
            }
          </div>

          <ModeToggle />
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
