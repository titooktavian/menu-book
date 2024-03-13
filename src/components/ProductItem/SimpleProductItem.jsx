import PropTypes from 'prop-types';

const SimpleProductItem = ({ id, name, mustTry, price, description, nameStyle, mustTryStyle, priceStyle }) => {
    return (
        <div key={id} className="flex flex-col">
            <div className="flex w-full md:w-4/5 items-end gap-12">
                <div className={`cormorant-garamond-semibold grow text-2xl ${nameStyle || ''}`}>
                    {name}
                    {mustTry && (
                        <span className={`cormorant-garamond-bold-italic grow text-xl ${mustTryStyle || ''} pl-3`}>-Must Try</span>
                    )}
                </div>
                <div className={`cormorant-garamond-bold text-2xl grow text-right ${priceStyle || ''}`}>{price}</div>
            </div>
            {description !== '' && (
                <div className="cormorant-garamond-semibold-italic grow text-xl w-full md:w-4/5">{description}</div>
            )}
        </div>
    );
};

SimpleProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    mustTry: PropTypes.bool,
    description: PropTypes.string,
    nameStyle: PropTypes.string,
    mustTryStyle: PropTypes.string,
    priceStyle: PropTypes.string,
}
  
export default SimpleProductItem;
  