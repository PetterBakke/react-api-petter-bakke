// import { checkPropTypes } from "prop-types";
import { PropTypes } from "prop-types";


export default function Heading({title}) {
  return <h1>{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};