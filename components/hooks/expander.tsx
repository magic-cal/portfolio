import { useState } from "react";

export const useExpander = <T,>(items: T[], minNumberOfEntries: number = 3) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemsToDisplay = isExpanded
    ? items
    : items.slice(0, minNumberOfEntries);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return { itemsToDisplay, toggleExpanded, isExpanded };
};
