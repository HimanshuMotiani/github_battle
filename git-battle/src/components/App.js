import {Link,NavLink} from 'react-router-dom'
import Main from './Main';
function App(params) {
  return (
    <>
      <header className="container">
        <div className="flex justify-between mt-5">
          <nav className="flex">
            <NavLink activeClassName="active" to="/" exact>
              <h2 className="font-bold mr-3 text-2xl">Popular</h2>
            </NavLink>
            <NavLink activeClassName="active" to="/battle" exact>
              <h2 className="font-bold text-2xl">Battle</h2>
            </NavLink>
          </nav>
          <div>
            <span className="text-4xl">
            <i className="fa fa-cloud-meatball"></i>
            </span>
          </div>
        </div>
      </header>
      <div className="container">
        <Main/>
      </div>
    </>
  );
}

export default App;
