import floatShoes from '../assets/float-shoes.png'
import Button from './Button'

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__content-cta">
            <h2>
              Encontre o par perfeito para você!
            </h2>
            <p>
              Encontre o par perfeito agora e dê um passo à frente.
              <br />
              Explore nossa coleção e adicione estilo e conforto à sua vida hoje mesmo!
            </p>
            <Button buttonClass="primary" buttonLink="#" buttonText="COMPRE AGORA!" />
          </div>
          <div className="hero__content-image">
            <img src={floatShoes} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero