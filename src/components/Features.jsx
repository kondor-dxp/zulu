const Features = () => {
    return(
        <section id="testimonials" className="testimonials section">
        {/* <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" /> */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              
              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-person"></i></div>
                  <h4><a href="#" class="stretched-link">Corporate Security Consulting</a></h4>
                  <p>
                  Zulu LTD offers services to help corporations protect their assets, processes, and reputation. Their consultations involve reviewing existing security measures to ensure compliance and identify gaps, conducting in-depth threat and risk assessments, and evaluating the adequacy of site security. Recommendations are made to mitigate risks, tailored to the client's specific risk appetite and values.
                  </p>
                </div>
              </div>{/* End Service Item */}
              
              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-list-ul"></i></div>
                  <h4><a href="#" class="stretched-link">Risk and Crisis Management</a></h4>
                  <p>
                  Zulu Consulting helps businesses identify, assess, and mitigate risks to protect finances and reputation. Services include risk analysis, crisis navigation, and crisis exercises to test and improve emergency plans with practical recommendations.
                  </p>
                </div>
              </div>{/* End Service Item */}

              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-shield-check"></i></div>
                  <h4><a href="#" class="stretched-link">Cyber Security</a></h4>
                  <p>
                  Zulu’s Cyber Security Team provides 24/7 deep and dark web monitoring, delivering real-time intelligence on online entities. Analysts detect exposed identities, fake accounts, and threats from activist groups or criminal entities, helping clients mitigate risks and manage reputational threats proactively.
                  </p>
                </div>
              </div>{/* End Service Item */}

              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-suitcase2"></i></div>
                  <h4><a href="#" class="stretched-link">Travel Security</a></h4>
                  <p>
                  Zulu Consulting helps organizations fulfill their Duty of Care by assessing travel risks and protecting personnel, assets, and reputation. With expert partners worldwide, they provide security support, even in high-risk areas.
                  </p>
                </div>
              </div>{/* End Service Item */}

              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-person-badge"></i></div>
                  <h4><a href="#" class="stretched-link">Event Security</a></h4>
                  <p>
                  Zulu Consulting ensures event safety from start to finish through risk analysis and security measures to deter, detect, delay, and defend. They provide advisors or full security teams to proactively manage threats and minimize disruptions.
                  </p>
                </div>
              </div>{/* End Service Item */}
              
              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-prescription2"></i></div>
                  <h4><a href="#" class="stretched-link">Medical Security</a></h4>
                  <p>
                  Zulu Consulting provides specialized medical training, including Combat Life Saver and Tactical Emergency Care, for personnel in high-risk environments. They also offer telemedical support for travelers in challenging regions.
                  </p>
                </div>
              </div>{/* End Service Item */}

              <div className="swiper-slide shadow">
                <div class="service-item position-relative">
                  <div class="icon"><i class="bi bi-graph-up-arrow"></i></div>
                  <h4><a href="#" class="stretched-link">Sentiment Analysis</a></h4>
                  <p>
                  Zulu Consulting uses AI-driven Sentiment Analysis to assess social media impact and detect potential threats. Their Cyber Security Team conducts Digital Audits to identify online exposure risks for individuals under threat, offering tailored mitigation strategies.
                  </p>
                </div>
              </div>{/* End Service Item */}
              
            </div>
          </div>
        </div>
      </section>
    )
}
export default Features