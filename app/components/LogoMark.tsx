type LogoMarkProps = {
  className?: string;
  monochrome?: boolean;
};

/**
 * Original mark: three overlapping rings echo the pipe cross-sections
 * visible in the client's own product photography (public/images/pipe-stack.jpeg),
 * not the composition of any reference/stock asset.
 */
export default function LogoMark({ className = "h-10 w-10", monochrome }: LogoMarkProps) {
  const ringA = monochrome ? "currentColor" : "var(--color-marigold)";
  const ringB = monochrome ? "currentColor" : "var(--color-rope-green)";
  const ringC = monochrome ? "currentColor" : "var(--color-putty)";

  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="24" r="11" stroke={ringC} strokeWidth="3.2" opacity={monochrome ? 0.35 : 1} />
      <circle cx="27" cy="15" r="11" stroke={ringA} strokeWidth="3.2" />
      <circle cx="32" cy="30" r="11" stroke={ringB} strokeWidth="3.2" />
    </svg>
  );
}
