import { Route, Router } from "@solidjs/router";
import Base from "./routes/Base";

const App = () => {

  return (
    <>
      <Router>
        <Route path="/" component={Base} />
        <Route path="/:page" component={Base} matchFilters={{ page: ["about", "services", "resources"] }} />
      </Router>
    </>
  );
};

export default App;
