function Module() {
  const data = [{ id: 1, nom: 'med', description: 'gg' }];

  return (
    <div className="App">
      <table striped bordered hover>
        <tbody>
          <TableRows data={data} />
        </tbody>
      </table>
    </div>
  );
}

const TableRows = ({ data }) => {
  return (
    <>
      {data.map((module, index) => {
        <tr key={index}>
          <td>{module.id}</td>
          <td>{module.nom}</td>
          <td>{module.description}</td>
        </tr>;
      })}
    </>
  );
};

export default Module;
