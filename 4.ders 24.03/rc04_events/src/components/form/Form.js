import { useState } from "react";
import "./styles.css";

const Form = () => {
  // const [name, setName] = useState("");   // useState i kullanmadan once import etmeyi unutma.
  // const [email, setEmail] = useState("");  //! useState i yazilan degeri yakalamak icin kullaniyoruz. bunu ekrana yazdirmak icin ise (1), devami asagida.
  // const [pass, setPass] = useState("");
  // const [country, setCountry] = useState("");

  const [formData, setFormData] = useState({   // bu kodun yukarisi ve asagisini yoruma aldik , uzun yol olarak gosterildi. kisa yol ise bu koddur.
    name: "",
    email: "",
    pass: "",
    country: "",
  });
  console.log({ formData });
  // console.log(name);
  // const handleName = (e) => setName(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handlePassword = (e) => setPass(e.target.value);
  // const handleCountry = (e) => setCountry(e.target.value);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {  // girilen degerleri back end e gondermek icin yapilan islem . biz burada alert yaptik.
    e.preventDefault();    // sayfa submit yapildiginda sayfayi yenilemesin diye , default degeri engelliyoruz.
    alert(`
    userName: ${formData.name}
    email: ${formData.email}
    pass: ${formData.pass}
    country: ${formData.country}
    `);
    // setName("");              //? submit ettiten sonra sayfadaki degerin kaldirilmasi icin (1)
    // setEmail("");
    // setPass("");
    // setCountry("");
    
    setFormData({
      name: "",
      email: "",
      pass: "",
      country: "",
    });
  };

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {formData.name}</strong> //! (2) buraya verdigimiz degiskeni {} icinde yaziyoruz.
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            // onChange={handleName}
            onChange={handleFormData}
            defaultValue="Jane"
            value={formData.name}  //? (2) daha sonrasinda icindeki degerlerin yani valuelari kaldirmasi icin buraya value degeri vermeliyiz.
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {formData.email} </strong>
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            // onChange={handleEmail}
            onChange={handleFormData}
            value={formData.email}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {formData.pass} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            // onChange={handlePassword}
            onChange={handleFormData}
            value={formData.pass}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {formData.country} </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="country"
            // onChange={handleCountry}
            onChange={handleFormData}
            value={formData.country}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
