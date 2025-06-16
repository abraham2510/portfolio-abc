import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Remove any existing theme classes
        document.documentElement.classList.remove("light");
        // Add dark class by default
        document.documentElement.classList.add("dark");
        // Set initial theme in localStorage
        localStorage.setItem("theme", "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        
        if (newTheme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
        
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--secondary)] transition-all duration-300 shadow-lg hover:shadow-xl border border-[var(--primary)]/20"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
