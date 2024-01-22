import Link from 'next/link';

function NavBar() {
  return (
    <nav className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </nav>
  );
}

export default NavBar;
