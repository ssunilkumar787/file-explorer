import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpand(!expand)}>
          📁 {explorer.name}
        </div>

        {explorer.items.map((exp) => {
          return (
            <div style={{ display: expand ? "" : "none" }}>
              <Folder key={exp.id} explorer={exp} />
            </div>
          );
        })}
      </>
    );
  } else {
    return <div className="file">📄{explorer.name}</div>;
  }
};

export default Folder;
