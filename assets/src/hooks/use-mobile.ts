import { useEffect, useState } from "react"

interface UseMobileOptions {
  breakpoint?: number
}

export function useIsMobile({ breakpoint = 768 }: UseMobileOptions = {}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return { isMobile }
}