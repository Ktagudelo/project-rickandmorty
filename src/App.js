import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Character from './components/Character';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path='/character/:id' component={Character} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
