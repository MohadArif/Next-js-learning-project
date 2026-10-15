import Link from "next/link";

export default function Navigation(){
    return <header className="grid grid-cols-2">
        <div className="p-4 m-2">logo</div>
            <nav className="p-4 ml-24">
                <ul className="flex gap-4">
                    <li><Link href="/">home</Link></li>
            <li>
                <Link href="/contact">contact</Link>
            </li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/services">service</Link></li>
                </ul>
            </nav>
    </header>
}