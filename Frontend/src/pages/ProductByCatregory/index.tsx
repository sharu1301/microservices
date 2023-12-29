import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";
import LeftImgComponent from "./LeftImgComponent";
import RightImgComponent from "./RightComponent";
import './index.scss';

import HeroCategory from "../../components/HeroCategory";

import productData from '../../data/products.json';
import { useParams } from "react-router-dom";


const ProductByCategory = () => {
    const { category } = useParams();
    const selectedCategory = category || "defaultCategory";
    console.log('Params', category)

    return (
        <div>
            <Header />
            {/* <PageTitle title="Products By Category " /> */}
            <HeroCategory />
            <div className="container mb-5">
                {productData.filter((data) => data.industry.map(cat => cat.toLowerCase()).includes(selectedCategory))
                    .map((data: any, i) => {

                        return (
                            (i % 2 === 0 || i === 0) ? (
                                <LeftImgComponent
                                    data={data}
                                />
                            ) :
                                (
                                    <RightImgComponent
                                        data={data}
                                    />
                                )
                        );
                    }
                    )}
            </div>
            <SubFooter />
            <Footer />

        </div>
    )
};
export default ProductByCategory;