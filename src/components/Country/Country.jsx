import './Country.css'
const Country = ({country}) => {
       const {name, flags, population, area} = country;
     return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>area : {area} km<sup>2</sup></p>
        </div>
    );
};

export default Country;