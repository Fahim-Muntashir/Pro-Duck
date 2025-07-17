import { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { top: 0, left: 0 };
    }

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; //widht of dropdoen

    // calculate the position of the dropdown
    let left = rect.left + window.scrollX; // center the dropdown under the button
    const top = rect.bottom + window.scrollY; // position below the button

    // check if the dropdown go of the viewport

    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      //   if still off-screen, algin to the right edge of viewport with some padding

      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // ensure the dropdown is not too far left
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
