const d = document, n = navigator;

export default function getGeolocalization(id) 
{
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = position => 
    {
        let coords = position.coords;
        console.log(position);
        $id.innerHTML = `<p>Tu posición actual es</p>
        <ul>
            <li><b>Longitud: </b>${coords.longitude}</li>
            <li><b>Latitud: </b>${coords.latitude}</li>
            <li><b>Precisión: </b>${coords.accuracy} metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}" 
        target="_blank" rel="noopener">Ver mapa</a>`
    };

    const error = (err) => 
    {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options); 
}