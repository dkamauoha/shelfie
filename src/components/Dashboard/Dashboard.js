import React, { Component } from 'react';

import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        let product = this.props.inventory.map((product, i) => {
            return (
                <Product key={i}
                    product={product}
                    updateInventory={this.props.updateInventory}/>
            )
        })
        return (
            <div>
                <div>Dashboard</div>
                <div>{product}</div>
            </div>
        )
    }
}