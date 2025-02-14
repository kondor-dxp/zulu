const Skills = () => {
    return(
        <section id="skills" className="skills section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row skills-content skills-animation">
                    <div className="col-lg-6 my-5">
                        <h1><span>Secure</span> your</h1> 
                        <h1>business with <span>Zulu</span></h1>
                    </div>
                    <div className="col-lg-6 my-5">
                        <div className="progress">
                            <span className="skill"><span>Physical Security</span> <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>{/* End Skills Item */}
                        <div className="progress">
                            <span className="skill"><span>Cyber Security</span> <i className="val">30%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>{/* End Skills Item */}
                        <div className="progress">
                            <span className="skill"><span>Other Security Services</span> <i className="val">10%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>{/* End Skills Item */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills