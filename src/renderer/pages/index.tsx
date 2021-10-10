import { Provider } from "react-redux";
import { store } from "../store";
import { PictLibrary } from "../components/pictLibrary/PictLibrary";

const IndexPage = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PictLibrary />
    </Provider>
  );
};

export default IndexPage;
