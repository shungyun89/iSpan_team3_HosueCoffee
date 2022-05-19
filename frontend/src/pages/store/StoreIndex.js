import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import React from 'react';
import './mapStyle.scss';

import logo from '../../component/img/logo.svg';
import img01 from './img/storeIndex-img01.png';
import img02 from './img/storeIndex-img02.png';

import StoreMap from './StoreMap';

function StoreIndex(props){

  let { path, url } = useRouteMatch();

  return(
    <>
      <div className="storeBanner"></div>
        <div className="storeIndex">
          <div>
            <p>~NEWS</p>
            <img src={logo} alt=""></img>
            <p>~NEWS</p>
            <a>最新消息</a>
          </div>
          <div>
            <img src={img01} alt=""></img>
            <Link to={"/store/map"}>門市查詢</Link>
          </div>
          <div>
            <img src={img02} alt=""></img>
            <Link to={"/store/mapTest"}>門市服務 測試資料</Link>
          </div>
        </div>
    </>
  );
}

export default StoreIndex