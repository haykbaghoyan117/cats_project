import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        const { tenCats } = this.props;
        return (
            <div>
                {
                    tenCats?.map(({ id, url }) => {
                        return (<img key={id} src={url} alt="" />)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tenCats: state.tenCats
    }
}

const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);