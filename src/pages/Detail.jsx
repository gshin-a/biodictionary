import React from "react";
import style from "./Detail.module.css";
import { useLocation } from "react-router-dom";
import { info } from "../constants/info";

function Detail() {
  const { state } = useLocation();

  console.log(state);
  return (
    <div>
      <div className={style.title}>
        <img src={`/assets/image/${state.type}-default.png`} alt="title img" />
        <h1>{state.data.anmlGnrlNm}</h1>
        <h2>{info[state.type].kor}</h2>
      </div>
      <div className={style.content}>
        <div
          className={`${style.content_image} ${
            !state.data.imgUrl || state.data.imgUrl === "NONE"
              ? style.default_image
              : ""
          }`}
          style={{
            backgroundImage:
              !state.data.imgUrl || state.data.imgUrl === "NONE"
                ? `url("/assets/image/${state.type}-default.png")`
                : `url(${state.data.imgUrl})`,
          }}
        ></div>
        <table>
          <tbody>
            <tr>
              <td>문명</td>
              <td>
                {state.data.anmlPhlmKorNm}({state.data.anmlPhlmEngNm})
              </td>
            </tr>
            <tr>
              <td>강명</td>
              <td>
                {state.data.anmlClsKorNm}({state.data.anmlClsEngNm})
              </td>
            </tr>
            <tr>
              <td>목명</td>
              <td>
                {state.data.anmlOrdKorNm}({state.data.anmlOrdEngNm})
              </td>
            </tr>
            <tr>
              <td>과명</td>
              <td>
                {state.data.anmlFmlyKorNm}({state.data.anmlFmlyEngNm})
              </td>
            </tr>
            <tr>
              <td>속명</td>
              <td>
                {state.data.anmlGenusKorNm}({state.data.anmlGenusEngNm})
              </td>
            </tr>
            <tr>
              <td>국명</td>
              <td>{state.data.anmlGnrlNm}</td>
            </tr>
            <tr>
              <td>학명</td>
              <td>{state.data.anmlScnm}</td>
            </tr>
            <tr>
              <td>생태특징내용</td>
              <td>{state.data.eclgDpftrCont}</td>
            </tr>
            <tr>
              <td>일반특징내용</td>
              <td>{state.data.gnrlSpftrCont}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Detail;
