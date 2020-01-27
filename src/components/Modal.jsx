import React, {Component} from 'react';
import { ProductConsumer } from '../Context';
// import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import '../App.scss'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const{img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <div className="modal-container">
                                <div className="container">
                                    <div className="row">
                                        <div id="modal1" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                                            <h5>محصول به سبد اضافه شد. </h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5> {title} </h5>
                                            <h5 className="text-muted">قیمت : $ {price} </h5>
                                            <Link to='/'>
                                                <button className="bluebutton mr-3" onClick={() => closeModal()}>
                                                    ادامه خرید
                                                </button>
                                            </Link>
                                            <Link to='/cart'>
                                                <button className="bluebutton" onClick={() => closeModal()}>
                                                    سبد خرید
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}