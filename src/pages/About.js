import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="unique_text">Bizim Hikayemiz</p>
                        <h1 className="years_text">52 Yıllık Deneyim</h1>
                        <p className="ipsum_text">
                            Fatih başlayan bu serüven Dedemin Ustalığı Babamın emekleriyle;<br />
                            1971 yılından beri güzellik ve bakım alanında hizmet veren kuaför dükkanımız, deneyimli ekibiyle müşterilerine en iyi deneyimi sunmayı hedefliyor. Modern teknikler ve kaliteli ürünler kullanarak, her yaştan müşterimizin ihtiyaçlarına yönelik özel hizmetler sunuyoruz. Samimi ve sıcak bir atmosferde, saç kesiminden renklendirme işlemlerine kadar geniş bir yelpazede hizmet veriyoruz. Müşteri memnuniyetini her zaman önceliğimiz olarak görüyor, sizi de ailemizin bir parçası olarak aramızda görmekten mutluluk duyuyoruz!
                        </p>
                        <div className="read_more_bt">
                            <Link to="/about">Devamı</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image_2">
                            <img src="assets/images/img-2.png" alt="About section illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;