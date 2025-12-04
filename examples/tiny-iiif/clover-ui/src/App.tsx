import Viewer from '@samvera/clover-iiif/viewer';
import './App.css';


function App() {
  return (
    <>
      <div>
        <Viewer 
          iiifContent="./sample/manifest.json"
          options={{
            canvasHeight: "auto"
          }}
        />
      </div>
    </>
  );
}

export default App;
