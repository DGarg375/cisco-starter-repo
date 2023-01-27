import './App.css';
import Banner from './components/banner/banner.js';
import Exhibit from './components/exhibit/exhibit.js';
import IPAddress from './components/ipAddress/ipAddress.js';
import Latency from './components/latency/latency.js';

function App() {
  return (
    <div className="App">
      <Banner />
        <div class="exhibit-area">
          <Exhibit name="ipv4 address"><IPAddress title="ipv4"></IPAddress></Exhibit>
          <Exhibit name="ipv6 address"><IPAddress title="ipv6"></IPAddress></Exhibit>
          <Exhibit name="Latency"><Latency></Latency></Exhibit>
        </div>
    </div>
  );
}

export default App;
