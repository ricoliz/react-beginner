import logo from './assets/img/logo.svg';
import './assets/css/App.scss';
import './assets/css/data.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <div></div>
        <aside>
          <nav>
            <ul>
              <li><a href="#">ナビ1</a></li>
              <li><a href="#">ナビ2</a></li>
              <li><a href="#">ナビ3</a></li>
            </ul>
          </nav>
        </aside>
      </section>
    </div>
  );
}

export default App;
