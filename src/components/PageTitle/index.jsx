import PropTypes from 'prop-types';

const PageTitle = ({ label, customStyle }) => {
    return (
        <h1 className={`cormorant-garamond-bold text-5xl font-bold leading-tight ${customStyle}`}>{label}</h1>
    );
};

PageTitle.propTypes = {
    label: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired,
}
  
export default PageTitle;
