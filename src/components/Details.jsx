import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
// import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col10 mx-auto col-md-6 my-3">
                                    <h2>مدل: {title} </h2>
                                    <h4 className="text-title text-muted mt-3 mb-2">
                                        سازنده : <span> {company} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            قیمت : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-5">
                                        اطلاعات محصول
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <button className="bluebutton">
                                                برگشت به محصول
                                            </button>
                                        </Link>
                                        <button cart onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }} disabled={inCart ? true : false} className="bluebutton ml-2">
                                            {inCart ? "در سبد" : "اضافه به سبد"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
