import starRating from '../assets/starRatings.svg';

const Ratings = () => {
  return (
    <section className="ratings">
      <div className="container">
        <div className="ratings__content">
          <div className="item-left">
            <h3>
              Mais de 1000 clientes confiam na Zagli
              |
              Desde 2016
            </h3>
          </div>
          <div className="item-right">
            <span>
              <b>5 <img src={starRating} /></b>
              <p>363 Avaliações</p>
            </span>
            <span>
              <b>3K+</b>
              <p>
                +3 mil calçados vendidos
              </p>
            </span>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Ratings