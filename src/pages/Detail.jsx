import React from "react";
import style from "./Detail.module.css";
import { useLocation } from "react-router-dom";
import { info, detailInfo } from "../constants/info";

function Detail() {
  const { state } = useLocation();

  if (state.data) {
    return (
      <div>
        <div className={style.title_wrap}>
          <div className={style.title}>
            <img
              src={`/assets/image/${state.type}-default.png`}
              alt="title img"
            />
            <h1>{state.data[detailInfo[state.type]["국명"][0]]}</h1>
            <h2>{info[state.type].kor}</h2>
          </div>
        </div>
        <div className={style.content}>
          <section>
            <div
              className={`${style.default_image} ${
                !state.data.imgUrl || state.data.imgUrl === "NONE"
                  ? ""
                  : style.hidden
              }`}
              style={{
                backgroundImage: `url("/assets/image/${state.type}-default.png")`,
              }}
            ></div>
            <div
              className={`${style.content_image} ${
                !state.data.imgUrl || state.data.imgUrl === "NONE"
                  ? style.hidden
                  : ""
              }`}
            >
              <img
                src={
                  !state.data.imgUrl || state.data.imgUrl === "NONE"
                    ? ""
                    : state.data.imgUrl
                }
                alt="content img"
              />
            </div>
            <table>
              <tbody>
                {Object.keys(detailInfo[state.type]).map((key) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>
                      {detailInfo[state.type][key].length > 1
                        ? `${state.data[detailInfo[state.type][key][0]]}(${
                            state.data[detailInfo[state.type][key][1]]
                          })`
                        : state.data[detailInfo[state.type][key][0]]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section></section>
        </div>
      </div>
    );
  } else {
    <div className={style.loading}>
      <img src="/assets/image/loading.gif" alt="loading" />
    </div>;
  }
}

export default Detail;
