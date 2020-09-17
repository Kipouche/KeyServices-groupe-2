import ConvertTime from '../lib/convertTime';

const TodosTable = ({ todos }) => {
  return (
    <div className="column">
      <h1 className="title">Historiques de tâches</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Description</th>
            <th>Adresse</th>
            <th>Date</th>
            <th>Date de début</th>
            <th>Date de fin</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Description</th>
            <th>Adresse</th>
            <th>Date</th>
            <th>Date de début</th>
            <th>Date de fin</th>
          </tr>
        </tfoot>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td>{todo.address}</td>
                <td>{ConvertTime.timeToGMT2(todo.created_at).toISOString().split('.')[0].replace('T', ' ')}</td>
                <td>{ConvertTime.timeToGMT2(todo.startDate).toISOString().split('.')[0].replace('T', ' ')}</td>
                <td>{ConvertTime.timeToGMT2(todo.endDate).toISOString().split('.')[0].replace('T', ' ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
