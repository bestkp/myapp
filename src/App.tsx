import Header from 'components/header/Header'
import Rank from 'components/rank/Rank'
import Recommand from 'components/recommand/Recommand'
import Search from 'components/search/Search'
import Singer from 'components/singer/Singer'
import Tab from 'components/tab/Tab'
import React from 'react';
import {Redirect, Route, Switch} from 'react-router'
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Tab/>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/recommand" />}
        />
        <Route path="/recommand" component={Recommand}/>
        <Route path="/rank" component={Rank}/>
        <Route path="/search" component={Search}/>
        <Route path="/singer" component={Singer}/>
      </Switch>
    </div>
  );
};

export default App;
