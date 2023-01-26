import './App.css';
import Banner from './components/banner/banner.js';
import Exhibit from './components/exhibit/exhibit.js';
import FindAddress from './components/ipAddress/ipAddress.js';


function App() {
  return (
    <div className="App">
      <Banner />
        <div class="exhibit-area">
          <Exhibit name="ipv4 address"><FindAddress ip_service="ipv4"></FindAddress></Exhibit>
          <Exhibit name="ipv6 address"><FindAddress ip_service="ipv6"></FindAddress></Exhibit>
          <Exhibit name="Latency"></Exhibit>
        </div>
    </div>
  );
}

export default App;
