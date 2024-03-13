import PropTypes from 'prop-types';

const PageSubtitle = ({ label, customStyle }) => {
    return (
        <div className={`cormorant-garamond-semibold text-3xl ${customStyle}`}>
            {label}
        </div>
    );
};

PageSubtitle.propTypes = {
    label: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired,
}
  
export default PageSubtitle;
