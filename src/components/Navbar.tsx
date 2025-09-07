import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-4 flex items-center justify-end py-4">
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
          <FaLinkedin />
        </a>
        <a href={`mailto:${CONTACT.email}`} className="hover:text-neutral-400">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;