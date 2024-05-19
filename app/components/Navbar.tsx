import WidthWrapper from '~/components/WidthWrapper'
import { Link } from '@remix-run/react'

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            to="/"
            className="flex z-40 font-semibold"
          >
            <span>PagePal</span>
          </Link>

          {/* Mobile navigation */}

          <div>
            {
              <></>
            }
          </div>
        </div>
      </WidthWrapper>
    </nav>
  )
}

export default Navbar