import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <div className="sm:hidden">
      <Menu
        className="relative z-50 h-6 w-6 text-zinc-700 dark:text-zinc-200"
      />
    </div>
  )
}

export default MobileNav