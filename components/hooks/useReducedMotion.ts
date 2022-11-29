import React from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
export const useReducedMotion = () => {
  // Set to true as a default to prevent SSR mismatch
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
};
