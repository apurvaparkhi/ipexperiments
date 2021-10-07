import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import EffectTutorial from './usereffect/EffectTutorial';
import StateTutorial from './userstate/StateTutorial';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <EffectTutorial />
      <StateTutorial/> */}
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
        </UserContext.Provider>

      

      
    </div>
  );
}

export default App;
