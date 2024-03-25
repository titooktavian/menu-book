import BreakfastProduct from '../../pages/BreakfastProduct';
import CoffeeAndTea from '../../pages/CoffeeAndTea';
import DrinkProduct from '../../pages/DrinkProduct';
import FeaturedProduct from '../../pages/FeaturedProduct';
import Gallery from '../../pages/Gallery';
import HandmadeProduct from '../../pages/HandmadeProduct';
import Header from '../../pages/Header';
import SaladProduct from '../../pages/SaladProduct';
import Footer from '../Footer';
import MenuBookProvider from '../../contexts/MenuBookContext';
import Loading from '../Loading';

const Layout = () => {
    return (
        <MenuBookProvider parentProps={{}}>
            <div>
                <Loading />
                <Header />
                <FeaturedProduct />
                <BreakfastProduct />
                <HandmadeProduct />
                <SaladProduct />
                <DrinkProduct />
                <CoffeeAndTea />
                <Gallery />
                <Footer />
            </div>
        </MenuBookProvider>
    );
};


export default Layout;
