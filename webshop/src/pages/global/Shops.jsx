import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Shops() {
  return (
    <div>
        <MapContainer className="map" center={[59.437, 24.754]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[59.427, 24.723]}>
                <Popup>
                    Kristiine keskus <br /> Avatud 10-22
                </Popup>
            </Marker>
            <Marker position={[59.437, 24.754]}>
                <Popup>
                    Viru keskus <br /> Avatud 9-22
                </Popup>
            </Marker>
            <Marker position={[59.422, 24.794]}>
                <Popup>
                    Ülemiste keskus <br /> Avatud 10-22
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Shops