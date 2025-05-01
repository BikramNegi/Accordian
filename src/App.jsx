import { use, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const accordianInitialData = [
    {
      title: '1st Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive: true,
    },
    {
      title: '2nd Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive: false,
    },
    {
      title: '3rd Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive: false,
    },
    {
      title: '4th Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive: false,
    },
  ];

  const [accordianData, setAccordianData] = useState(accordianInitialData);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const handleClick = (e, index) => {
    const newState = accordianData.map((eachAcc, eachIndex) => {
      if (index === eachIndex) {
        return { ...eachAcc, isActive: !eachAcc.isActive };
      } else {
        if (isMultiSelect) return eachAcc;
        return { ...eachAcc, isActive: false };
      }
    });
    setAccordianData(newState);
  };

  const handleMultiSelect = () => {
    setIsMultiSelect((prev) => !prev);
    if (isMultiSelect === true) {
      setAccordianData(accordianInitialData);
    }
  };

  return (
    <>
      <div className="accordian_container">
        <div
          className={`accordian_multiselect ${
            isMultiSelect ? 'isMultiSelect' : ''
          }`}
          onClick={handleMultiSelect}
        >
          {isMultiSelect ? 'Disable' : 'Enable'} MultiSelect
        </div>
        {accordianData.map((eachAccordian, index) => {
          return (
            <div
              className="each_accordian"
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              <div className="accordian_title">
                {eachAccordian.title}
                <span className="active_symbol">
                  {eachAccordian.isActive ? '-' : '+'}
                </span>
              </div>
              {eachAccordian.isActive && (
                <div className="accordian_description">
                  {eachAccordian.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
