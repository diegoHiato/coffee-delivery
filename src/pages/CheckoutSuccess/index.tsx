import { getDistanceBetweenCoordinates } from '../../utils/getDistanceBetweenCoordinates'

export const CheckoutSuccess = () => {
  const distanceInKilometers = getDistanceBetweenCoordinates(
    { latitude: -23.49696, longitude: -46.54993 },
    { latitude: -23.47154, longitude: -46.56356 },
  )

  function showDistanceBetweenShopAndClient() {
    if (distanceInKilometers < 1) {
      const distanceInMeters = String(
        Number(Number(distanceInKilometers) * 1000).toFixed(0),
      )
      return `${distanceInMeters} m.`
    }

    return `${distanceInKilometers.toFixed(1)} km.`
  }

  const testing = showDistanceBetweenShopAndClient()

  console.log(testing)

  return (
    <div>
      <h1>Dale!</h1>
    </div>
  )
}
