import React from 'react';
import './App.css';
import CourseSales from './CourseSales';

class App extends React.Component {
  render() {

    var courses = [
      { name: 'HTML&CSS', price: 3500, duration: "Five day a week for 1 month"},
      { name: 'PSD TO HTML', price: 2500, duration: "Five day a week for 1 month"},
      { name: 'JavaScript', price: 3500, duration: "Five day a week for 1 month"},
      { name: 'PHP&MYSQL', price: 4500, duration: "Five day a week for 1 month"}

  
    ];

    return (
      <div className="App">
          <div className="App-header">
            <h2>Welcome to KTN School</h2>
            <p>See our available courses below</p>
          </div>
        <CourseSales items={courses} />
      </div>
    );
  }
}

export default App;
