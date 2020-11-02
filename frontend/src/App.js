import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Container from '@material-ui/core/Container';

import Navbar from './components/Navbar';
import Home from './components/Home';
import LiveFeed from './components/Livefeed';
import Analytics from './components/Analytics';

import io from 'socket.io-client';
import Switch from 'react-bootstrap/esm/Switch';
const socket = io('http://localhost:3001');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      nextID: 0,
      analytics: {
        low: {
          fire: 0,
          flood: 0,
          power: 0,
          medical: 0,
          total: 0
        },
        medium: {
          fire: 0,
          flood: 0,
          power: 0,
          medical: 0,
          total: 0
        },
        high: {
          fire: 0,
          flood: 0,
          power: 0,
          medical: 0,
          total: 0
        },
        critical: {
          fire: 0,
          flood: 0,
          power: 0,
          medical: 0,
          total: 0
        },
        total: {
          fire: 0,
          flood: 0,
          power: 0,
          medical: 0,
          total: 0
        }
      }
    };
  }

  componentDidMount() {
    socket.on('connect', function () {
      socket.on('post',

        function (data) {
          let newAnalytics = this.state.analytics;


          /*
            {"name":"Sharla Fidele",
            "image":"http://localhost:3001/images/95.jpg",
            "problem":"Flood",
            "priority":"High",
            "content":"commodo irure sit velit mollit officia occaecat excepteur est cillum sint pariatur in ut id aliquip exercitation sunt duis mollit anim minim tempor cupidatat dolor cupidatat excepteur id dolor ullamco laborum"}
          */
          // Analyze incoming data and categorize it
          const priority = data["priority"].toLowerCase();
          const problem = data["problem"].toLowerCase();

          newAnalytics[priority][problem] += 1;
          newAnalytics[priority]["total"] += 1;

          newAnalytics["total"][problem] += 1;
          newAnalytics["total"]["total"] += 1;

          this.setState(
            {
              posts: [
                {
                  name: data.name,
                  image: data.image,
                  content: data.content,
                  problem: data.problem,
                  priority: data.priority,
                  time: Date.now(),
                  id: this.state.nextID
                },
                ...this.state.posts,
              ],
              nextID: this.state.nextID + 1,
              analytics: newAnalytics
            });
        }.bind(this));
    }.bind(this));
  }


  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container fixed>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/analytics" render={(props) => (
              <Analytics {...props} analytics={this.state.analytics} />
            )} />
            <Route exact path="/livefeed" render={(props) => (
              <LiveFeed {...props} posts={this.state.posts} />
            )} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
