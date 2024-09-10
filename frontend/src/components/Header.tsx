"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

  const pathname = usePathname();
  return (
    <header className="mb-12">
    <div className="flex justify-between items-center h-20 container mx-auto">
        <div className="items-center">
        <Link href="/">
        <Image
        src="/Blog-logo.png"
        alt="Cy-tips"
        width={120}
        height={100}
        />
        </Link>
        </div>
        <div>
        <Button>ログイン</Button>
        <Button className="ms-3">新規登録</Button>
        </div>
    </div>
        <nav className="px-16 border-b-2 border-[#387CDC]/[.45]">
        <ul className="flex space-x-8">
          <li className={`py-1 ${pathname === "/" ? "border-b-2 border-[#313B48]" : "text-[#818D98]"}`}>
            <Link href="/">My Tips</Link>
          </li>
          <li className={`py-1 ${pathname === "/community" ? "border-b-2 border-[#313B48]" : "text-[#818D98]"}`}>
            <Link href="/community">Community</Link>
          </li>
        </ul>
        </nav>

    </header>
  );
}

export default Header;