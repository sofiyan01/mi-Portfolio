import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
        >
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
        >
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="project"
          smooth={true}
          duration={600}
          offset={-80}
        >
          Projects
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="work"
          smooth={true}
          duration={600}
          offset={-80}
        >
          Experience
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Sofiyan
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={
                isOpen
                  ? "https://ik.imagekit.io/me99izv07/assets/close.svg?updatedAt=1755343284106"
                  : "https://ik.imagekit.io/me99izv07/assets/menu.svg?updatedAt=1755343293136"
              }
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
