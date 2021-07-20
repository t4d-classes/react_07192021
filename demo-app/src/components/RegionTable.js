import PropTypes from 'prop-types';

export const RegionTable = ({ regions }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Abbr</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {regions.map(region => <tr key={region.id}>
          <td>{region.name}</td>
          <td>{region.abbr}</td>
          <td>{region.region}</td>
        </tr>)}
      </tbody>
    </table>
  );
};

RegionTable.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abbr: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
  })).isRequired,
};

RegionTable.defaultProps = {
  regions: [],
};