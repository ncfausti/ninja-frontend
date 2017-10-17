
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { StackedAreaChart } from './components/StackedAreaChart.js';
import DonutChart from './components/DonutChart.js';
import HalfDonutChart from './components/HalfDonutChart.js';
import CalculatorForm from './components/CalculatorForm';

class App extends Component {
  constructor(){
    super();

    // for each brand, should get constructed with their past numbers
    // for prev two quarters

    this.state = { 
      followers: 1000,
      facebook: 1000,
      articles: 1000,
      forums: 1000,
      tweets: 1000,
      sentiment: 1000,
      dispenseries: 1000,
      areaChartData: [
      
         // social media shares, by month
         // init with static data

        {name: 'October', Twitter: 1500, Facebook: 400, 
          Articles: 500, Forums:600,Tweets:600, Sentiment: 650, Dispensaries:700},

        {name: 'November', Twitter: 2200, Facebook: 500, 
          Articles: 600, Forums:700,Tweets:600, Sentiment: 650, Dispensaries:700},

        {name: 'December', Twitter: 2300, Facebook: 600, 
          Articles: 700, Forums:800,Tweets:600, Sentiment: 650, Dispensaries:700},

        {name: 'September', Twitter: 1150, Facebook: 370, 
          Articles: 400, Forums:500, Tweets:500, Sentiment: 650, Dispensaries:700}
      ]}
  }

    update(e) {
      let totals = [];
      // calc numbers
      console.log(e.target.id + " : " + e.target.value);
      this.setState({[e.target.id]:e.target.value});
      // use refs here

      this.setState({areaChartData: [
        
        {name: 'October', Twitter: 1500, Facebook: 400, Articles: 500, Forums:600},
        {name: 'November', Twitter: 2200, Facebook: 500, Articles: 600, Forums:700},
        {name: 'December', Twitter: 3300, Facebook: 600, Articles: 700, Forums:800},
        {name: 'January', Twitter: this.state.followers, Facebook: this.state.facebook,
          Articles: this.state.articles, Forums: this.state.forums },
      ]});

  }
  render() {
     
    return (
      <div className="App">
        <header className="App-header">
        <img src="http://kivaconfections.com/assets/black_logo.png" width="20%"/>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          <div class="w50 float float-right">
          <span>Comments Sentiment</span>
          <DonutChart />
          </div>
          <div class="w50 float float-right">
          <span>Overall Sentiment Level</span>
          <HalfDonutChart />
          </div>
          <div>
          <StackedAreaChart data={this.state.areaChartData} />
          <CalculatorForm update={this.update.bind(this)} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;