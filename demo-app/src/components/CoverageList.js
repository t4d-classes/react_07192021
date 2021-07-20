import PropTypes from 'prop-types';

export const CoverageList = ({ children, coverages }) => {
  return (
    <>
      <header>
        {children}
      </header>
      <ul>
        {coverages.map(c =>
          <li key={c.id} className="info critical">
            {c.name}
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

// Eric's short version
// export const CoverageList = ({ children, coverages }) => <>
//   <header>
//     {children}
//   </header>
//   <ul>
//     {coverages.map(c =>
//       <li key={c.id} className="info critical">
//         {c.name}
//       </li>)}
//   </ul>
// </>;
