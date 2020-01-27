import React from 'react'

export default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p> محصولات </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p> نام محصول </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p> قیمت </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p> تعداد </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p> حذف </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p> کل </p>
                </div>
            </div>
        </div>
    );
}