import PropTypes from 'prop-types';

const TextWithIcon = ({ label, icon, customStyle }) => {
    return (
        <div className="flex gap-1 items-center">
            {icon}
            <h1 className={`cormorant-garamond-semibold ${customStyle}`}>{label}</h1>
        </div>
    );
};

TextWithIcon.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    customStyle: PropTypes.string.isRequired,
}
  
export default TextWithIcon;
  