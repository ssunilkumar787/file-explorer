import "./styles.css";
import Folder from "./components/Folder";
import explorer from "./utils/folderData";

export default function App() {
  return (
    <div className="App">
      <h1>Hello File Explorer</h1>
      <Folder explorer={explorer} />
    </div>
  );
}
