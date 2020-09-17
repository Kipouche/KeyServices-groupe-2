import ConvertTime from '../lib/convertTime';

const TodosTable = ({ rents }) => {
  const calculatePrice = (startDate, endDate, price) => {
    const differenceTime =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    const differenceInDays = differenceTime / (1000 * 3600 * 24);
    return ((differenceInDays * price) / 100) * 80;
  };
  return (
    <div className="column">
      <h1 className="title">Locations</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Numéro de Location</th>
            <th>Adresse</th>
            <th>Date d'ajout</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Revenus</th>
          </tr>
        </thead>
        <tbody>
          {rents.map((rent) => {
            return (
              <tr key={rent.id}>
                <td>{rent.id}</td>
                <td>{rent.address}</td>
                <td>
                  {ConvertTime.timeToGMT2(rent.date)
                    .toISOString()
                    .split('.')[0]
                    .replace('T', ' ')}
                </td>
                <td>
                  {
                    ConvertTime.timeToGMT2(rent.startDate)
                      .toISOString()
                      .split('T')[0]
                  }
                </td>
                <td>
                  {
                    ConvertTime.timeToGMT2(rent.endDate)
                      .toISOString()
                      .split('T')[0]
                  }
                </td>
                <td>
                  {calculatePrice(rent.startDate, rent.endDate, rent.price)} €
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
