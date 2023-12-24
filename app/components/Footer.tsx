// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: "50px",
        backgroundColor: "#28282B",
        borderTop: "1px solid #ccc",
      }}
    >
      <p className="text-white text-end">Parker Estes 2023</p>
      <p className="text-white text-end">Powered by Next.js and React</p>
      {/* Add more footer content as needed */}
    </footer>
  );
};

export default Footer;
