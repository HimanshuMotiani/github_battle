import { BrowserRouter,Route, Switch } from "react-router-dom";
import Popular from './Popular';
import Battle from './Battle';
function Main() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Popular />
        </Route>
        <Route path="/battle" exact>
          <Battle />
        </Route>
      </Switch>
    </>
  );
}

export default Main;
