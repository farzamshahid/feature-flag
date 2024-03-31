import "./App.css";
import Accordian from './Components/accordian/index'
import FeatureFlag from './Components/feature-flag/featureFlag'
import FeatureFlagGlobalState from './Components/feature-flag/context'
import LightDarkMode from "./Components/light-dark-mode/lightDarkMode";
import menus from './Components/Tree-View/data'
import RandomColor from "./Components/Random-color/randomColor";
import TreeView from "./Components/Tree-View";
function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />

      <TreeView menus={menus} />

      <LightDarkMode />

      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;