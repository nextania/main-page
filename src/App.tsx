import { Route, Router } from "@solidjs/router";
import Base from "./routes/Base";
import { StateProvider } from "./state";

const App = () => {

  return (
    <>
      <StateProvider>
      </StateProvider>
    </>
  );
};

export default App;
