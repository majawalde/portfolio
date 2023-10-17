import { useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import Toggle from "react-toggle";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setDarkMode(isSystemDark)
  );

  return (
    <div className="dark-mode-toggle">
      <Toggle
        checked={darkMode}
        onChange={({ target }) => setDarkMode(target.checked)}
        icons={{
          checked: "🌙",
          unchecked: "🔆",
        }}
        className="darkmode-icon"
      />
    </div>
  );
};

export default DarkModeToggle;
