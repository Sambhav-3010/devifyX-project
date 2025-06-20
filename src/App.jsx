"use client"

import { useState } from "react"
import Tooltip from "./components/Tooltip"
import Controls from "./components/Controls"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"

const AppContent = () => {
  const { isDark } = useTheme()
  const [config, setConfig] = useState({
    text: "This is a customizable tooltip",
    trigger: "hover",
    position: "top",
    shape: "rounded",
    bgColor: "bg-white",
    textColor: "text-black",
    width: "w-48",
    fontSize: "text-sm",
    customBgColor: "#ffffff",
    customTextColor: "#000000",
  })

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-4 md:p-8 space-y-8 relative overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isDark
            ? "bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"
            : "bg-gradient-to-r from-purple-100/20 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-r from-purple-600/5 to-pink-600/5"
            : "bg-gradient-to-r from-purple-200/30 to-pink-200/30"
        }`}
      ></div>

      <div
        className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-500 ${
          isDark ? "bg-gradient-to-r from-blue-600/5 to-cyan-600/5" : "bg-gradient-to-r from-blue-200/30 to-cyan-200/30"
        }`}
      ></div>

      <ThemeToggle />

      <div
        className={`text-center space-y-4 pb-8 w-full max-w-4xl relative z-10 border-b transition-colors duration-300 ${
          isDark ? "border-gray-600/50" : "border-gray-300/50"
        }`}
      >
        <div className="inline-block">
          <h1
            className={`text-5xl md:text-6xl font-thin tracking-tight bg-clip-text text-transparent transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-white via-gray-200 to-gray-400"
                : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
            }`}
          >
            Tooltip Sandbox
          </h1>
          <div
            className={`h-px mt-2 transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
            }`}
          ></div>
        </div>
        <p
          className={`text-lg font-light max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Create and customize tooltips with precision. Test different shapes, triggers, and positioning options.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-3 gap-8 items-start relative z-10">
        <div className="xl:col-span-1 order-2 xl:order-1">
          <Controls config={config} setConfig={setConfig} />
        </div>

        <div className="xl:col-span-2 space-y-8 order-1 xl:order-2">
          {/* Live Preview Section */}
          <div
            className={`backdrop-blur-sm rounded-xl p-12 w-full shadow-2xl border transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50"
                : "bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50"
            }`}
          >
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-light mb-3 bg-clip-text text-transparent transition-all duration-300 ${
                  isDark ? "bg-gradient-to-r from-white to-gray-300" : "bg-gradient-to-r from-gray-900 to-gray-600"
                }`}
              >
                Live Preview
              </h3>
              <div
                className={`h-px mb-4 transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    : "bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"
                }`}
              ></div>
              <p
                className={`text-sm font-light transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {config.trigger === "hover" && "Hover over the button"}
                {config.trigger === "click" && "Click the button"}
                {config.trigger === "focus" && "Focus the button (Tab key)"}
              </p>
            </div>
            <div className="flex justify-center items-center min-h-[200px]">
              <Tooltip {...config}>
                <button
                  className={`px-8 py-4 font-light tracking-widest transition-all duration-300 uppercase text-sm rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark
                      ? "bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white"
                      : "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700"
                  }`}
                >
                  {config.trigger === "hover" && "Hover Me"}
                  {config.trigger === "click" && "Click Me"}
                  {config.trigger === "focus" && "Focus Me"}
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Position Testing Section */}
          <div
            className={`backdrop-blur-sm rounded-xl p-16 w-full shadow-2xl border transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50"
                : "bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50"
            }`}
          >
            <div className="text-center mb-12">
              <h3
                className={`text-2xl font-light mb-3 bg-clip-text text-transparent transition-all duration-300 ${
                  isDark ? "bg-gradient-to-r from-white to-gray-300" : "bg-gradient-to-r from-gray-900 to-gray-600"
                }`}
              >
                Position Testing
              </h3>
              <div
                className={`h-px mb-4 transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    : "bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"
                }`}
              ></div>
              <p
                className={`text-sm font-light transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Each button forces tooltip to appear in its designated position
              </p>
            </div>
            <div className="grid grid-cols-3 gap-16 place-items-center max-w-2xl mx-auto">
              <div></div>

              <Tooltip {...config} text="TOP POSITION" position="top" trigger="hover" forcePosition={true}>
                <button
                  className={`w-28 h-28 border-2 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDark
                      ? "border-purple-400/50 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black"
                      : "border-purple-500/50 bg-gradient-to-br from-gray-100/50 to-gray-200/50 hover:from-gray-900 hover:to-gray-800 hover:text-white"
                  }`}
                >
                  TOP
                </button>
              </Tooltip>

              <div></div>

              <Tooltip {...config} text="LEFT POSITION" position="left" trigger="hover" forcePosition={true}>
                <button
                  className={`w-28 h-28 border-2 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDark
                      ? "border-purple-400/50 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black"
                      : "border-purple-500/50 bg-gradient-to-br from-gray-100/50 to-gray-200/50 hover:from-gray-900 hover:to-gray-800 hover:text-white"
                  }`}
                >
                  LEFT
                </button>
              </Tooltip>

              <div
                className={`w-24 h-24 border-2 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                  isDark
                    ? "border-gray-500/50 bg-gradient-to-br from-gray-700/30 to-gray-800/30"
                    : "border-gray-400/50 bg-gradient-to-br from-gray-100/30 to-gray-200/30"
                }`}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              </div>

              <Tooltip {...config} text="RIGHT POSITION" position="right" trigger="hover" forcePosition={true}>
                <button
                  className={`w-28 h-28 border-2 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDark
                      ? "border-purple-400/50 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black"
                      : "border-purple-500/50 bg-gradient-to-br from-gray-100/50 to-gray-200/50 hover:from-gray-900 hover:to-gray-800 hover:text-white"
                  }`}
                >
                  RIGHT
                </button>
              </Tooltip>

              <div></div>

              <Tooltip {...config} text="BOTTOM POSITION" position="bottom" trigger="hover" forcePosition={true}>
                <button
                  className={`w-28 h-28 border-2 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDark
                      ? "border-purple-400/50 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black"
                      : "border-purple-500/50 bg-gradient-to-br from-gray-100/50 to-gray-200/50 hover:from-gray-900 hover:to-gray-800 hover:text-white"
                  }`}
                >
                  BOTTOM
                </button>
              </Tooltip>

              <div></div>
            </div>
          </div>

          {/* Text Length Testing Section */}
          <div
            className={`backdrop-blur-sm rounded-xl p-8 shadow-2xl border transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50"
                : "bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50"
            }`}
          >
            <div className="text-center mb-6">
              <h3
                className={`text-2xl font-light mb-3 bg-clip-text text-transparent transition-all duration-300 ${
                  isDark ? "bg-gradient-to-r from-white to-gray-300" : "bg-gradient-to-r from-gray-900 to-gray-600"
                }`}
              >
                Text Length Testing
              </h3>
              <div
                className={`h-px mb-4 transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    : "bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"
                }`}
              ></div>
              <p
                className={`text-sm font-light transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Test with different tooltip lengths
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Short",
                "This is a medium tooltip",
                "This is a very long tooltip text to test wrapping and positioning",
              ].map((t, i) => (
                <Tooltip key={i} {...config} text={t}>
                  <button
                    className={`px-6 py-3 border font-light uppercase text-xs tracking-wide rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm transition-all duration-300 ${
                      isDark
                        ? "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600/50 hover:from-white hover:to-gray-100 hover:text-black"
                        : "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300/50 hover:from-gray-900 hover:to-gray-800 hover:text-white"
                    }`}
                  >
                    {t.length < 10 ? "Short" : t.length < 40 ? "Medium" : "Long"}
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App