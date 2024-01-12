import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CareerListing = () => {
    return (
        <>
            <Header />
            <PageTitle title=" Get Your Dream job with Hinds." />
            <div className="filter-section">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-3 col-6 m-auto">
                            <div className="filters d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39 39" fill="none">
                                    <path d="M17.2326 29.28C14.8497 29.28 12.5203 28.5734 10.5391 27.2495C8.55778 25.9257 7.01356 24.044 6.10168 21.8425C5.18979 19.6411 4.9512 17.2186 5.41607 14.8815C5.88095 12.5444 7.02841 10.3977 8.71335 8.71274C10.3983 7.0278 12.545 5.88034 14.8821 5.41546C17.2192 4.95059 19.6417 5.18918 21.8431 6.10106C24.0446 7.01295 25.9263 8.55717 27.2501 10.5385C28.574 12.5197 29.2806 14.8491 29.2806 17.232C29.2806 18.8141 28.9689 20.3808 28.3635 21.8425C27.758 23.3043 26.8706 24.6324 25.7518 25.7512C24.633 26.8699 23.3049 27.7574 21.8431 28.3629C20.3814 28.9683 18.8147 29.28 17.2326 29.28ZM17.2326 7.59997C15.3339 7.59997 13.4778 8.163 11.8991 9.21786C10.3204 10.2727 9.08993 11.772 8.36333 13.5262C7.63673 15.2804 7.44662 17.2106 7.81704 19.0728C8.18745 20.9351 9.10177 22.6456 10.4444 23.9882C11.7869 25.3308 13.4975 26.2451 15.3597 26.6155C17.2219 26.9859 19.1522 26.7958 20.9063 26.0692C22.6605 25.3426 24.1598 24.1122 25.2147 22.5334C26.2695 20.9547 26.8326 19.0987 26.8326 17.2C26.8326 14.6539 25.8211 12.2121 24.0208 10.4117C22.2205 8.61139 19.7787 7.59997 17.2326 7.59997Z" fill="#666666" />
                                    <path d="M31.9997 33.2C31.8421 33.2007 31.6859 33.17 31.5402 33.1095C31.3946 33.0491 31.2625 32.9602 31.1517 32.848L24.5437 26.24C24.3318 26.0125 24.2164 25.7116 24.2219 25.4008C24.2274 25.0899 24.3533 24.7933 24.5732 24.5734C24.793 24.3535 25.0896 24.2276 25.4005 24.2221C25.7114 24.2166 26.0123 24.332 26.2397 24.544L32.8477 31.152C33.0725 31.377 33.1987 31.682 33.1987 32C33.1987 32.318 33.0725 32.623 32.8477 32.848C32.737 32.9602 32.6049 33.0491 32.4593 33.1095C32.3136 33.17 32.1574 33.2007 31.9997 33.2Z" fill="#666666" />
                                </svg>
                                <h4>Job title or keyword</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 m-auto">
                            <div className="filters d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 28 24" fill="none">
                                    <path d="M23.3157 3.68584H20.8124V2.11306C20.814 1.83613 20.7608 1.56163 20.6559 1.30533C20.5511 1.04903 20.3965 0.815996 20.2013 0.619622C20.006 0.423248 19.7739 0.267411 19.5182 0.161074C19.2625 0.0547361 18.9883 -4.52101e-06 18.7114 2.80053e-10H9.10655C8.54932 2.80053e-10 8.01491 0.22136 7.62089 0.615384C7.22686 1.00941 7.0055 1.54382 7.0055 2.10105V3.67384H4.50225C3.30867 3.67543 2.16442 4.15028 1.32043 4.99427C0.476441 5.83826 0.00158827 6.9825 0 8.17609V19.4977C0.00158827 20.6913 0.476441 21.8356 1.32043 22.6796C2.16442 23.5236 3.30867 23.9984 4.50225 24H23.3157C24.5092 23.9984 25.6535 23.5236 26.4975 22.6796C27.3415 21.8356 27.8163 20.6913 27.8179 19.4977V8.18809C27.8163 6.99451 27.3415 5.85027 26.4975 5.00628C25.6535 4.16228 24.5092 3.68743 23.3157 3.68584ZM8.8064 2.11306C8.80561 2.07285 8.81274 2.03288 8.82739 1.99543C8.84205 1.95798 8.86394 1.92379 8.89181 1.8948C8.91968 1.86581 8.95299 1.8426 8.98984 1.82649C9.02669 1.81038 9.06635 1.80168 9.10655 1.8009H18.7114C18.7905 1.80244 18.8659 1.83455 18.9219 1.89051C18.9779 1.94647 19.01 2.02193 19.0115 2.10105V3.67384H8.8064V2.11306ZM1.8009 8.18809C1.8009 7.47165 2.08551 6.78455 2.59211 6.27795C3.09871 5.77135 3.78581 5.48674 4.50225 5.48674H23.3157C24.0321 5.48674 24.7192 5.77135 25.2258 6.27795C25.7324 6.78455 26.017 7.47165 26.017 8.18809V9.0045C26.0154 10.0389 25.6038 11.0304 24.8724 11.7618C24.141 12.4933 23.1494 12.9049 22.1151 12.9065H16.9105V11.8559C16.9105 11.2987 16.6891 10.7643 16.2951 10.3703C15.901 9.97624 15.3666 9.75488 14.8094 9.75488H13.0085C12.4513 9.75488 11.9169 9.97624 11.5228 10.3703C11.1288 10.7643 10.9075 11.2987 10.9075 11.8559V12.9305H5.70285C4.66848 12.9289 3.67692 12.5173 2.94551 11.7859C2.21409 11.0544 1.80249 10.0629 1.8009 9.02851V8.18809ZM15.1096 15.4577C15.108 15.5369 15.0759 15.6123 15.0199 15.6683C14.964 15.7242 14.8885 15.7563 14.8094 15.7579H13.0085C12.9294 15.7563 12.8539 15.7242 12.798 15.6683C12.742 15.6123 12.7099 15.5369 12.7084 15.4577V11.8559C12.7099 11.7768 12.742 11.7013 12.798 11.6454C12.8539 11.5894 12.9294 11.5573 13.0085 11.5558H14.8094C14.8885 11.5573 14.964 11.5894 15.0199 11.6454C15.0759 11.7013 15.108 11.7768 15.1096 11.8559V15.4577ZM23.3157 22.2111H4.50225C3.78581 22.2111 3.09871 21.9265 2.59211 21.4199C2.08551 20.9133 1.8009 20.2262 1.8009 19.5098V13.2066C2.85504 14.2045 4.25129 14.7609 5.70285 14.7614H10.9075V15.4877C10.9075 16.045 11.1288 16.5794 11.5228 16.9734C11.9169 17.3674 12.4513 17.5888 13.0085 17.5888H14.8094C15.3666 17.5888 15.901 17.3674 16.2951 16.9734C16.6891 16.5794 16.9105 16.045 16.9105 15.4877V14.7374H22.1151C23.5633 14.7433 24.9591 14.1957 26.017 13.2066V19.4977C26.0186 19.8535 25.9499 20.2061 25.8148 20.5352C25.6798 20.8643 25.4811 21.1635 25.2301 21.4157C24.9791 21.6678 24.6807 21.8678 24.3522 22.0043C24.0237 22.1408 23.6714 22.2111 23.3157 22.2111Z" fill="#666666" />
                                </svg>
                                <h4>Work experience</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 text-center">
                            <div className="filters d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 25 28" fill="none">
                                    <path d="M3.77291 3.57351C6.061 1.28543 9.1643 0 12.4001 0C15.636 0 18.7393 1.28543 21.0274 3.57351C23.3154 5.8616 24.6009 8.9649 24.6009 12.2007C24.6009 15.4366 23.3154 18.5399 21.0274 20.828L19.3641 22.473C18.1381 23.6752 16.5477 25.2222 14.5916 27.1138C14.0037 27.6822 13.2179 28 12.4001 28C11.5824 28 10.7966 27.6822 10.2087 27.1138L5.31704 22.3553C4.70051 21.7514 4.18767 21.2427 3.77291 20.828C2.63992 19.6951 1.74117 18.3501 1.128 16.8698C0.514818 15.3895 0.199219 13.803 0.199219 12.2007C0.199219 10.5985 0.514818 9.01195 1.128 7.53169C1.74117 6.05142 2.63992 4.70643 3.77291 3.57351ZM19.5407 5.05879C18.6028 4.12099 17.4894 3.3771 16.264 2.8696C15.0386 2.3621 13.7253 2.10093 12.3989 2.101C11.0726 2.10106 9.75931 2.36236 8.53398 2.86998C7.30865 3.3776 6.19529 4.1216 5.25749 5.05949C4.31969 5.99739 3.5758 7.11081 3.0683 8.33619C2.5608 9.56158 2.29963 10.8749 2.2997 12.2012C2.29976 13.5276 2.56106 14.8409 3.06868 16.0662C3.5763 17.2915 4.3203 18.4049 5.25819 19.3427L7.34319 21.3997C8.48937 22.522 9.93262 23.9232 11.6701 25.6033C11.866 25.7925 12.1278 25.8982 12.4001 25.8982C12.6725 25.8982 12.9342 25.7925 13.1302 25.6033L17.8873 20.9793C18.5458 20.3333 19.0965 19.7883 19.5407 19.3427C21.4344 17.4489 22.4983 14.8803 22.4983 12.2021C22.4983 9.52394 21.4344 6.95542 19.5407 5.0616V5.05879ZM12.4001 8.38105C12.9525 8.38105 13.4995 8.48985 14.0099 8.70125C14.5202 8.91264 14.9839 9.22248 15.3745 9.61309C15.7651 10.0037 16.075 10.4674 16.2864 10.9777C16.4978 11.4881 16.6066 12.0351 16.6066 12.5875C16.6066 13.1399 16.4978 13.6869 16.2864 14.1972C16.075 14.7075 15.7651 15.1713 15.3745 15.5619C14.9839 15.9525 14.5202 16.2623 14.0099 16.4737C13.4995 16.6851 12.9525 16.7939 12.4001 16.7939C11.298 16.7738 10.2478 16.3218 9.4755 15.5353C8.70319 14.7488 8.27049 13.6905 8.27049 12.5882C8.27049 11.4859 8.70319 10.4276 9.4755 9.64105C10.2478 8.85452 11.298 8.40257 12.4001 8.38245V8.38105ZM12.4001 10.4829C11.842 10.4829 11.3066 10.7046 10.912 11.0993C10.5173 11.494 10.2955 12.0293 10.2955 12.5875C10.2955 13.1457 10.5173 13.681 10.912 14.0757C11.3066 14.4704 11.842 14.6921 12.4001 14.6921C12.9487 14.6779 13.4701 14.4501 13.8531 14.057C14.2361 13.664 14.4505 13.1369 14.4505 12.5882C14.4505 12.0394 14.2361 11.5123 13.8531 11.1193C13.4701 10.7263 12.9487 10.4984 12.4001 10.4843V10.4829Z" fill="#666666" />
                                </svg>
                                <h4>Contract Type</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 text-center">
                            <button>Show result</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tablewrapper">
                <div className="container">
                    <div className="row w-100 ml-0">
                        <div className="col-md-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col d-flex">
                                            Date 
                                            <div className="arrow">
                                                <div className="up"><i className="fa-solid fa-angle-up"></i></div>
                                                <div className="down"><i className="fa-solid fa-angle-down"></i></div>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            Title
                                            <div className="arrow">
                                                <div className="up"><i className="fa-solid fa-angle-up"></i></div>
                                                <div className="down"><i className="fa-solid fa-angle-down"></i></div>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            Job Function
                                            <div className="arrow">
                                                <div className="up"><i className="fa-solid fa-angle-up"></i></div>
                                                <div className="down"><i className="fa-solid fa-angle-down"></i></div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>02-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>02-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>03-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>10-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>15-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>16-12-2023 </td>
                                        <td>Lorem ipsum dolor sit</td>
                                        <td>Lorem ipsum dolor sit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-section">
                <div className="container">
                    <div className="row w-100 ml-0">
                        <div className="col-md-4">
                            <div className="listing-card">
                                <div className="listing-image">
                                    <img src="../../images/pages/career/card1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Career</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.
                                        Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.</p>
                                    <a href="#">Find More<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="listing-card">
                                <div className="listing-image">
                                    <img src="../../images/pages/career/card2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="text">
                                    <h4>About</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.
                                        Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.</p>
                                    <a href="#">Find More<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="listing-card">
                                <div className="listing-image">
                                    <img src="../../images/pages/career/card3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Application Process</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.
                                        Lorem ipsum dolor sit amet consectetur.
                                        malesuada pretium tristique imperdiet.</p>
                                    <a href="#">Find More<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 mt-4 ml-0">
                        <div className="col-md-12">
                            <button>Everything in one place. Be amazed!</button>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
            <Footer />
        </>
    )
}

export default CareerListing;