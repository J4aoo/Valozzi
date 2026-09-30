// Spring presets translated from Apple's damping/response model.
// bounce 0 = critically damped (default UI); bounce > 0 reserved for
// momentum-driven interactions (press, flick, hover lift).
export const springs = {
  default: { type: "spring", bounce: 0, duration: 0.6 } as const,
  snappy: { type: "spring", bounce: 0, duration: 0.35 } as const,
  press: { type: "spring", bounce: 0, duration: 0.15 } as const,
  momentum: { type: "spring", bounce: 0.25, duration: 0.4 } as const,
};
