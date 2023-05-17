import bgFullDesktop from '../assets/banner-desktop-lp.png'
import bgFullMobile from '../assets/banner-principal-mobile.png'

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero__content">
        <a href="#">
          <picture>
            <source media="(max-width: 799px)" srcSet={bgFullMobile} />
            <source media="(min-width: 800px)" srcSet={bgFullDesktop} />
            <img src={bgFullDesktop} alt="Banner Principal Home" />
          </picture>
        </a>
        {/* <div className="hero__content-cta">
            <h2>
              Encontre o par perfeito para você!
            </h2>
            <p>
              Encontre o par perfeito agora e dê um passo à frente.
              <br />
              Explore nossa coleção e adicione estilo e conforto à sua vida hoje mesmo!
            </p>
            <Button buttonClass="primary" buttonLink="#" buttonText="COMPRE AGORA!" />
        </div> */}
        {/* <div className="hero__content-image">
          <img src={bgFullDesktop} alt="" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero