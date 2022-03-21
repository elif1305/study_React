import Footer from "./Footer";
import Header from "./Header";
import Msg from "./Msg";

function App() {
  return (            //! return ya en sonda olmali ya da parantezi componenti de kapsamali. yoksa hata verir.
    <div>                //! buradaki kapsayici olan bu div cok onemlidir.
      <Header />            //? componentlerin siralamasi onemlidir. sayfada gorunum sirasina gore yazilmasi onemlidir.
      <Msg />                
      <Footer />
    </div>
  );
}

export default App;


