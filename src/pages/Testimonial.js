import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import React from 'react';

const Testimonial = () => {
    return (
        <div className="client_section layout_padding">
            <h1 className="client_taital">Müşteri Yorumları</h1> {/* Başlık eklendi */}
            <div className="container">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Ahmet Yılmaz</h3>
                                        <p className="reader_text">Yıllardır gittiğim tek kuaför! Her seferinde harika sonuçlar alıyorum. Personel çok güler yüzlü ve profesyonel. Kesim ve renklendirme konusunda gerçekten uzmanlar!</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Metin Şentürk</h3>
                                        <p className="reader_text">Güzellik ve bakım için en iyi adres! Rahat bir ortamda, kaliteli hizmet alıyorum. Saçımın ne kadar güzel göründüğünü herkes fark ediyor. Teşekkürler!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Sebahattin Çatal</h3>
                                        <p className="reader_text">Tam istediğim gibi bir saç modeli buldum. Ekibin ilgisi ve samimiyeti harika. Herkese tavsiye ederim, mutlaka uğrayın. Zamanınız ve Saçlarınız Değerli..!</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Semih Güneş</h3>
                                        <p className="reader_text">Uzun zamandır okurların dikkatini çeken bir gerçek, sayfa düzenine bakarken okurların dikkatinin dağılacağıdır. Lorem Ipsum kullanmanın amacı, 'İçerik burada, içerik burada' demek yerine, harflerin daha normal bir dağılımına sahip olmasıdır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Samet Aybaba</h3>
                                        <p className="reader_text">Kuaför dükkanını keşfettim ve çok memnun kaldım! Hızlı ve kaliteli hizmet sunuyorlar. Saç stilim için doğru adres burası!</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alex_bg">
                                        <h3 className="alex_text">Rafa Silva</h3>
                                        <p className="reader_text">Bu kuaför dükkanına ilk kez geldim ve gerçekten hayran kaldım! Ekibin profesyonelliği ve hizmet kalitesi mükemmel!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Önceki</span>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Sonraki</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
