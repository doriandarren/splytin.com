import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("mapid", {
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: true,
      zoomControl: true,
    }).setView([41.3851, 2.1734], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([41.39100, 2.14488]).addTo(map).bindPopup("Estamos aqui! :)").openPopup();

    return () => map.remove();
  }, []);

  return (
    <div id="mapid" className="h-[450px] w-full rounded-lg shadow-lg z-10"></div>
  );
}
