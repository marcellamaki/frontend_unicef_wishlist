import haversine from 'haversine'

export function distanceCalculator(latitude, longitude) {

  const end = {
  latitude: parseInt(latitude, 10),
  longitude: parseInt(longitude, 10)
  }

  const start = {
    latitude: parseInt(JSON.parse(localStorage.getItem('location')).lat, 10),
    longitude: parseInt(JSON.parse(localStorage.getItem('location')).lng, 10)
  }

  return(haversine(start, end, {unit: 'km'}))
}


export default distanceCalculator
