import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor () {
        super()
        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct (id) {
        axios.delete(`/api/product/${id}`).then(response => {
            this.props.updateInventory(response.data);
        })
    }

    render () {
        let product = this.props.inventory.map((product, i) => {
            return (
                <Product key={i}
                    product={product}
                    deleteProduct={this.deleteProduct}/>
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