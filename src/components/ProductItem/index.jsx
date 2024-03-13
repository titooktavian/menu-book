import PropTypes from 'prop-types';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';
import SimpleProductItem from './SimpleProductItem';

const ProductItem = (props) => {
    const { type } = props;

    if (type === PRODUCT_ITEM_TYPE.SIMPLE) return (<SimpleProductItem {...props} />);
};

ProductItem.propTypes = {
    type: PropTypes.number.isRequired,
}
  
export default ProductItem;
  