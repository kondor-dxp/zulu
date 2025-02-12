const Hero = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                        <h1><span>Boost now</span></h1>
                        <h1>your company's <span>security</span></h1>
                        <h2>Zulu Consulting's Expertise</h2>
                        <hr className="col-4"></hr>
                        <p>
                            At Zulu Consulting, we empower businesses with robust
                            security solutions that guarantee resilience in an
                            ever-changing threat landscape.
                        </p>
                        <p>
                            Our team of experts is dedicated to your protection, so you
                            can focus on what truly matters - your success.
                        </p>
                        
                        <div className="d-flex">
                            {/* <a href="#about" className="btn-get-started">Get Started</a> */}
                            {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero