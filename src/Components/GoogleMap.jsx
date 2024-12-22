import { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const initMap = async () => {
      if (window.google && window.google.maps) {
        // Google Maps API ve AdvancedMarkerElement'i içe aktarın
        const { AdvancedMarkerElement } =
          await window.google.maps.importLibrary("marker");

        // Harita özelliklerini tanımlayın
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 40.76685930984557, lng: 29.905802731524748 },
          zoom: 19,
          mapId: "ChIJpdjt4l5FyxQRr4TW6AOC3RU",
        });

        // Marker ekleyin
        new window.google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: { lat: 40.76685930984557, lng: 29.905802731524748 },
          title: "Mountain View, CA",
        });
      } else {
        console.error("Google Maps API yüklenemedi!");
      }
    };

    // initMap fonksiyonunu global scope'a ekleyin
    window.initMap = initMap;

    // Google Maps API'yi yükleyen script etiketini oluşturun
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDMbv_SvnD744P3U_MANbQ072leuzWXfz8&callback=initMap&libraries=marker`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default GoogleMap;
