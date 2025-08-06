import { useState } from "react";
import WindowControls from "./WindowControls";
import TabBar from "./TabBar";
import AddressBar from "./AddressBar";
import SearchBoxWithShortcuts from "./SearchBoxWithShortcuts";

export default function BrowserWindow() {
  const [tabs] = useState(["Google", "YouTube"]);
  const [activeTab, setActiveTab] = useState(0);
  const [url, setUrl] = useState("https://www.google.com");

  return (
    <div className="browser-window">
      <WindowControls />
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <AddressBar url={url} setUrl={setUrl} />
      <div className="content ">
        {tabs[activeTab] === "Google" ? (
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <h2>{tabs[activeTab]}</h2>
               <SearchBoxWithShortcuts />
           </div>
        ) : (
          <>
            {/* <h2>{tabs[activeTab]}</h2>
            <p>Showing content for: {url}</p> */}
           <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <h2>{tabs[activeTab]}</h2>
               <SearchBoxWithShortcuts />
           </div>
          </>
        )}
      </div>
    </div>
  );
}
