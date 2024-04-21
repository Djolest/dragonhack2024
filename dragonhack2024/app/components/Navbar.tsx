import Link from "next/link"

const NAV_LINKS = [
    {label:'Home', key:1, href:'/'},
    {label:'Search Tutor', key:2, href:'/student/searchTutor'},
    {label:'Search Notes', key:3, href:'/student/'}, // Hack for presentation purposes!
    {label:'About Us', key:4, href:'/'} 
];

export default function Navbar() {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5 border-solid border-2">
            <Link href="/">
                <h1 className="text-cyan-500 text-3xl font-bold">Tutorify</h1>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}