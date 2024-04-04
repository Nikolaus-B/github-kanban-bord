import { GlobalStyle } from "./components/GlobalStyle";
import { Layout } from "./components/Layout/Layout";
// import { useAppDispatch } from "./redux/store";
// import { fetchIssus } from "./redux/todo/operations";

function App() {
  // const dispatch = useAppDispatch();
  // dispatch(fetchIssus({ user: "facebook", repoName: "react" }));
  return (
    <>
      <Layout />
      <GlobalStyle />
    </>
  );
}

export default App;
