import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DifferentContent from "./DifferentContent";
import Tab from "./Tab";
import TabContent from "./TabContent";

const Tabbed = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);
  const id = uuidv4();
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={id} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
};

export default Tabbed;
