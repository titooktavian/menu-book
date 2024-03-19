import PropTypes from 'prop-types';
import { SlLike } from 'react-icons/sl';

const SimpleProductItem = ({ id_product, name, is_recommendation: mustTry, price, description, nameStyle, mustTryStyle, priceStyle, withDescription = true }) => {
    return (
        <div key={id_product} className="flex flex-col">
            <div className="flex w-full md:w-4/5 gap-3 items-center">
                <div className={`cormorant-garamond-semibold text-2xl ${nameStyle || ''}`}>
                    {name}
                </div>
                {mustTry ? (
                    <div className={`cormorant-garamond-bold-italic grow text-xl ${mustTryStyle || ''}`}>
                        <SlLike />
                    </div>
                ) : null}
                <div className={`cormorant-garamond-bold text-2xl grow text-right ${priceStyle || ''}`}>{price}</div>
            </div>
            {withDescription && (
                <div className="cormorant-garamond-semibold-italic grow text-xl w-full md:w-4/5">{description}</div>
            )}
        </div>
    );
};

SimpleProductItem.propTypes = {
    id_product: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    mustTry: PropTypes.bool,
    description: PropTypes.string,
    nameStyle: PropTypes.string,
    mustTryStyle: PropTypes.string,
    priceStyle: PropTypes.string,
    withDescription: PropTypes.bool,
}
  
export default SimpleProductItem;
  