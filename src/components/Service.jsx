const Service = (props) => {
    return (
        <section id={props.id} className="about section light-background no-background">
            
            <div className="container">
                <div className="row gy-3">
                    { props.orientation === "right" ? (
                        <div className="mt-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay={100}>
                        <img src={props.image} alt="" className="img-fluid rounded" />
                    </div>
                    ) : null }
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                        {/* Section Title */}
                        <div className="container section-title pb-3" data-aos="fade-up">
                            <p className="text-left"><span>{props.title}</span></p>
                        </div>{/* End Section Title */}
                        <div className="about-content ps-0 ps-lg-3">
                            <h3>{props.subtitle}</h3>
                            <p>
                                {props.text1}    
                            </p>
                            <p>
                                {props.text2}
                            </p>
                            <p>
                                {props.text3}
                            </p>
                        </div>
                    </div>
                    { props.orientation === "left" ? (
                        <div className="mt-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay={100}>
                        <img src={props.image} alt="" className="img-fluid rounded" />
                    </div>
                    ) : null }
                </div>
            </div>
        </section>
    )
}
export default Service