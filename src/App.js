import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTenCats, addCatsInList } from "./store/actions";
import Navbar from './components/nav-bar';
import HomePage from './components/home-page';
import { Route, Switch } from 'react-router-dom';
import Pagination from './components/pagination'
class App extends Component {
  state = {
    page: 1,
  }
  componentDidMount() {
    this.getCats(1, 10, this.state.page , 'set')

  }

  getCats = async (categoryId, count, page, type) => {
    const dataProm = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${count}&page=${page}&category_ids=${categoryId}`);
    const data = await dataProm.json();
    if (type === "set") {
      this.props.setTenCats(data)

    } else {
      this.props.addCatsInList(data)
    }
  }
  handleGetNextList = () => {
    this.getCats(this.props.categories, 10, this.state.page + 1, "add");
    this.setState({ page: this.state.page + 1 });
  }
  render() {
    return (
      <div>

        <Navbar changeCatsList={this.getCats} />

        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
        <Pagination currentPage={this.state.page} handleGetNextList={this.handleGetNextList} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = {
  setTenCats,
  addCatsInList,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
