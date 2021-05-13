import styles from '../../styles/countries.module.css'

const Country = ({country}) => {
    return (
        <div className={styles.container}>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={country.flag} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Country: {country.name}</p>
    <p className="card-text">Area: {country.area}</p>
    <p className="card-text">Population:{country.population}</p>
  </div>
</div>
        </div>
    );
};

export default Country;