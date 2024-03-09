import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Auxiliaries = () => {
    const navigate=useNavigate()
    return (
        <>
            <Header />
            <PageTitle title="Auxiliaries" subtitle="Auxiliaries" />
            <div className="auxwrapper">
                <div className="container">
                    <div className="row w-100 ml-0 align-items-center">
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/hopper.png" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/hopper.png" alt="hopper" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="aux-content">
                                <h2>Hopper Dryer</h2>
                                <p className="mb-1">DUST COLLECTOR</p>
                                <p className="mb-1">Additional dust collector installed to avoid plastic particles splashing and provide a clean environment.</p>
                                <h6>Features:</h6>
                                <ul>
                                    <li>Optimized design and nice figure</li>
                                    <li>Hot wind extending device of high efficiency and distributing evenly, so that high drying efficiency is achieved.</li>
                                    <li>Special bend design ensure hot wind coming in a smooth way. Convenient for routine maintenance.</li>
                                    <li>The hopper and the internal parts are made of stainless steel.</li>
                                    <li>As the hopper body is separable from the bottom part. It is quite convenient of Hopper clearing and change to next material drying easily.</li>
                                    <li>Overheat protection device to prevent operator’s injury or mechanical breakdown</li>
                                    <li>Main power source switch for safety purpose</li>
                                    <li>Magnetic base and normal base with transparent window optional.</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-7">
                            <div className="aux-content pl-0 pr-5">
                                <h2>High Speed Granulator</h2>
                                <p>Plastic recycling is simple when you choose a quality grinder by Hinds Machine.</p>
                                <h6>Features:</h6>
                                <ul>
                                    <li>Integral body sturdy and durable, keep excellent performance after using long time.</li>
                                    <li>Heavy-duty bearing & dust protection device the sound-proof boar can prevent vibration & noise effectively.</li>
                                    <li>The overloading protector on the motor and interlock protection device on the power source, double protection for the safety of human being and motor.</li>
                                    <li>Paddle-blades rotor adopting shear principle, made of high chromium steel.</li>
                                    <li>The gap between blades is adjustable. The blades can be dismounted repeatedly for the purpose of re-sharpening.</li>
                                    <li>Separable design, the bunker main body mesh frame are dismounted easily convenient for bunker cleaning.</li>
                                    <li>With vibration-resistant feel reduce the noise of vibration.</li>
                                </ul>
                                <div className="resp-aux-image">
                                    <img src="../../images/pages/auxiliaries/speed-granulator.png" alt="hopper" />
                                </div>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/speed-granulator.png" alt="hopper" />
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/hopper-loader.png" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/hopper-loader.png" alt="hopper" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="aux-content">
                                <h2>Hopper Loader</h2>
                                <p>Hinds Vacuum Hepper Loader has a unique and effective vacuum suction, which is essential to upgrade modernisation features of the piastic industry.</p>
                                <h6>Features:</h6>
                                <ul>
                                    <li>The main engine and the material hopper are designed separately, and thus it is safe, easy and convenient to be operated.</li>
                                    <li>The whole operation is controlled by Micro Trip computer.</li>
                                    <li>Equipped with an independent filter, which is very convenient to clean up dust.</li>
                                    <li>The equipped muffler reduces the noise in operation.</li>
                                    <li>Stainless steel material hopper is light in weight, durable and very convenient for cleaning the device</li>
                                    <li>The control box, being designed separately, is easy to be well maintained</li>
                                    <li>Auto-buzzer will give alarm while lacking material.</li>
                                    <li>Auto-protetive device protects motor against over leading.</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-7">
                            <div className="aux-content pl-0 pr-5">
                                <h2>Medium Speed Granulator – Online</h2>

                                <h6>Features:</h6>
                                <ul>
                                    <li>Medium speed granulator online is suitable for recycling sprues from injection moulding machine and extrusion machine. It‘s easy to operate. It helps to reduce the nosie and possibilities of cutter the wearing. It also adopts required safety protection devices.</li>
                                    <li>Small Size to save space.</li>
                                    <li>Optimized design of blade saddle</li>
                                    <li>No tool required for maintenance and cleaning up</li>
                                    <li>Less dust, less noise and less energy consumption</li>
                                    <li>High-grade safety</li>
                                </ul>
                                <div className="resp-aux-image">
                                    <img src="../../images/pages/auxiliaries/speed-granulator-online.png" alt="hopper" />
                                </div>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/speed-granulator-online.png" alt="hopper" />
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/screw-barrel.jpg" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/screw-barrel.jpg" alt="hopper" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="aux-content">
                                <h2>Screw Barrel</h2>

                                <h6>Specifications:</h6>
                                <ul>
                                    <li>The screw barrel size we makeScrew diameter: e15mm-e250mmScrew length: 300mm-8000mmBerral out diameter: e40mm-e400mm</li>
                                    <li>The screw barrel technical indexesScrew surface roughness: Ra0.4Screw straightness: 0.015mm</li>
                                    <li>Nitride screw barrel:Nitride layer depth: 0.7mmNitride layer hardness: HRC63-68</li>
                                    <li>Bimetallic screw barrel :C-Class Bimetallic material: NPT1 (Fe, Co, Ni, W, Cr, A1)Bimetallic layer: 2mmBimetallic layer hardness: HRC58-63B-Class Bimetallic material: NPT2 (Fe, Co, Ni. W, Cr, A1)All hard material import from SwedenBimetallic layer hardness: HRC60</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 ml-0 mt-5 align-items-center resp">
                        <div className="col-md-7">
                            <div className="aux-content pl-0 pr-5">
                                <h2>Automatic MTC</h2>
                                <p>The Automatic mould temperature controller works on heat exchanging principle using water or oil to precisely control the mould temperature, this reduces the production time and thus produces quality products.</p>
                                <h6>Features:</h6>
                                <ul>
                                    <li><b>Hot Medium Liquid: </b>Water or oil convertibly; Either water or oil can be used as a hot medium liquid according to the needs of mould forming temperature. Its high selectivity is certain to bring in high economic efficiency.</li>
                                    <li><b>Vertical Pump: </b>The flow of vertical pump can be always kept steady and its service life keeps long.</li>
                                    <li><b>Stainless Medium Tank: </b>This interior tank will not get rust for long term, which is sure to prevent from any blockade 0f Pipes and keep long-term Service of pump</li>
                                    <li>Automatic Alarming Device.</li>
                                    <li>High-precision automatic temperature control.</li>
                                    <li>Minimize product wastage</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/automatic-mtc.png" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/automatic-mtc.png" alt="hopper" />
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/industrial-chiller.png" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/industrial-chiller.png" alt="hopper" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="aux-content">
                                <h2>Industrial Chiller</h2>
                                <p>The water chiller is to provide a cooling process in plastic moulding, to improve quality of moulded products and shorten period of injection moulding cycles. Hence maximizes productivity of plastic moulding manufacturing.</p>
                                <h6>Features:</h6>
                                <ul>
                                    <li>Famous brand new compressors, high efficient shell condensers and evaporators—excellent cooling, quiet with low electric consumption.</li>
                                    <li>P.I.D, Microprocessor control-easy to operate, accurately maintains temperature range from 30C to 500C</li>
                                    <li>Special open type reservoir tank with stainless steel-easy to clean and maintain</li>
                                    <li>Well designed and reasonable pipelines ensures power supply and saves energy.</li>
                                    <li>Current-overload protector, high-and-low pressure switches, electronic time delayer, fault display system-safe and durable.</li>
                                    <li>Liquid crystal display showing temperatures of outlet and Inlet chili water-provides visualized and direct setting.</li>
                                    <li>Single, double or quadruple compressors combination available-economical and efficient.</li>
                                    <li>Industrial designed-elegant and ergonomic</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-7">
                            <div className="aux-content pl-0 pr-5">
                                <h2>Oven</h2>
                                <h6>A- Scope of Application :</h6>
                                <ol>
                                    <li>To de-moisturize plastic raw materials, especially in dealing with small amount of various materials or plastics for testing.</li>
                                    <li>Time saving during the refilling of the materials into the tray by faster material cleaning.</li>
                                    <li>Can be used in plastic moulding after tempering, which can enhance toughness, eliminate tension and improve quality of the plastic products</li>
                                    <li>Can also be used in agricultural products (pollen, garlic, tea) or preheat or dried for electronic, electrical, electroplating, pharmaceutical, paint, printing and other product.</li>
                                </ol>
                                <h6>B- Structural characteristics :</h6>
                                <ol>
                                    <li>Unique design of powerful air blow and air duct system, making sure the internal temperature distribution quality is trust worthy.</li>
                                    <li>With stainless steel shelves and circulating hot air recycling design-energy saving, durable suitable to dry serval to dry several of plastic</li>
                                </ol>
                                <div className="resp-aux-image">
                                    <img src="../../images/pages/auxiliaries/oven.png" alt="hopper" />
                                </div>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/oven.png" alt="hopper" />
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 ml-0 mt-5 align-items-center">
                        <div className="col-md-5">
                            <div className="aux-image">
                                <img src="../../images/pages/auxiliaries/controller.png" alt="hopper" />
                            </div>
                            <div className="resp-aux-image">
                                <img src="../../images/pages/auxiliaries/controller.png" alt="hopper" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="aux-content">
                                <h2>Injection Moulding PLC Controller (B&R)</h2>

                                <h6>Characteristics of PS860AM Control System</h6>
                                <ul>
                                    <li>The system has bright LCD display</li>
                                    <li>The system adopts two CPU design with fast operating speed, precise control & high stability.</li>
                                    <li>It has the real-time function to display time and date in real time.</li>
                                    <li>With 999 groups of mode data storage, it may enter the mode description and real-time operating help in Chinese and English.</li>
                                    <li>The password setting and data looking can prevent the operators from changing the established data arbitrarily to influence the quality of products.</li>
                                    <li>There are multiple languages for your choice that display dynamically in real time.</li>
                                    <li>Packing modulus setting funtion for 8-digit output may set the packing modulus</li>
                                    <li>Various self-plugging and tein type programs are applicable for the self-plugging and tein control in different types</li>
                                    <li>PID with self temperature control has (6+1) sections of temperatures.</li>
                                    <li>Temperature may be preset a week in advance to enable more convenient operation</li>
                                    <li>Failure Self-detection functions, alarm display & voice prompt Input and output are done by the optically coupled circuit to isolate the interference of the external circuitry.</li>
                                    <li>In the inspection window, you can inspect all input and output points and the moving states of key.</li>
                                </ul>
                                <button onClick={()=>navigate('/productenquiry')}>request order</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
            <Footer />
        </>
    )
}

export default Auxiliaries;