import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const markers = [
  { id: 1, name: "phuket", position: { lat: 7.878978, lng: 98.398392 } },
  { id: 2, name: "bangkok", position: { lat: 13.7563, lng: 100.5018 } },
  { id: 3, name: "chiang mai", position: { lat: 18.7061, lng: 98.9817 } },
];

const Map = ({ id }) => {
  const marker = markers.find((marker) => marker.id === id);
  const center = marker ? marker.position : markers[0].position;

  return (
    <div className="mb-10">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />

          <Polyline
            path={markers.map((marker) => marker.position)}
            options={{ strokeColor: "#FF0000 " }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
