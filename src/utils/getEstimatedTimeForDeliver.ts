export const getEstimatedTimeForDeliver = (
  distanceInKilometers: number,
  averagePreparationTimeInMinutes: number,
  averageDeliverSpeedInKilometersPerHour: number,
) => {
  const estimatedDeliverTime =
    distanceInKilometers / averageDeliverSpeedInKilometersPerHour
  const estimatedDeliverTimeInMinutes = estimatedDeliverTime * 60
  const totalEstimatedTime =
    estimatedDeliverTimeInMinutes + averagePreparationTimeInMinutes

  return Math.floor(totalEstimatedTime)
}
