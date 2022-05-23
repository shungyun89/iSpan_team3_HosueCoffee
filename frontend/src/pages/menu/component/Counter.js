import React from 'react';
import { useState} from 'react';
import '../styleCheckout.scss'



const Counter = (props) => {

    let [quantity, setquantity] = useState(1)
    const {setCounter1}  = props

    // let [Counter,setCounter] = useState('quantity')

    let buttonsub = null

    if(quantity > 1){

        buttonsub = <div 
                        className="btn buttonLeft" 
                        onClick={() => { 
                            setquantity(quantity - 1) 
                            setCounter1(quantity - 1)
                        }}>-</div>

    }else{

        buttonsub =  <div className="btn buttonLeft">-</div>
    }

    return (
        
        <div className="d-flex numButton">
            {buttonsub}
            <div className="quantity">
            {quantity}
            </div>
            <div
                className="btn buttonRight"
                onClick={() => {
                    setquantity(quantity + 1);
                    setCounter1(quantity+1)}}
            >+</div>
        </div>

    )
}

export default Counter