import { useCallback, useEffect, useRef, useState } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { getPlaceLatLng, UCR_DEFAULT_CENTER } from "../lib/mapPlaceCoords";

const API_KEY = String(import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "").trim();
const hasKey = API_KEY.length > 0;

/** v2 API: configure once, then load the `maps` library (shared promise). */
let mapsLibraryPromise = null;
function loadMapsLibraryOnce() {
  if (!mapsLibraryPromise) {
    setOptions({ key: API_KEY, v: "weekly" });
    mapsLibraryPromise = importLibrary("maps").catch((err) => {
      mapsLibraryPromise = null;
      throw err;
    });
  }
  return mapsLibraryPromise;
}

function safeClearMap(map) {
  if (!map || typeof google === "undefined" || !google.maps?.event) return;
  try {
    google.maps.event.clearInstanceListeners(map);
  } catch {
    /* ignore */
  }
}

function GoogleMapsMapPanel({ places, placesKey, onPlaceSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const placesRef = useRef(places);
  const onPlaceSelectRef = useRef(onPlaceSelect);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    placesRef.current = places;
    onPlaceSelectRef.current = onPlaceSelect;
  }, [places, onPlaceSelect]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const applyMarkers = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

    clearMarkers();
    const list = placesRef.current;

    if (list.length === 0) {
      map.setCenter(UCR_DEFAULT_CENTER);
      map.setZoom(15);
      return;
    }

    try {
      const bounds = new google.maps.LatLngBounds();
      list.forEach((p) => {
        const pos = getPlaceLatLng(p);
        bounds.extend(pos);
        const marker = new google.maps.Marker({
          position: pos,
          map,
          title: p.name,
        });
        marker.addListener("click", () => {
          onPlaceSelectRef.current?.(p.id);
        });
        markersRef.current.push(marker);
      });

      if (list.length === 1) {
        map.setCenter(getPlaceLatLng(list[0]));
        map.setZoom(16);
      } else {
        map.fitBounds(bounds, { top: 32, right: 32, bottom: 32, left: 32 });
      }
    } catch (e) {
      console.error("Google Maps markers / bounds:", e);
      setLoadError((e && e.message) || String(e));
    }
  }, [clearMarkers]);

  /** Create map once per mount when API key exists (never re-`new Map` on same div). */
  useEffect(() => {
    if (!hasKey || !containerRef.current) return undefined;

    let cancelled = false;
    let resizeObserver;

    (async () => {
      setLoadError(null);
      try {
        await loadMapsLibraryOnce();
      } catch (e) {
        console.error("Google Maps failed to load:", e);
        if (!cancelled) setLoadError((e && e.message) || String(e));
        return;
      }
      if (cancelled) return;

      const node = containerRef.current;
      if (!node?.isConnected) return;

      try {
        if (!mapRef.current) {
          mapRef.current = new google.maps.Map(node, {
            center: UCR_DEFAULT_CENTER,
            zoom: 15,
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: true,
          });
          resizeObserver = new ResizeObserver(() => {
            const m = mapRef.current;
            if (m && typeof google !== "undefined") {
              google.maps.event.trigger(m, "resize");
            }
          });
          resizeObserver.observe(node);
          google.maps.event.addListenerOnce(mapRef.current, "idle", () => {
            const m = mapRef.current;
            if (m && typeof google !== "undefined") {
              google.maps.event.trigger(m, "resize");
            }
          });
        }
      } catch (e) {
        console.error("Google Maps Map constructor:", e);
        if (!cancelled) setLoadError((e && e.message) || String(e));
        return;
      }

      if (cancelled || !containerRef.current?.isConnected) return;
      applyMarkers();
    })();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      clearMarkers();
      if (mapRef.current) {
        safeClearMap(mapRef.current);
        mapRef.current = null;
      }
    };
  }, [applyMarkers, clearMarkers]);

  /** Category / data filter changed — update pins only. */
  useEffect(() => {
    if (!hasKey || !mapRef.current) return undefined;
    setLoadError(null);
    applyMarkers();
    return undefined;
  }, [placesKey, applyMarkers]);

  if (!hasKey) {
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
            and restart{" "}
            <code className="font-mono text-[13px]">npm run dev</code> from this
            folder so Vite picks up the key.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-[#b8c6df] bg-[#e8eef8] shadow-inner">
      <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />
      {loadError && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/95 p-4">
          <div className="max-w-md rounded-xl border border-red-200 bg-red-50 p-4 text-left shadow-sm">
            <p className="font-display text-sm font-bold text-red-900">
              Map could not load
            </p>
            <p className="mt-2 font-mono text-xs text-red-800 wrap-break-word">
              {loadError}
            </p>
            <p className="mt-3 font-sans text-xs text-[#314a74]">
              Check the browser console, API key HTTP referrer (allow{" "}
              <code className="font-mono">http://localhost:5173/*</code>), and
              enable Maps JavaScript API for this key.
            </p>
          </div>
        </div>
      )}
      {places.length === 0 && !loadError && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/40 p-6 backdrop-blur-[1px]">
          <p className="pointer-events-auto max-w-sm rounded-xl border border-[#c8d6ec] bg-white px-4 py-3 text-center font-sans text-sm text-[#314a74] shadow-sm">
            No locations match your filters. Add more rows in the data file for
            this community.
          </p>
        </div>
      )}
    </div>
  );
}

export default GoogleMapsMapPanel;
