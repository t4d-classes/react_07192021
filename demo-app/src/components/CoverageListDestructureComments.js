import PropTypes from 'prop-types';

const CoverageList = ({ children, coverages }) => {

  // const children = props.children;
  // const { children } = props;

  // const coverages = props.coverages; // exactly 0% of JS developers would write this code

  // object destructuring
  // const { coverages } = props; // exactly 100% of JS developers would write this code

  // const { children, coverages } = props;

  return (
    <>
      <header>
        {children}
      </header>
      <ul>
        {coverages.map(coverage =>
          <li key={coverage.id} className="info critical">
            {coverage.name}
          </li>)}
      </ul>
    </>
  );

};

CoverageList.defaultProps = {
  coverages: []
};

CoverageList.propTypes = {
  coverages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
  children: PropTypes.node.isRequired,
};
