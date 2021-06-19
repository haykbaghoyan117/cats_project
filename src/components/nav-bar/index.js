import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from "../../store/actions";

class NavBar extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        this.categories()
    }

    categories = async () => {
        const el = await fetch('https://api.thecatapi.com/v1/categories');
        const arr = await el.json();
        return this.setState({ categories: arr });
    }


    onCatId = (id) => () => {
        this.props.setCategories(id)
        this.props.changeCatsList(id, 10, 1, 'set')
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="btn-group">
                {
                    categories.map(el => <button className="button" type='button' key={el.id} onClick={this.onCatId(el.id)}>{el.name}</button>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);