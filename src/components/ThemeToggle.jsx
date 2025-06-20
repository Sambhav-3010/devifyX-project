"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`
          relative flex items-center justify-between w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out
          ${
            isDark
              ? "bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600"
              : "bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300"
          }
          hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm
        `}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <div
          className={`
            absolute w-6 h-6 rounded-full transition-all duration-300 ease-in-out transform flex items-center justify-center
            ${
              isDark
                ? "translate-x-0 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                : "translate-x-8 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
            }
          `}
        >
          {isDark ? <Moon className="w-3 h-3 text-white" /> : <Sun className="w-3 h-3 text-white" />}
        </div>

        <div className="flex items-center justify-between w-full px-1">
          <Moon
            className={`w-3 h-3 transition-opacity duration-300 ${isDark ? "opacity-100 text-white" : "opacity-40 text-gray-500"}`}
          />
          <Sun
            className={`w-3 h-3 transition-opacity duration-300 ${!isDark ? "opacity-100 text-gray-700" : "opacity-40 text-gray-400"}`}
          />
        </div>
      </button>
    </div>
  )
}

export default ThemeToggle