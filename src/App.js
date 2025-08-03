import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [displayTotal, setdisplayTotal] = useState(0);
  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    //console.log(results);
    setTotal(results.total);
    setdisplayTotal(images.length);
    setImages(results.results);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <h4>Total Found: {total}</h4>
      <div>Displaying: {displayTotal}</div>
      <ImageList images={images} />
    </div>
  );
}

export default App;
