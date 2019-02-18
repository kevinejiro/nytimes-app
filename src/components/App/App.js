import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import './App.scss';
import { AppHeader } from '../common/AppHeader.js'
import { AppFooter } from '../common/AppFooter.js';

import { ArticleList } from '../ArticleList/ArticleList.js';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails.js';

class App extends Component {

  state = { articles: [], isLoading: false }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=MJ4FfwRcFW2UD0b72IBaFxA0aFMnRafp')
      this.setState({ articles: response.data.results, isLoading: false });

    } catch (error) {
      this.setState({ articles: [], isLoading: false });
    }
  }

  render() {
    const { articles, isLoading } = this.state;

    return (
      <div className="App">
        <AppHeader />
        {isLoading ? (<div className="text-center spinner-dark">
          <Spinner color="dark" />
        </div>) :
          [
            <Route
              key="article-list-router"
              exact
              path='/'
              render={() => <ArticleList articles={articles} />}
            />,
            <Route
              key="article-router"
              exact
              path='/:articleId'
              render={(matchProps) => <ArticleDetails articles={articles} {...matchProps} />}
            />
          ]
        }
        <AppFooter />
      </div>
    );
  }
}

export default App;
