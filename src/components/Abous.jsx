const About = () => {
    return(
        <section id="about" className="about section light-background">
            
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                        {/* Section Title */}
                        <div className="container section-title pb-3" data-aos="fade-up">
                            <p className="text-left"><span>About Us</span></p>
                        </div>{/* End Section Title */}
                        <div className="about-content ps-0 ps-lg-3">
                            <h3>Zulu Consulting is a 25-year experience security
                            consulting firm.</h3>
                            <p className="fst-italic">
                                Our international team consists of highly qualified
                                consultants with military, information technology, travel
                                security and business backgrounds.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-translate" />
                                    <div>
                                        <p></p>
                                        <p>We speak multiple languages and are able to deeply
                                            understand the cultural nuances of the countries where
                                            we operate.</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-globe-americas" />
                                    <div>
                                        <p></p>
                                        <p>These cover a wide range of geographies such as
                                            Europe, Middle East, Asia, Africa, Central and South
                                            America.</p>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                At Zulu Consulting, we stand behind the belief that
                                diversity and inclusion contribute to the generation of
                                innovative and different ideas and perspectives, and
                                bring the added value that allows our team to benefit
                                from learning together based on the principle of
                                non-discrimination that governs all our actions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-5 col-6" data-aos="fade-up" data-aos-delay={100}>
                        <img src="images/zuluAbout1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-6" data-aos="fade-up" data-aos-delay={100}>
                        <img src="images/zuluAbout2.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About