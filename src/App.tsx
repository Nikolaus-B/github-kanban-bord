import { GlobalStyle } from "./components/GlobalStyle";
import { Layout } from "./components/Layout/Layout";
import axios from "axios";

axios.defaults.baseURL = `
https://github.com/`;

const fetchTrendingMovies = async () => {
  const response = await axios.get(`facebook/react`);
  console.log(response.data);

  return response.data;
};

fetchTrendingMovies();

function App() {
  return (
    <>
      <Layout />
      <GlobalStyle />
    </>
  );
}

export default App;
