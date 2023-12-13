import React, { useState } from 'react';
import TabForm from '../../component/TabForm/TabForm'
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [movingTabStyle, setMovingTabStyle] = useState({});

  const handleTabClick = (index) => {
    setActiveTab(index);

    const s = 25 * index;
    console.log(s)
    setMovingTabStyle({ left: `${s}%` });
  };

  return (
    <>
      {/* <TabForm></TabForm> */}
      <>
        <div className="tabs">
          <ul className="tabs--list">
            {[...Array(4)].map((_, index) => (
              <li key={index}
                title={`TABS ${index + 1}`}
                data-content={`tabs${index + 1}`}
                className={activeTab === index ? 'actived' : ''}
                onClick={() => handleTabClick(index)}>
                {`TABS ${index + 1}`}
              </li>
            ))}
            <li className="moving-tab moving-tab--interaction" style={movingTabStyle} />
          </ul>
          <ul className="tabs--content">
            {[...Array(4)].map((_, index) => (
              <li key={index} data-content={`tabs${index + 1}`} className={activeTab === index ? 'actived' : ''}>
                {`Tabs ${index + 1}`}
              </li>
            ))}
          </ul>
        </div>
      </>
    </>
  );
};

export default Home;
