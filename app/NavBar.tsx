import Link from 'next/link';

function NavBar() {
  return (
    <nav className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}

export default NavBar;
