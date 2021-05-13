import styles from "../../styles/countries.module.css";
import Layout from "../../components/index";
import Country from "./Country";
import axios from "axios";
import { Grid } from "@material-ui/core";

export const getStaticProps = async () => {
  try {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    const data = res.data;
    return {
      props: {
        countries: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
const Countries = ({ countries }) => {
  console.log(countries);
  return (
    <div className={styles.container}>
     <Grid container spacing={8}> {
      countries.map((country) => (
        <Grid item xs={12} sm={6} md={4} lg={3}><Country key={country.alpha3Code} country={country}></Country> </Grid>
      ))
      } </Grid>
    </div>
  );
};

export default Countries;
