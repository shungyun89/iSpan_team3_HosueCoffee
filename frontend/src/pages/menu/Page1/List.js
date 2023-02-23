import React,{ useState} from 'react';
import Counter from '../component/Counter';
const List = (props) => {
    const datas1 = JSON.parse(localStorage.getItem('gifts'))
    const [datasNEW, setdatasNEW] = useState(datas1)
    const [totalPrice1, settotalPrice1] = useState()
    const {datas,totalprice,settotalprice} = props 
    const datasmath=datas.length
    const datas1math=datas1.length
    let all= 0
    var menuCart=[];
    for( let i=0; i<datasmath; i++){ 
        for( let c=0; c<datas1math; c++){
            if(datas[i].id === datas1[c].id){ 
                var newdata = datas[i]  
                var newarr = newdata
                menuCart.push(newarr)
            } 
        } 
    }   
    return(
        <> 
            {menuCart.map((to,i)=>{
                const menuimg = (to.drink_name)
                const total = datas1[i].drinkCounter
                const price = to.price
                all = all+(total*price)
                settotalprice(all)
                return(
                    <div className="list" key={to.id}> 
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="col-1">
                                <img 
                                    className="listImg" 
                                    src={require('../img/'+ menuimg +'.jpg')} 
                                    alt="fake"
                                />
                            </div>
                            <div className="nameRotate">
                                <div className="col-6 coffeeName">
                                    <span>
                                        {to.drink_name}
                                    </span>
                                </div>
                                <div className="d-flex col-6 amount">
                                    <div className="quantityText">
                                        數量：
                                    </div>
                                    <Counter 
                                        Counter={total} 
                                        id={datas1[i].id}
                                        datas={menuCart}
                                        price={price}
                                        settotalPrice1={settotalPrice1}
                                        totalprice={totalprice}
                                        settotalprice={settotalprice}
                                    />
                                </div>
                            </div>
                            <div className="delete1">
                                <div  
                                    className='btn deletebtn' 
                                    herf="/"
                                    onClick={()=>{ 
                                        datasNEW.splice(i,1)
                                        localStorage.setItem("gifts", JSON.stringify(datasNEW))
                                        const datas222 = JSON.parse(localStorage.getItem('gifts'))
                                        setdatasNEW(datas222)
                                    }}
                                >
                                    刪除
                                </div>
                            </div>
                            <div className="price">
                                {total*price}               
                            </div>
                        </div>
                    </div>
                )
            })}
        </>   
    )    
}

export default List