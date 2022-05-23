import React from 'react';
import { useState } from 'react';
import '../styleCheckout.scss'
import Fakeing from '../Fakeimg150.png'
import Counter from '../component/Counter';
import Button from '../component/Button';

const List = (props) => {


    let[Counter1, setCounter1] = useState('')
    let price1 =Number(150)

    const {setList}  = props

    return(
    <div className="list">
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-3">
                    <img className="listImg" src={Fakeing} alt="fake" />
                </div>
                <div className="nameRotate">
                    <div className="col-6 coffeeName">
                        <span>可可綿雲琪朵</span>
                    </div>
                    <div className="d-flex col-6 amount">
                        <div className="quantityText">
                            數量：
                        </div>
                        <Counter setCounter1={setCounter1}/>
                    </div>
                </div>
                <div className="delete1">
                    <Button name="刪除" herf="/"/>
                <div className="trash">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                </div>

                <div className="price">
                    {price1*Number(Counter1)}   
                </div>
            </div>
        </div>
)
    }


export default List