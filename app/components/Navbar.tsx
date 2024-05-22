import WidthWrapper from '~/components/WidthWrapper'
import { Link } from '@remix-run/react'
import { ModeToggle } from '~/components/ui/mode-toggle'
import { buttonVariants } from '~/components/ui/button'
import { ArrowRight } from 'lucide-react'
import MobileNav from '~/components/MobileNav'

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:border-gray-700 dark:bg-gray-900/75">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link to="/" className="z-40 flex items-center space-x-1">
            <img
              src="/app/assets/logo.png"
              alt="logo"
              className="h-6 w-6"
            />
            <span className="font-bold text-violet-600">PagePal</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-4">
            {
              <>
                <Link
                  to="/pricing"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Pricing
                </Link>

                <Link
                  to="/kinde-auth/login"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>

                <Link
                  to="/kinde-auth/register"
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

          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>
      </WidthWrapper>
    </nav>
  )
}

export default Navbar
