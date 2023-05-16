import { useEffect, useState } from "react";

const FAQ = (props) => {    
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const results = props.data.filter(item=>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  
  return (    
    <div className='container'>
      <h2 className="heading section-title">Dúvidas</h2>
      <section className='faq'>
       {searchResults.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
      </section>      
    </div>
  )
}

const Question = props => {
  const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive)
  }
  return(
    <div className="question-wrapper">
    <div className='question' id={props.id} onClick={() => handleClick(props.id)}>
      <h3>{props.question}</h3>
      <button onClick={() => handleClick(props.id)}>
        <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </button>     
    </div>
    <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
    </div>
  )
}

export default FAQ;