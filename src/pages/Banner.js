import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner_section">
            <section className="slide-wrapper">
                <div className="container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" alt="Style1" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="achive_text">Stilinizi Belirleyin</h1>
                                            <p className="best_text">Tecrübeli Kuaförlerimizle</p>
                                            <p className="lorem_text">
                                                Tarzınıza Uygun Stil Danışmanlarımızla Sizlere Hizmet Etmekten Memnuniyet Duyarız..
                                            </p>
                                            <div className="appointment_bt">
                                                <Link to="/Reservation">Rezervasyon Yapın</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat for other slides */}
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" alt="Style" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="achive_text">Apachi Saçlara Mı ?</h1>
                                            <p className="best_text">En İyisi Bizde</p>
                                            <p className="lorem_text">
                                                Tecrübeli Kuaförlerimizle Şık Tarzınıza Uygun Saçlar
                                            </p>
                                            <div className="appointment_bt">
                                                <Link to="/Reservation">Rezervayon Yapın</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat for other slides */}
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" alt="Style" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="achive_text">Kerem Bursinin Saç Stili mi?</h1>
                                            <p className="best_text">En İyisi Biz Yaparız</p>
                                            <p className="lorem_text">
                                                Tecrübeli Kuaförlerimizle Kafa Yapınıza Uygun Saç Stillerini Sizlerle Buluşturuyoruz...
                                            </p>
                                            <div className="appointment_bt">
                                                <Link to="/Reservation">Rezervayon Yapın</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

