"use client"

import React, { useState, useRef, useCallback, useLayoutEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

const Tooltip = ({
  children,
  text,
  position = "top",
  bgColor = "bg-white",
  textColor = "text-black",
  shape = "rounded",
  trigger = "hover",
  width = "w-48",
  fontSize = "text-sm",
  customBgColor = "#ffffff",
  customTextColor = "#000000",
  forcePosition = false,
}) => {
  const { isDark } = useTheme()
  const [visible, setVisible] = useState(false)
  const [actualPosition, setActualPosition] = useState(position)
  const tooltipRef = useRef(null)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)

  // Update actual position when position prop changes or when forcePosition is true
  useLayoutEffect(() => {
    if (forcePosition) {
      setActualPosition(position)
    } else {
      setActualPosition(position)
    }
  }, [position, forcePosition])

  const showTooltip = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setVisible(true)
  }, [])

  const hideTooltip = useCallback(() => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setVisible(false), 100)
  }, [])

  const handleMouseEnter = () => trigger === "hover" && showTooltip()
  const handleMouseLeave = () => trigger === "hover" && hideTooltip()
  const handleClick = (e) => {
    if (trigger === "click") {
      e.preventDefault()
      e.stopPropagation()
      setVisible((prev) => !prev)
    }
  }
  const handleFocus = () => trigger === "focus" && showTooltip()
  const handleBlur = () => trigger === "focus" && hideTooltip()
  const handleKeyDown = (e) => e.key === "Escape" && setVisible(false)

  React.useEffect(() => {
    if (trigger !== "click") return
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setVisible(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [trigger])

  const getShapeClasses = () => {
    if (shape === "bubble") return "rounded-full px-5 py-4"
    if (shape === "rounded") return "rounded-xl"
    return "rounded-lg"
  }

  const shouldUseCustomColors = () => {
    return bgColor === "custom" || textColor === "custom"
  }

  const getArrowStyles = () => {
    if (shape === "bubble") return {}
    const size = 8

    let color = customBgColor
    if (!shouldUseCustomColors()) {
      if (bgColor.includes("white")) color = "#ffffff"
      else if (bgColor.includes("black")) color = "#000000"
      else if (bgColor.includes("gray-800")) color = "#1f2937"
      else if (bgColor.includes("gray-600")) color = "#4b5563"
      else if (bgColor.includes("gray-100")) color = "#f3f4f6"
      else if (bgColor.includes("gray-50")) color = "#f9fafb"
      else color = "#ffffff"
    }

    return {
      top: {
        bottom: `-${size}px`,
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderTop: `${size}px solid ${color}`,
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
      },
      bottom: {
        top: `-${size}px`,
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        filter: "drop-shadow(0 -2px 4px rgba(0,0,0,0.1))",
      },
      left: {
        right: `-${size}px`,
        top: "50%",
        transform: "translateY(-50%)",
        borderTop: `${size}px solid transparent`,
        borderBottom: `${size}px solid transparent`,
        borderLeft: `${size}px solid ${color}`,
        filter: "drop-shadow(2px 0 4px rgba(0,0,0,0.1))",
      },
      right: {
        left: `-${size}px`,
        top: "50%",
        transform: "translateY(-50%)",
        borderTop: `${size}px solid transparent`,
        borderBottom: `${size}px solid transparent`,
        borderRight: `${size}px solid ${color}`,
        filter: "drop-shadow(-2px 0 4px rgba(0,0,0,0.1))",
      },
    }[actualPosition]
  }

  const getRelativePosition = (pos) => {
    const gap = 12
    return {
      top: { bottom: `calc(100% + ${gap}px)`, left: "50%", transform: "translateX(-50%)" },
      bottom: { top: `calc(100% + ${gap}px)`, left: "50%", transform: "translateX(-50%)" },
      left: { right: `calc(100% + ${gap}px)`, top: "50%", transform: "translateY(-50%)" },
      right: { left: `calc(100% + ${gap}px)`, top: "50%", transform: "translateY(-50%)" },
    }[pos]
  }

  const getTooltipStyles = () => {
    if (shouldUseCustomColors()) {
      return {
        background: `linear-gradient(135deg, ${customBgColor}f0, ${customBgColor})`,
        color: customTextColor,
        backdropFilter: "blur(12px)",
        border: `1px solid ${customBgColor}40`,
      }
    }

    // Enhanced gradient backgrounds for preset colors with theme awareness
    const gradientMap = isDark
      ? {
          "bg-white": "linear-gradient(135deg, #ffffff, #f8fafc)",
          "bg-black": "linear-gradient(135deg, #000000, #1f2937)",
          "bg-gray-800": "linear-gradient(135deg, #1f2937, #111827)",
          "bg-gray-600": "linear-gradient(135deg, #4b5563, #374151)",
          "bg-gray-100": "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
          "bg-gray-50": "linear-gradient(135deg, #f9fafb, #f3f4f6)",
        }
      : {
          "bg-white": "linear-gradient(135deg, #ffffff, #f8fafc)",
          "bg-black": "linear-gradient(135deg, #000000, #1f2937)",
          "bg-gray-800": "linear-gradient(135deg, #1f2937, #111827)",
          "bg-gray-600": "linear-gradient(135deg, #4b5563, #374151)",
          "bg-gray-100": "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
          "bg-gray-50": "linear-gradient(135deg, #f9fafb, #f3f4f6)",
        }

    return {
      background: gradientMap[bgColor] || gradientMap["bg-white"],
      backdropFilter: "blur(12px)",
      border: isDark
        ? bgColor.includes("white") || bgColor.includes("gray-")
          ? "1px solid rgba(0,0,0,0.1)"
          : "1px solid rgba(255,255,255,0.1)"
        : bgColor.includes("black") || bgColor.includes("gray-8")
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.1)",
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      tabIndex={trigger === "focus" ? 0 : -1}
      aria-describedby={visible ? "tooltip" : undefined}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={`absolute z-50 px-4 py-3 font-light shadow-2xl transition-all duration-300 ease-out transform ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } ${getShapeClasses()} ${
            shouldUseCustomColors() ? "" : `${textColor}`
          } ${width} ${fontSize} max-w-[90vw] break-words`}
          style={{
            ...getTooltipStyles(),
            ...getRelativePosition(actualPosition),
            boxShadow: isDark
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          }}
          aria-live="polite"
        >
          {text}
          {shape !== "bubble" && <div className="absolute pointer-events-none" style={getArrowStyles()} />}
        </div>
      )}
    </div>
  )
}

export default Tooltip
