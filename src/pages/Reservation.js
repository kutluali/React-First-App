import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import '../App.css';

const Reservation = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('İsim Soyisim gerekli'),
        email: Yup.string().email('Geçerli bir email adresi giriniz').required('Email gerekli'),
        phone: Yup.string().required('Telefon numarası giriniz'),
        message: Yup.string().required('Mesaj bigisi giriniz'),
    });

    return (
        <div className="contact_section layout_padding">
            <div className="container">
                <h1 className="contact_taital">Rezervasyon</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        // Form gönderildiğinde SweetAlert göster
                        Swal.fire({
                            title: 'Başarılı!',
                            text: 'Rezervasyonunuz alınmıştır.',
                            icon: 'success',
                            confirmButtonText: 'Tamam'
                        });

                        // Formu sıfırla
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="contact_section_2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mail_section">
                                        <Field type="text" className="mail_text" placeholder="İsim Soyisim" name="name" />
                                        {errors.name && touched.name ? <div className="error">{errors.name}</div> : null}

                                        <Field type="text" className="mail_text" placeholder="Email" name="email" />
                                        {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}

                                        <Field type="text" className="mail_text" placeholder="Telefon" name="phone" />
                                        {errors.phone && touched.phone ? <div className="error">{errors.phone}</div> : null}

                                        <Field as="textarea" className="massage-bt" placeholder="Mesaj ve Rezervasyon Saati Giriniz" rows="5" name="message" />
                                        {errors.message && touched.message ? <div className="error">{errors.message}</div> : null}

                                        <div className="send_bt">
                                            <button type="submit">Gönder</button>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="map_text">
                                        <img src="/assets/images/call-icon-1.png" alt="Call Icon" />
                                        <span className="call_text_left">0212 615 15 15</span>
                                        <div className="map_text">
                                            <img src="/assets/images/mail-icon-1.png" alt="Mail Icon" />
                                            <span className="call_text_left">rezervasyon@gmail.com</span>
                                            <div className="map_text_1">
                                                <img src="/assets/images/map-icon-1.png" alt="Map Icon" />
                                                <span className="call_text_left">Hobyar Mah. 512 Sok No: 12<br />
                                                    Fatih/İstanbul
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Reservation;