"use client"

const Controls = ({ config, setConfig }) => {
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
    <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm text-white border border-gray-600/50 rounded-xl p-8 w-full space-y-8 sticky top-8 shadow-2xl">
      <div className="border-b border-gradient-to-r from-transparent via-gray-600/50 to-transparent pb-6">
        <h2 className="text-3xl font-thin mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Configuration
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-2"></div>
        <p className="text-sm text-gray-400 font-light">Customize tooltip appearance and behavior</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">Tooltip Text</label>
          <input
            type="text"
            value={config.text}
            onChange={(e) => update("text", e.target.value)}
            className="w-full border border-gray-600/50 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner"
            placeholder="Enter tooltip text..."
          />
          <div className="mt-3">
            <p className="text-xs text-gray-500 font-light mb-2">Quick presets:</p>
            <div className="flex flex-wrap gap-2">
              {textPresets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => update("text", preset)}
                  className="px-3 py-2 text-xs bg-gradient-to-r from-gray-700/80 to-gray-800/80 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-200 font-light border border-gray-600/50 rounded-lg backdrop-blur-sm hover:border-purple-400/50 transform hover:scale-105"
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
            <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">
              Trigger Method
            </label>
            <select
              value={config.trigger}
              onChange={(e) => update("trigger", e.target.value)}
              className="w-full border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner text-white"
              style={{ colorScheme: "dark" }}
            >
              <option value="hover" className="bg-gray-800 text-white">
                Hover
              </option>
              <option value="click" className="bg-gray-800 text-white">
                Click
              </option>
              <option value="focus" className="bg-gray-800 text-white">
                Focus
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">Position</label>
            <select
              value={config.position}
              onChange={(e) => update("position", e.target.value)}
              className="w-full border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner text-white"
              style={{ colorScheme: "dark" }}
            >
              <option value="top" className="bg-gray-800 text-white">
                Top
              </option>
              <option value="bottom" className="bg-gray-800 text-white">
                Bottom
              </option>
              <option value="left" className="bg-gray-800 text-white">
                Left
              </option>
              <option value="right" className="bg-gray-800 text-white">
                Right
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">Shape Style</label>
          <select
            value={config.shape}
            onChange={(e) => update("shape", e.target.value)}
            className="w-full border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner text-white"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-gray-800 text-white">
              Rectangle
            </option>
            <option value="rounded" className="bg-gray-800 text-white">
              Rounded Corners
            </option>
            <option value="bubble" className="bg-gray-800 text-white">
              Speech Bubble
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">Width</label>
          <select
            value={config.width}
            onChange={(e) => update("width", e.target.value)}
            className="w-full border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner text-white"
            style={{ colorScheme: "dark" }}
          >
            {widthOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">Font Size</label>
          <select
            value={config.fontSize}
            onChange={(e) => update("fontSize", e.target.value)}
            className="w-full border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 font-light bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner text-white"
            style={{ colorScheme: "dark" }}
          >
            {fontSizeOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium uppercase tracking-wide mb-4 text-gray-300">Color Presets</label>
          <div className="grid grid-cols-2 gap-3">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  update("bgColor", preset.bg)
                  update("textColor", preset.text)
                }}
                className={`px-4 py-3 text-xs font-light transition-all duration-200 border rounded-lg hover:scale-105 border-gray-600/50 backdrop-blur-sm shadow-lg hover:shadow-xl ${preset.bg} ${preset.text} hover:border-purple-400/50`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">
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
                  className="w-14 h-14 border-2 border-gray-600/50 rounded-lg cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
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
                className="flex-1 border border-gray-600/50 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner transition-all duration-200"
                placeholder="#000000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium uppercase tracking-wide mb-3 text-gray-300">
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
                  className="w-14 h-14 border-2 border-gray-600/50 rounded-lg cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
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
                className="flex-1 border border-gray-600/50 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-inner transition-all duration-200"
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
