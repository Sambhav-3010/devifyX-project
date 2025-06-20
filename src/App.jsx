"use client"

import { useState } from "react"
import Tooltip from "./components/Tooltip"
import Controls from "./components/Controls"

const App = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center p-4 md:p-8 space-y-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>

      <div className="text-center space-y-4 border-b border-gradient-to-r from-transparent via-gray-600/50 to-transparent pb-8 w-full max-w-4xl relative z-10">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-thin tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Tooltip Sandbox
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-2"></div>
        </div>
        <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Create and customize tooltips with precision. Test different shapes, triggers, and positioning options.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-3 gap-8 items-start relative z-10">
        <div className="xl:col-span-1 order-2 xl:order-1">
          <Controls config={config} setConfig={setConfig} />
        </div>

        <div className="xl:col-span-2 space-y-8 order-1 xl:order-2">
          {/* Live Preview Section */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-12 w-full shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Live Preview
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-4"></div>
              <p className="text-sm text-gray-400 font-light">
                {config.trigger === "hover" && "Hover over the button"}
                {config.trigger === "click" && "Click the button"}
                {config.trigger === "focus" && "Focus the button (Tab key)"}
              </p>
            </div>
            <div className="flex justify-center items-center min-h-[200px]">
              <Tooltip {...config}>
                <button className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-light tracking-widest hover:from-gray-100 hover:to-white transition-all duration-300 uppercase text-sm rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                  {config.trigger === "hover" && "Hover Me"}
                  {config.trigger === "click" && "Click Me"}
                  {config.trigger === "focus" && "Focus Me"}
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Position Testing Section */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-16 w-full shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Position Testing
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-4"></div>
              <p className="text-sm text-gray-400 font-light">
                Each button forces tooltip to appear in its designated position
              </p>
            </div>
            <div className="grid grid-cols-3 gap-16 place-items-center max-w-2xl mx-auto">
              <div></div>

              <Tooltip {...config} text="TOP POSITION" position="top" trigger="hover" forcePosition={true}>
                <button className="w-28 h-28 border-2 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  TOP
                </button>
              </Tooltip>

              <div></div>

              <Tooltip {...config} text="LEFT POSITION" position="left" trigger="hover" forcePosition={true}>
                <button className="w-28 h-28 border-2 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  LEFT
                </button>
              </Tooltip>

              <div className="w-24 h-24 border-2 border-gray-500/50 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              </div>

              <Tooltip {...config} text="RIGHT POSITION" position="right" trigger="hover" forcePosition={true}>
                <button className="w-28 h-28 border-2 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  RIGHT
                </button>
              </Tooltip>

              <div></div>

              <Tooltip {...config} text="BOTTOM POSITION" position="bottom" trigger="hover" forcePosition={true}>
                <button className="w-28 h-28 border-2 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 font-light text-sm uppercase tracking-wide flex items-center justify-center rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  BOTTOM
                </button>
              </Tooltip>

              <div></div>
            </div>
          </div>

          {/* Text Length Testing Section */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-light mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Text Length Testing
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-4"></div>
              <p className="text-sm text-gray-400 font-light">Test with different tooltip lengths</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Short",
                "This is a medium tooltip",
                "This is a very long tooltip text to test wrapping and positioning",
              ].map((t, i) => (
                <Tooltip key={i} {...config} text={t}>
                  <button className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600/50 hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 font-light uppercase text-xs tracking-wide rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm">
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

export default App
