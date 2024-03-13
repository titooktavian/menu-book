import PropTypes from 'prop-types';
import PageTitle from '../PageTitle';

const TextWithLine = ({ label, lineWidth, customStyle }) => {
    return (
        <div className="flex items-center gap-2">
            <PageTitle customStyle={customStyle} label={label} />
            <div className={`w-${lineWidth} border-t-[1px] border-black border-solid`}></div>
        </div>
    );
};

TextWithLine.propTypes = {
    label: PropTypes.string.isRequired,
    lineWidth: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired,
}
  
export default TextWithLine;
  