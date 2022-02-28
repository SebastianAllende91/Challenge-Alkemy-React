export const useTotals = (myMenu) => {
  const totalMenu = myMenu
    .reduce((total, item) => {
      return (total += item.pricePerServing * item.quantity);
    }, 0)
    .toFixed(2);

  const totalHealthScore = myMenu
    .reduce((total, item) => {
      return (total += item.healthScore * item.quantity);
    }, 0)
    .toFixed(2);

  const promReadyInMinutes = myMenu
    .reduce((total, item) => {
      return (total += item.readyInMinutes * item.quantity);
    }, 0)
    .toFixed(2);

  const quantities = myMenu
    .reduce((total, item) => {
      return (total += item.quantity);
    }, 0)
    .toFixed(2);

  const averageHealthScore = totalHealthScore / quantities;

  const averageReadyInMinutesa = promReadyInMinutes / quantities;

  return { totalMenu, averageHealthScore, averageReadyInMinutesa };
};
