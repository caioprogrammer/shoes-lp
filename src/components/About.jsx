import processoEntrega from '../assets/videos/loja.mp4'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          <h2 className="section-title">
            Sobre Nós
          </h2>
          <div className="about__content-intern">
            <div className="text">
              Sabemos que encontrar um calçado que seja verdadeiramente satisfatório pode ser difícil. 
              Muitas vezes, ao comprar online, nos deparamos com produtos que não atendem às nossas expectativas, 
              resultando em frustração e desconforto.
              <br />
              <br />
              Foi por isso que, em 2013, decidimos criar uma loja de calçados femininos diferente. Nosso objetivo era oferecer às mulheres produtos de alta qualidade, com um design inovador e, acima de tudo, confortáveis. Embora tenhamos precisado fechar temporariamente, retornamos em 2022 com ainda mais determinação e dedicação.
              <br />
              <br />
              Nossa equipe é composta por pessoas que entendem as necessidades e as dores das clientes. Trabalhamos incansavelmente para garantir sua satisfação, selecionando cuidadosamente nossos fornecedores e atendimento personalizado.
              Oferecemos um catálogo diversificado, com uma ampla gama de estilos de calçados femininos, para que cada mulher possa encontrar algo que se adeque ao seu gosto e estilo de vida. 
              <br />
              <br />
              Não há mais motivo para sofrer na busca pelo calçado perfeito. Convidamos você a conhecer nossa loja e experimentar a diferença que fazemos em relação à sua satisfação. Aqui, você será recebida com um sorriso e nossa equipe estará pronta para ajudar.
              <br />
              <br />
              Acompanhe nossas redes sociais para ficar atualizada sobre novidades e promoções
              <br />
              <br />
              Não perca a oportunidade de se tornar uma de nossas clientes fiéis e sentir a diferença que fazemos para garantir sua satisfação.
              <br />
              Agende uma visita sem compromisso e venha se surpreender com a qualidade e a variedade de nossos produtos. Estamos ansiosos para atendê-la.

            </div>
            <div className="image">
              <video className='product__video' muted autoPlay loop >
                <source src={processoEntrega} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About