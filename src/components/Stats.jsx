const Stats = () => {
    return (
        <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-12 d-flex flex-column align-items-center">
                                <div className="stats-item">
                                    <span data-purecounter-start={0} data-purecounter-end={39} data-purecounter-duration={4} className="purecounter" />
                                    <span>"</span>
                                    <p>seconds</p>
                                </div>
                            </div>{/* End Stats Item */}
                            <div className="col-12 d-flex flex-column align-items-center">
                                <div className="stats-item">
                                    <span data-purecounter-start={0} data-purecounter-end={30} data-purecounter-duration={5} className="purecounter" />
                                    <span>%</span>
                                    <p>incidents increment</p>
                                </div>
                            </div>{/* End Stats Item */}
                            <div className="col-12 d-flex flex-column align-items-center">
                                <div className="stats-item">
                                    <span data-purecounter-start={0} data-purecounter-end={7} data-purecounter-duration={6} className="purecounter" />
                                    <span>%</span>
                                    <p>profit loss</p>
                                </div>
                            </div>{/* End Stats Item */}
                        </div>
                    </div>
                    <div className="col-md-6 col-12 about">
                        <div className="container">
                            <div className="row gy-3">
                                <div className="col-lg-12 col-12 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                                    {/* Section Title */}
                                    <div className="container section-title pb-3" data-aos="fade-up">
                                        <p className="text-left"><span>Secure Your Business Future
                                            </span></p>
                                    </div>{/* End Section Title */}
                                    <div className="about-content ps-0 ps-lg-3">
                                        <h3>
                                        Act Now to Ensure 360° Security
                                        with Our Specialized Services!
                                        </h3>
                                        <p>
                                            Every 39 seconds, a company falls victim to a ransomware
                                            attack worldwide.
                                        </p>

                                        <p>
                                            In 2021, security incidents during business travel
                                            increased by 30%.
                                        </p>
                                        <p>
                                            Companies with ineffective physical security measures
                                            report an average loss of 7% in profits.
                                        </p>
                                        <p>
                                            These statistics clearly indicate that the risk is
                                            ever-present.
                                        </p>
                                        <p><b>
                                            Don't wait for your company to be the next victim.
                                        </b></p>
                                        <p>
                                            Contact us now to ensure the security of your data,
                                            business travels, and physical assets.
                                        </p>
                                        <p>
                                            Your security is our priority, and the urgency to act is now.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default Stats