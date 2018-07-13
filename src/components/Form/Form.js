import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            price: 0,
            image_url: '',
        }
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: [event.target.value],
        })
    }

    cancelChange () {
        this.setState({
            name: '',
            price: 0,
            image_url: '',
        })
    }

    addNewProduct () {
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url
        }
        axios.post('/api/product', newProduct)
            .then(response => this.props.updateInventory(response.data))
    }

    render () {
        console.log(this.state);
        return (
            <div>               
                <div>Form</div>
                <div>
                    <h3>Image URL:</h3>
                    <input name='image_url'
                        value={this.image_url}
                        onChange={(e) => this.handleChange(e)}/>
                </div>
                <div>
                    <h3>Product Name:</h3>
                    <input name='name'
                        value={this.name}
                        onChange={(e) => this.handleChange(e)}/>
                </div>
                <div>
                    <h3>Price:</h3>
                    <input name='price'
                        value={this.price}
                        onChange={(e) => this.handleChange(e)}/>
                </div>
                <div>
                    <button onClick={() => this.cancelChange()}>Cancel</button>
                    <button onClick={() => this.addNewProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}