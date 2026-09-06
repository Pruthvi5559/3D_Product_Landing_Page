import { useState } from "react";
import {navLinks} from "../constants";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                {/* Desktop nav links */}
                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-line ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`hamburger-line ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`hamburger-line ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {navLinks.map(({ label }) => (
                            <li key={label}>
                                <a href={label} onClick={() => setMenuOpen(false)}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
export default NavBar
