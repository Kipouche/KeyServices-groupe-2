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
            let startDate = new Date(todo.startDate);
            startDate.setHours(startDate.getHours() +2);
            let endDate = new Date(todo.endDate);
            endDate.setHours(endDate.getHours() + 2);
            let created_at = new Date(todo.created_at)
            created_at.setHours(created_at.getHours() +2);

            return (
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td>{todo.address}</td>
                <td>{created_at.toISOString().split('.')[0].replace('T', ' ')}</td>
                <td>{startDate.toISOString().split('.')[0].replace('T', ' ')}</td>
                <td>{endDate.toISOString().split('.')[0].replace('T', ' ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
