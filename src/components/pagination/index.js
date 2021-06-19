import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Pagination extends Component {
    render() {
        const { handleGetNextList, currentPage } = this.props;
        return (
        <div className="btn-group">
              <button className="button" onClick={handleGetNextList}>next</button>
        </div>
        )
    }
}
Pagination.propTypes = {
    handleGetNextList: PropTypes.func,
    currentPage: PropTypes.number,
}