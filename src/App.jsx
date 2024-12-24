import { useState } from "react";
import Navbar2 from "./Components/Navbar2";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar2 setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer></Footer>
    </div>
  );
};

export default App;
