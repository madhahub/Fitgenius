import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Initial check
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    checkMobile()

    // Add event listener
    mql.addEventListener("change", checkMobile)
    
    // Cleanup
    return () => mql.removeEventListener("change", checkMobile)
  }, [])

  return !!isMobile
}
