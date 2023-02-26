import './App.css';
import { useState } from 'react';
import {GrPowerReset} from 'react-icons/gr';
import {AiFillSetting, AiOutlineCloseCircle} from 'react-icons/ai';
import ReactSwitch from 'react-switch';

function App() {

  const [val, setValue] = useState(0);
  const [setting, setSetting] = useState(false);
  const [checked, setChecked] = useState(false);
  const [limit, setLimit] = useState(null);
  const [bgColor, setBgColor] = useState("#ffac02");

  const color=["#B99B6B","#f3f3f3", "#D9ACF5", "#FFD4D4","#00ad98","#ffac02"] //backgroungColor option

  function handleAdd() {
    setValue(val+1);
  }
  function handleSub() {
    setValue(val-1);
  }
  function handleReset() {
    setValue(0);
  }
  function handleSetting() {
    setSetting(!setting)
  }
  function handleChange() {
    setChecked(!checked)
  }

  document.body.style.backgroundColor = bgColor; //style the background color
  return (
    <div className="App">
        <div className="header">
          <h2>A simple click counter </h2>
          <div>
            <span onClick={handleReset} ><GrPowerReset className="icon"/></span> 
            <span onClick={handleSetting} ><AiFillSetting className="icon"/></span>
          </div>
        </div>
        { setting === true ? 
          (<div className="setting">

            <h3 className='settingHead'>Settings</h3>

            <div className="settingElement">
              <span className="innerHead">Set Count = </span>
              <input type="number" onChange={(e)=>setValue(parseInt(e.target.value))} placeholder="5" className="input"/>
            </div>

            <div className="settingElement">
              <span className='innerHead'>Limits Off/On <ReactSwitch
                                                          checked={checked}
                                                          onChange={handleChange}
                                                        />
              </span>
              {checked ?
                (<div className="limit"><span className='innerHead'>Maximum = <input type="number" placeholder="0" onChange={(e)=>setLimit(parseInt(e.target.value))} className="input"/></span></div>)
                :
                (<div className="limitHidden"><span className='innerHead'>Maximum = <input type="number"placeholder="0" readOnly className="input"/></span>
                </div>)
              }
            </div>
          
            <div className="colorBox settingElement">
              {color.map((val,key)=>{
                return (
                  <div className='colorDiv' style={{backgroundColor:val}} onClick={(e)=>setBgColor(val)} key={key}></div>
                )
              })}
            </div>
            <div>
              <AiOutlineCloseCircle onClick={handleSetting} className="icon"/>
            </div>
        </div>)
        :
        (
        <div>
          <div className="container">
            {val>0 && <button className="btn" onClick={handleSub}><span className="sign">-</span></button>}
          </div>
          <div className="container">
            <div className="val">{val}</div>
          </div>
          <div className="container">
            <button className="btn" onClick={handleAdd}><span className="sign">+</span></button>
          </div>
        {
        checked && 
          <div className='setting'>
            <div>{limit-val}</div>
            {limit-val<=0?<div>Limit Reached</div>:<div>Available</div>}
          </div>
        }
        </div>
       
        )
      }
    </div>
  );
}

export default App;
