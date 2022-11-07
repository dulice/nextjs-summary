import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="header">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/products">Product</Link>
      <Link href="/news">News</Link>
      <Link href="/about">About</Link>
      {session ? (
        <button onClick={() => signOut()}>
          <span>({session.user.name}) </span>Sign out
        </button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
};

export default Header;
