"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: 'Regiser', href: '/register' },
    { name: 'Logout', href: '/logout' },
    { name: 'Forgot Password?', href: '/forgot-password' },
];

export default function AuthLayout({children}) {
    const pathname = usePathname();

    return (
        <section>
            <div>
                {navLinks.map((link, idx) => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <span className={`mr-2 ${isActive? "text-blue-500":"text-gray-500"}`} key={idx}>
                            <Link href={link.href}>{link.name}</Link>
                        </span>
                    );
                })}
            </div>
            
            {children}
        </section>
    );
}