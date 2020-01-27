import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <Title name="our" title="product" />
                            </div>
                            <div className="row">
                                <ProductConsumer>
                                    {(value)=>{
                                        return value.products.map(product =>{
                                            return <Product key={product.id} product={product} />
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
