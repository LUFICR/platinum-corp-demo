import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { HelpCircle } from "lucide-react";

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  "";

const hasValidKey = Boolean(API_KEY) && API_KEY !== "YOUR_API_KEY";

const CENTER_COORDS = { lat: 19.1218, lng: 72.8355 };

const LANDMARKS = [
  {
    id: "site",
    name: "Platinum Crest (Site)",
    lat: 19.1228,
    lng: 72.8365,
    category: "Site",
    color: "#D4AF37", // Gold
    glyph: "★",
    description: "G+16 storeys elite residential tower. Intelligent home automation & panoramic Juhu coastline vistas.",
    positionText: "Juhu Corridor, Andheri West"
  },
  {
    id: "hospital",
    name: "Kokilaben Dhirubhai Ambani Hospital",
    lat: 19.1312,
    lng: 72.8260,
    category: "Healthcare",
    color: "#EF4444", // Red
    glyph: "H",
    description: "Western India's premier multi-specialty healthcare network, reachable in 7 minutes.",
    positionText: "Four Bungalows, Andheri W"
  },
  {
    id: "beach",
    name: "Juhu Beach & Circle",
    lat: 19.1054,
    lng: 72.8266,
    category: "Leisure",
    color: "#3B82F6", // Blue
    glyph: "⚓",
    description: "Elite recreational coastal zone, high-street shopping, and prime hotels (8-10 mins).",
    positionText: "Juhu Tara Road"
  },
  {
    id: "station",
    name: "Andheri Station & S.V. Road",
    lat: 19.1197,
    lng: 72.8464,
    category: "Transit",
    color: "#10B981", // Emerald
    glyph: "T",
    description: "Critical suburban rail hub and arterial connectivity gateway (6-8 mins).",
    positionText: "Andheri West Station"
  },
  {
    id: "college",
    name: "Mithibai & NM College Complex",
    lat: 19.1026,
    lng: 72.8378,
    category: "Education",
    color: "#8B5CF6", // Purple
    glyph: "E",
    description: "SVKM’s premier educational ecosystem and cultural hotspot (8 mins).",
    positionText: "Vile Parle West"
  }
];

export default function InteractiveMap() {
  const [selectedMockId, setSelectedMockId] = useState<string>("site");
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");
  const [openId, setOpenId] = useState<string | null>("site");

  const selectedMock = LANDMARKS.find((l) => l.id === selectedMockId) || LANDMARKS[0];
  const activeLandmark = openId ? LANDMARKS.find((l) => l.id === openId) : null;

  return (
    <div className="w-full h-full flex flex-col rounded-md overflow-hidden border border-brand-gold/20 shadow-2xl bg-brand-navy text-white relative min-h-[460px]">
      {hasValidKey ? (
        <APIProvider apiKey={API_KEY} version="weekly">
          <div className="relative flex-1 w-full h-full min-h-[400px]">
            {/* Map Type Custom Controls */}
            <div className="absolute top-3 left-3 z-20 flex gap-1.5 bg-brand-navy/90 backdrop-blur-md p-1 rounded-sm border border-brand-gold/20 shadow-md">
              <button
                onClick={() => setMapType("roadmap")}
                className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-sm transition-all cursor-pointer ${
                  mapType === "roadmap" ? "bg-brand-gold text-brand-navy" : "text-gray-300 hover:text-white"
                }`}
              >
                Map
              </button>
              <button
                onClick={() => setMapType("satellite")}
                className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-sm transition-all cursor-pointer ${
                  mapType === "satellite" ? "bg-brand-gold text-brand-navy" : "text-gray-300 hover:text-white"
                }`}
              >
                Satellite
              </button>
            </div>

            <Map
              defaultCenter={CENTER_COORDS}
              defaultZoom={13}
              mapTypeId={mapType}
              mapId="PLATINUM_CREST_MAP"
              internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
              style={{ width: "100%", height: "100%" }}
              gestureHandling="cooperative"
              disableDefaultUI={false}
            >
              {LANDMARKS.map((landmark) => (
                <AdvancedMarker
                  key={landmark.id}
                  position={{ lat: landmark.lat, lng: landmark.lng }}
                  onClick={() => setOpenId(landmark.id)}
                  title={landmark.name}
                >
                  <Pin
                    background={landmark.color}
                    borderColor="#FFFFFF"
                    glyphColor="#FFFFFF"
                    glyph={landmark.glyph}
                    scale={landmark.id === "site" ? 1.3 : 1.0}
                  />
                </AdvancedMarker>
              ))}

              {activeLandmark && (
                <InfoWindow
                  position={{ lat: activeLandmark.lat, lng: activeLandmark.lng }}
                  onCloseClick={() => setOpenId(null)}
                  headerDisabled={true}
                >
                  <div className="p-3 max-w-[220px] text-brand-navy">
                    <span
                      className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm inline-block mb-1 text-white"
                      style={{ backgroundColor: activeLandmark.color }}
                    >
                      {activeLandmark.category}
                    </span>
                    <h5 className="font-serif font-bold text-sm text-brand-navy leading-tight mb-1">
                      {activeLandmark.name}
                    </h5>
                    <p className="text-[10px] text-gray-500 font-light leading-relaxed mb-2">
                      {activeLandmark.description}
                    </p>
                    <div className="text-[9px] text-brand-gold-dark font-mono font-medium border-t border-gray-100 pt-1">
                      📍 {activeLandmark.positionText}
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      ) : (
        /* Vector-based Beautiful Interactive Mockup Map of Upper Juhu & Coastal Strip */
        <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden min-h-[400px]">
          {/* Aesthetic Blueprint Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Interactive Map Layout Simulation */}
          <div className="absolute inset-0 z-0 bg-brand-navy">
            {/* Arabian Sea Blue Belt on left */}
            <div className="absolute left-0 top-0 bottom-0 w-[24%] bg-sky-950/40 border-r border-sky-800/20 flex items-center justify-center">
              <div className="font-serif italic text-[11px] tracking-widest text-sky-700 transform -rotate-90 uppercase pointer-events-none">
                Arabian Sea
              </div>
            </div>

            {/* Juhu Coastal Road Line */}
            <div className="absolute left-[24%] top-0 bottom-0 w-1.5 bg-gray-800/40" />

            {/* S.V. Road (Horizontal-ish arterial link) */}
            <div className="absolute left-0 right-0 top-[60%] h-1 bg-gray-800/40" />
            <div className="absolute left-[70%] top-0 bottom-0 w-1 bg-gray-800/40" />

            {/* Juhu Lane / Corridor Crossroad */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-brand-gold/10" />
            <div className="absolute left-[24%] right-0 top-[40%] h-1 bg-brand-gold/10" />

            {/* Animated Pin Highlights */}
            {LANDMARKS.map((landmark) => {
              // Map realistic geographic coordinates onto mock screen coordinate percentages
              let left = "50%";
              let top = "40%";

              if (landmark.id === "site") {
                left = "52%";
                top = "38%";
              } else if (landmark.id === "hospital") {
                left = "40%";
                top = "15%";
              } else if (landmark.id === "beach") {
                left = "28%";
                top = "75%";
              } else if (landmark.id === "station") {
                left = "85%";
                top = "44%";
              } else if (landmark.id === "college") {
                left = "56%";
                top = "80%";
              }

              const isSelected = selectedMockId === landmark.id;

              return (
                <button
                  key={landmark.id}
                  onClick={() => {
                    setSelectedMockId(landmark.id);
                    setOpenId(landmark.id);
                  }}
                  style={{ left, top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  <div className="relative flex items-center justify-center">
                    {landmark.id === "site" && (
                      <div className="absolute w-12 h-12 rounded-full bg-brand-gold/20 animate-ping" />
                    )}
                    {isSelected && (
                      <div
                        className="absolute w-10 h-10 rounded-full animate-pulse opacity-40"
                        style={{ backgroundColor: landmark.color }}
                      />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                        isSelected
                          ? "border-white scale-125 ring-2 ring-brand-gold/40"
                          : "border-transparent group-hover:border-white/50"
                      }`}
                      style={{ backgroundColor: landmark.color }}
                    >
                      <span className="text-[10px] font-bold text-white leading-none">
                        {landmark.glyph}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Setup Alert Layer at top */}
          <div className="absolute top-3 left-3 right-3 z-20 bg-brand-navy/95 backdrop-blur-md px-3.5 py-2 rounded-sm border border-brand-gold/20 flex items-center justify-between shadow-lg text-left gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <div>
                <h6 className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                  Interactive Live Map Interface
                </h6>
                <p className="text-[9px] text-gray-300">
                  Provide your Google Maps API Key in Secrets to enable live terrain and navigation.
                </p>
              </div>
            </div>
            <div className="group relative">
              <button className="p-1 text-gray-400 hover:text-brand-gold transition-colors cursor-pointer">
                <HelpCircle className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-6 w-56 bg-brand-navy border border-brand-gold/25 p-3 rounded-md text-[10px] leading-relaxed text-gray-300 hidden group-hover:block z-50 shadow-2xl">
                <p className="font-semibold text-brand-gold mb-1 uppercase tracking-wider">Map Activation Guide:</p>
                <ol className="list-decimal pl-3 space-y-1">
                  <li>Get your key at GCP Console (see chat instructions)</li>
                  <li>Click Gear icon ⚙️ (Top-Right)</li>
                  <li>Add Secret: <code className="text-white bg-white/10 px-1 rounded">GOOGLE_MAPS_PLATFORM_KEY</code></li>
                </ol>
              </div>
            </div>
          </div>

          {/* Live Detail overlay at the bottom */}
          <div className="absolute bottom-3 left-3 right-3 z-10 bg-brand-navy/95 backdrop-blur-md p-4 rounded-sm border border-brand-gold/15 shadow-xl text-left">
            <div className="flex justify-between items-start mb-1 gap-2">
              <div>
                <span
                  className="text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm text-white"
                  style={{ backgroundColor: selectedMock.color }}
                >
                  {selectedMock.category}
                </span>
                <h4 className="font-serif font-semibold text-sm text-white mt-1">
                  {selectedMock.name}
                </h4>
              </div>
              <span className="text-[10px] text-brand-gold font-mono tracking-wider">
                📍 {selectedMock.positionText}
              </span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed font-light">
              {selectedMock.description}
            </p>
            <div className="mt-3 pt-2.5 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-400">
              <span>Interactive Map Sandbox</span>
              <span className="text-[9px] text-brand-gold italic">Click other plotted markers above to explore</span>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Quick Proximity Details Header */}
      <div className="bg-brand-navy-light px-5 py-3 border-t border-brand-gold/15 flex items-center justify-between text-left relative z-10">
        <div>
          <span className="text-[9px] text-brand-gold font-mono tracking-wider block">
            CENTRALIZED HUB
          </span>
          <span className="text-xs text-white/90 font-medium">
            Juhu Corridor • Andheri West • Mumbai 400058
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
          <span className="text-[9px] text-brand-gold font-mono uppercase tracking-widest">
            Connected Prime
          </span>
        </div>
      </div>
    </div>
  );
}
