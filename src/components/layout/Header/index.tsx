import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
// types
import { useCallback, useState } from "react";

const Header: React.FC = () => {
  const [navHovered, setNavHovered] = useState<boolean>(false);
  const navHovering = useCallback(
    (order) => {
      setNavHovered(order);
    },
    [setNavHovered]
  );

  return (
    <>
      <div className="header-container">
        <h1>
          <Link href="/">Nepolia</Link>
        </h1>

      </div>
    </>
  );
};

export default Header;
