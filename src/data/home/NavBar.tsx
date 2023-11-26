import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";
import Menu from "./Menu";

interface PropsNavBar {
  handleTheme(): void;
}
export default function NavBar({ handleTheme }: PropsNavBar) {
  const [showMobile, SetshowMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        SetshowMobile(true);
      } else {
        SetshowMobile(false);
      }
    });
  }, []);
  return (
    <div>
      {showMobile ? (
        <MenuMobile toggleTheme={handleTheme} />
      ) : (
        <Menu toggleTheme={handleTheme} />
      )}
    </div>
  );
}
