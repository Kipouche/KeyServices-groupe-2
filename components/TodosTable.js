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
                <td>{todo.created_at.split('.')[0].replace('T', ' ')}</td>
                <td>{todo.startDate.split('.')[0].replace('T', ' ')}</td>
                <td>{todo.endDate.split('.')[0].replace('T', ' ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
