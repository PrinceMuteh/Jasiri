/**
 * Cinematic dark mockup placeholder — ambient industry-tinted glow with
 * subtle screen silhouettes. Used everywhere we'd otherwise show a
 * project screenshot.
 */
export function Mockup({
  glow = "rgba(62,207,126,0.35)",
  label,
  aspect = "16/10",
}: {
  glow?: string;
  label?: string;
  aspect?: string;
}) {
  return (
    <div
      className="case-cover relative w-full overflow-hidden"
      style={{ aspectRatio: aspect, background: "#050505" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 55%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-y-0 w-1/2 opacity-30"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
          animation: "jasiri-sheen 5s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-[10px] border"
          style={{
            width: "62%",
            height: "68%",
            background: "rgba(255,255,255,0.025)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="p-4 flex flex-col gap-3 h-full">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/15" />
              <span className="w-2 h-2 rounded-full bg-white/15" />
              <span className="w-2 h-2 rounded-full bg-white/15" />
            </div>
            <div className="h-2 w-1/3 bg-white/10 rounded" />
            <div className="grid grid-cols-5 gap-2 flex-1">
              <div className="col-span-2 rounded bg-white/[0.05]" />
              <div className="col-span-3 grid grid-rows-3 gap-2">
                <div className="rounded bg-white/[0.08]" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-white/[0.04]" />
                  <div className="rounded bg-white/[0.04]" />
                </div>
                <div className="rounded bg-white/[0.04]" />
              </div>
            </div>
            <div className="h-1.5 w-2/3 bg-white/10 rounded" />
            <div className="h-1.5 w-1/2 bg-white/10 rounded" />
          </div>
        </div>
      </div>
      {label && (
        <div className="absolute bottom-3 left-4 text-[11px] tracking-wider uppercase text-white/40">
          {label}
        </div>
      )}
    </div>
  );
}
