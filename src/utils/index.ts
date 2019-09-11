export const BREAKPOINTS = {
  XS: { min: 0, max: 576 },
  SM: { min: 577, max: 768 },
  MD: { min: 769, max: 992 },
  LG: { min: 993, max: 1200 },
  XL: { min: 1201, max: 10000 }
};

export const BREAKPOINT_LABELS = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
  XL: "XL"
};

export const getScreenBreakpoints = () => {
  const width = window.innerWidth;
  // const height = window.innerHeight;
  let breakpoint = "";

  if (width >= BREAKPOINTS.XS.min && width <= BREAKPOINTS.XS.max)
    breakpoint = BREAKPOINT_LABELS.XS;
  else if (width >= BREAKPOINTS.SM.min && width <= BREAKPOINTS.SM.max)
    breakpoint = BREAKPOINT_LABELS.SM;
  else if (width >= BREAKPOINTS.MD.min && width <= BREAKPOINTS.MD.max)
    breakpoint = BREAKPOINT_LABELS.MD;
  else breakpoint = BREAKPOINT_LABELS.LG;

  return {
    breakpoint
  };
};
