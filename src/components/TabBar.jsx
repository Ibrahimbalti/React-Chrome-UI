import Tab from "./Tab";

export default function TabBar({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab, idx) => (
        <Tab
          key={idx}
          title={tab}
          active={idx === activeTab}
          onClick={() => setActiveTab(idx)}
        />
      ))}
    </div>
  );
}
