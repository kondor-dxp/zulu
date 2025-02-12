const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                                <i className="bi bi-geo-alt flex-shrink-0" />
                                <div>
                                    <h3>Address</h3>
                                    <p>25 Vitosha blvd, fl. 2, 1000 Sofia - Bulgaria</p>
                                </div>
                            </div>{/* End Info Item */}
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                                <i className="bi bi-telephone flex-shrink-0" />
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+39 348 798 8236</p>
                                </div>
                            </div>{/* End Info Item */}
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                                <i className="bi bi-envelope flex-shrink-0" />
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@zuluconsultingroup.com</p>
                                </div>
                            </div>{/* End Info Item */}
                            <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=25 Vitosha blvd, fl. 2, 1000 Sofia - Bulgaria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Message</label>
                                    <textarea className="form-control" name="message" rows={10} id="message-field" required defaultValue={""} />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>{/* End Contact Form */}
                </div>
            </div>
        </section>
    )
}
export default Contact