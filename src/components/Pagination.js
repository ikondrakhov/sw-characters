import React from 'react';
import './Pagination.css';

class Pagination extends React.Component
{
    createPages(pagesNum) {
        const pages = [...Array(this.props.pagesNum).keys()];
        return pages.map(i => {
            return (<button
                key={i}
                onClick={() => this.props.onPageClick(i + 1)}>
                    {i + 1}
                </button>);
        })
    }

    render() {
    return (<div id="pages">
        {this.createPages(this.props.pagesNum)}
    </div>);
    }
}

export default Pagination;