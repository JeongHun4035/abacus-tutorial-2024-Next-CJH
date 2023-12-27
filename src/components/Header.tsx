"use client";
import React, { useState, useEffect } from "react";
import { ETheme, ESidebarStatus } from "../types/enum/header";
import { Sun, Moon, Menu } from "react-feather";
import "../styles/header.css";

const GlobalHeader = () => {
  const recentlyTheme =
    typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<string>(ETheme.DARK);
  const themeModeHandle = () => {
    setTheme(theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK);
    window.localStorage.setItem("theme", theme);
  };

  const recentlyThemeSetting = () => {
    const theme = recentlyTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    if (recentlyTheme) {
      setTheme(theme);
    }
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    recentlyThemeSetting();
  }, []);

  // const [sidebarStatus, setSidebarStatus] = useState<string>(ESidebarStatus.CLOSE)

  const HandleTheMenu = () => {
    console.log("open");
  };

  const removeSession = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="header-area">
      <div onClick={HandleTheMenu} className="header-sidebar">
        <Menu />
      </div>
      <button onClick={removeSession}>remove Session</button>
      <div onClick={themeModeHandle} className="header-mode-button">
        {theme === ETheme.DARK ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default GlobalHeader;
