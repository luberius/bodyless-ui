"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // classNameflex gap-4 Check for dark mode preference at the OS level
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Check if the user has a saved preference in localStorage
    const localStoragePreference = localStorage.getItem("darkMode");
    const hasStoredPreference = typeof localStoragePreference === "string";

    // Determine the initial mode
    const initialMode = hasStoredPreference
      ? localStoragePreference === "true"
      : prefersDarkMode;

    setDarkMode(initialMode);
    document.body.classList.toggle("dark", initialMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.body.classList.toggle("dark", newMode);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      type="secondary"
      iconOnly
      icon={darkMode ? Moon : Sun}
    />
  );
};

export default DarkModeToggle;
