"use client"

import { useTheme } from "../contexts/ThemeContext"

const Controls = ({ config, setConfig }) => {
  const { isDark } = useTheme()
  const update = (key, value) => setConfig((prev) => ({ ...prev, [key]: value }))

  const widthOptions = [
    { value: "w-32", label: "128px" },
    { value: "w-40", label: "160px" },
    { value: "w-48", label: "192px" },
    { value: "w-56", label: "224px" },
    { value: "w-64", label: "256px" },
    { value: "w-72", label: "288px" },
    { value: "w-80", label: "320px" },
    { value: "w-96", label: "384px" },
  ]

  const fontSizeOptions = [
    { value: "text-xs", label: "12px" },
    { value: "text-sm", label: "14px" },
    { value: "text-base", label: "16px" },
    { value: "text-lg", label: "18px" },
    { value: "text-xl", label: "20px" },
  ]

  const colorPresets = [
    { bg: "bg-black", text: "text-white", label: "Black & White" },
    { bg: "bg-white", text: "text-black", label: "White & Black" },
    { bg: "bg-gray-800", text: "text-white", label: "Dark Gray" },
    { bg: "bg-gray-600", text: "text-white", label: "Medium Gray" },
    { bg: "bg-gray-100", text: "text-gray-900", label: "Light Gray" },
    { bg: "bg-gray-50", text: "text-gray-800", label: "Very Light" },
  ]

  const textPresets = [
    "Hi!",
    "This is a tooltip",
    "This is a medium length tooltip text",
    "This is a very long tooltip text that demonstrates how the positioning system handles longer content and ensures proper alignment",
  ]

  return (
    <div
      className={`backdrop-blur-sm rounded-xl p-8 w-full space-y-8 sticky top-8 shadow-2xl border transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 text-white border-gray-600/50"
          : "bg-gradient-to-br from-white/90 to-gray-50/90 text-gray-900 border-gray-200/50"
      }`}
    >
      <div
        className={`pb-6 border-b transition-colors duration-300 ${
          isDark ? "border-gray-600/50" : "border-gray-300/50"
        }`}
      >
        <h2
          className={`text-3xl font-thin mb-3 bg-clip-text text-transparent transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-white via-gray-200 to-gray-400"
              : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
          }`}
        >
          Configuration
        </h2>
        <div
          className={`h-px mb-2 transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
          }`}
        ></div>
        <p
          className={`text-sm font-light transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Customize tooltip appearance and behavior
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tooltip Text
          </label>
          <input
            type="text"
            value={config.text}
            onChange={(e) => update("text", e.target.value)}
            className={`w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
              isDark
                ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
            }`}
            placeholder="Enter tooltip text..."
          />
          <div className="mt-3">
            <p
              className={`text-xs font-light mb-2 transition-colors duration-300 ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Quick presets:
            </p>
            <div className="flex flex-wrap gap-2">
              {textPresets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => update("text", preset)}
                  className={`px-3 py-2 text-xs font-light border rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-200 ${
                    isDark
                      ? "bg-gradient-to-r from-gray-700/80 to-gray-800/80 hover:from-purple-600/20 hover:to-pink-600/20 border-gray-600/50 hover:border-purple-400/50"
                      : "bg-gradient-to-r from-gray-100/80 to-gray-200/80 hover:from-purple-100/40 hover:to-pink-100/40 border-gray-300/50 hover:border-purple-400/50"
                  }`}
                  title={preset}
                >
                  {preset.length > 15 ? `${preset.substring(0, 15)}...` : preset}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Trigger Method
            </label>
            <select
              value={config.trigger}
              onChange={(e) => update("trigger", e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
                isDark
                  ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                  : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
              }`}
              style={{ colorScheme: isDark ? "dark" : "light" }}
            >
              <option value="hover" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Hover
              </option>
              <option value="click" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Click
              </option>
              <option value="focus" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Focus
              </option>
            </select>
          </div>

          <div>
            <label
              className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Position
            </label>
            <select
              value={config.position}
              onChange={(e) => update("position", e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
                isDark
                  ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                  : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
              }`}
              style={{ colorScheme: isDark ? "dark" : "light" }}
            >
              <option value="top" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Top
              </option>
              <option value="bottom" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Bottom
              </option>
              <option value="left" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Left
              </option>
              <option value="right" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
                Right
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Shape Style
          </label>
          <select
            value={config.shape}
            onChange={(e) => update("shape", e.target.value)}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
              isDark
                ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
            }`}
            style={{ colorScheme: isDark ? "dark" : "light" }}
          >
            <option value="" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
              Rectangle
            </option>
            <option value="rounded" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
              Rounded Corners
            </option>
            <option value="bubble" className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
              Speech Bubble
            </option>
          </select>
        </div>

        <div>
          <label
            className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Width
          </label>
          <select
            value={config.width}
            onChange={(e) => update("width", e.target.value)}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
              isDark
                ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
            }`}
            style={{ colorScheme: isDark ? "dark" : "light" }}
          >
            {widthOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Font Size
          </label>
          <select
            value={config.fontSize}
            onChange={(e) => update("fontSize", e.target.value)}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light backdrop-blur-sm shadow-inner ${
              isDark
                ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
            }`}
            style={{ colorScheme: isDark ? "dark" : "light" }}
          >
            {fontSizeOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className={`block text-sm font-medium uppercase tracking-wide mb-4 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Color Presets
          </label>
          <div className="grid grid-cols-2 gap-3">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  update("bgColor", preset.bg)
                  update("textColor", preset.text)
                }}
                className={`px-4 py-3 text-xs font-light transition-all duration-200 border rounded-lg hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl ${preset.bg} ${preset.text} ${
                  isDark ? "hover:border-purple-400/50" : "hover:border-purple-500/50"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Custom Background
            </label>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="color"
                  value={config.customBgColor}
                  onChange={(e) => {
                    update("customBgColor", e.target.value)
                    update("bgColor", "custom")
                  }}
                  className={`w-14 h-14 border-2 rounded-lg cursor-pointer backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 ${
                    isDark
                      ? "border-gray-600/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                      : "border-gray-300/50 bg-gradient-to-br from-gray-50/50 to-white/50"
                  }`}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
              </div>
              <input
                type="text"
                value={config.customBgColor}
                onChange={(e) => {
                  update("customBgColor", e.target.value)
                  update("bgColor", "custom")
                }}
                className={`flex-1 border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/20 backdrop-blur-sm shadow-inner transition-all duration-200 ${
                  isDark
                    ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                    : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
                }`}
                placeholder="#000000"
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium uppercase tracking-wide mb-3 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Custom Text Color
            </label>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="color"
                  value={config.customTextColor}
                  onChange={(e) => {
                    update("customTextColor", e.target.value)
                    update("textColor", "custom")
                  }}
                  className={`w-14 h-14 border-2 rounded-lg cursor-pointer backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 ${
                    isDark
                      ? "border-gray-600/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                      : "border-gray-300/50 bg-gradient-to-br from-gray-50/50 to-white/50"
                  }`}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
              </div>
              <input
                type="text"
                value={config.customTextColor}
                onChange={(e) => {
                  update("customTextColor", e.target.value)
                  update("textColor", "custom")
                }}
                className={`flex-1 border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/20 backdrop-blur-sm shadow-inner transition-all duration-200 ${
                  isDark
                    ? "border-gray-600/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white focus:border-purple-400"
                    : "border-gray-300/50 bg-gradient-to-r from-gray-50/50 to-white/50 text-gray-900 focus:border-purple-500"
                }`}
                placeholder="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controls
