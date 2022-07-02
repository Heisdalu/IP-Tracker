import React from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import L from "leaflet";
import LocationIcon from "../../assets/icon-location.svg";

const makerIcon = new L.Icon({
  iconUrl: LocationIcon,
});

const ShowMap = (props) => {
  const lat = props.data?.location?.lat;
  const lng = props.data?.location?.lng;

  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={makerIcon}></Marker>
    </MapContainer>
  );
};

export default ShowMap;
