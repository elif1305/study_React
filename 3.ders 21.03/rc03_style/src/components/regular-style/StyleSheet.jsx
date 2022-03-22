import './styleSheet.css';

const StyleSheet = (props) => {   //parantez icine genelde props yazlir ama zorunlu degildir. istedigni yazabilirsin.
const isSecenek= props.secenek ? "once":"sonra"   // key atamadan da direk asagidaki p tag inin classname minin icinede yazilablir. app.js den gelen true ve false degerine gore oncesi ce ya sonrasi calisir. true gelirse oncesi, false gelirse sonrasi calisir.
  
  return (
    <div>
      <img className="logo"
     src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Regular-style --- STYLESHEET </h1>
 
     <p className={isSecenek }>Welcome to Lexa Akademia</p>
      </div>
  );
};

export default StyleSheet;
