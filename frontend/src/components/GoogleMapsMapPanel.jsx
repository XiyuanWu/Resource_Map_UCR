/**
 * Google Maps 占位：后续在此接入 Maps JavaScript API。
 * 设置 VITE_GOOGLE_MAPS_API_KEY 后仍显示说明，直到嵌入逻辑接上。
 */
function GoogleMapsMapPanel({ children }) {
  const hasKey = Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#b8c6df] bg-[#d8e4f4] shadow-inner">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <p className="font-display text-lg font-bold tracking-tight text-[#0f2f69]">
          Map preview
        </p>
        <p className="max-w-lg font-sans text-sm leading-relaxed text-[#314a74]">
          Add{" "}
          <code className="rounded-md border border-[#c8d6ec] bg-white/90 px-1.5 py-0.5 font-mono text-[13px] text-[#0f2f69]">
            VITE_GOOGLE_MAPS_API_KEY
          </code>{" "}
          to a{" "}
          <code className="rounded-md border border-[#c8d6ec] bg-white/90 px-1.5 py-0.5 font-mono text-[13px]">
            .env
          </code>{" "}
          file in{" "}
          <code className="rounded-md border border-[#c8d6ec] bg-white/90 px-1.5 py-0.5 font-mono text-[13px]">
            frontend/
          </code>{" "}
          and restart the dev server. Places and directions links below still
          work.
        </p>
        {hasKey && (
          <p className="font-sans text-xs font-medium text-[#2a5a3a]">
            API key detected — map embed wiring can go here next.
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export default GoogleMapsMapPanel;
