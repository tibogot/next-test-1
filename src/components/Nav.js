import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/floating"
                className="hover:text-red-600 transition-colors"
              >
                Floating
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
