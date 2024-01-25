
import './index.scss';

export default function HeroCategory(props: { pagetitle: string }){

    return(
        <>
        <div className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Products</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                Product
                            </li>
                            <li>
                                <a href="/automobile">{(props.pagetitle)}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}