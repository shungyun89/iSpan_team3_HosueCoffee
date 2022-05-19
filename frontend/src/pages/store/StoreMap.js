import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';

// component
import StoreCard from './StoreCard';

// CSS
import './mapStyle.scss';

// icons
import { FiSearch } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";


function StoreMap(){

  // 開啟詳細選單(透過StoreCard傳送className)
  const [cardDetailCss, setCardDetailCss] = useState();
  
  // 關閉詳細選單 function
  const closeCardDetail = ()=>{
    setCardDetailCss(``)
  }


  // 接收子組件資料，放到cardDetail
  const [dataFromStoreCard, setDataFromStoreCard] = useState([[],[],[]])
  // console.log(dataFromStoreCard);

  return(
    <>
      <div className="mapAndCardWrap">
        <div>
          <div className="storeSearch">
            <input className="store-search-input" name="search-for" placeholder="搜尋門市名稱或地址"></input>
            <a href="">
              <FiSearch />
            </a>
          </div>
          <div className="cardGroupWrap">
            <div className={`cardDetail ${cardDetailCss}`}>
              <li className="closeCardDetail" onClick={closeCardDetail}>
                <IoArrowBack />
              </li>
              <div>
                <h5>營業時間</h5>
                {dataFromStoreCard[0].map((time, i)=>{
                  return(
                      <li key={i}>
                      { time.includes('休息') ? time.substr(0, 6) : time}
                      </li>
                  )
                })}
              </div>
              <br></br>
              <div>
                <h5>門市服務</h5>
                <div className="storeServeList">
                  {dataFromStoreCard[1].map((icon, i)=>{
                    return(
                      <li key={i}>{icon}</li>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="storeWrap">
              <StoreCard setDataFromStoreCard={setDataFromStoreCard} setCardDetailCss={setCardDetailCss}/>
            </div>
          </div>
        </div>
        <div className="mapWrap">
        </div>
      </div>
    </>
  );
}

export default StoreMap