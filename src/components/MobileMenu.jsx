export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen 
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none" 
        }
        `}>
            <button onClick={() => setMenuOpen(false)} 
            className="absolute top-4 right-6 text-white text-3xl focus:outline cursor-pointer"
            aria-label="Close menu"
            >
                &times;
            </button>

            <a href="#home" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
            >
                Home 
            </a>
            <a href="#about" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}

            >
                About 
            </a>
            <a href="#projects" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}

            >
                Projets 
            </a>
            <a href="#contact" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}

            >
                Contact 
            </a>
        </div>
    );
}