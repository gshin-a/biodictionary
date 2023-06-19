import React, { useState } from "react";
import { requestList } from "../services/api";
import { useEffect } from "react";
import style from "./Dictionary.module.css";
import Item from "./Dictionary/Item";
import { typeList, info, description } from "../constants/info";

function Dictionary() {
  const [type, setType] = useState("mamm");
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchName, setSearchName] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [start, setStart] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchName(searchInput);
  }

  function handlePageNo(e) {
    console.log(typeof e.target.value);
    console.log(typeof pageNo);
    setPageNo(e.target.value);
  }

  useEffect(() => {
    requestList({
      type,
      searchName,
      numOfRows: 20,
      pageNo,
    }).then((res) => {
      //   console.log(res);
      if (res) {
        if (res.length) {
          setData(res);
        } else {
          setData([res]);
        }
      } else {
        console.log("검색결과가 존재하지 않음");
      }
    });
  }, [type, searchName, pageNo]);

  if (data && data.length > 0) {
    return (
      <div className={style.dictionary}>
        <div className={style.category}>
          {typeList.map((e) => (
            <button
              key={e}
              onClick={() => {
                setData([]);
                setPageNo(1);
                setSearchName("");
                setSearchInput("");
                setType(e);
              }}
              className={type === e ? style.selected : ""}
            >
              {info[e].kor}
            </button>
          ))}
        </div>
        <form className={style.search} onSubmit={handleSubmit}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        <div className={style.title}>
          <h2>
            <strong>{info[type].kor}</strong> 도감
          </h2>
          <p>{description[type]}</p>
        </div>
        <div className={style.content}>
          {data.map((e) => {
            return (
              <Item
                key={e[info[type].id]}
                type={type}
                id={e[info[type].id]}
                name={e[info[type].name]}
                imgUrl={e.imgUrl}
              />
            );
          })}
        </div>
        <div className={style.pagination}>
          <button onClick={() => setStart(start - 5)}>&lt;</button>
          {Array(5)
            .fill()
            .map((v, i) => i + 1 + start)
            .map((e) => (
              <button
                key={e}
                className={pageNo === e ? style.selected : ""}
                onClick={handlePageNo}
                value={e}
              >
                {e}
              </button>
            ))}
          <button onClick={() => setStart(start + 5)}> &gt;</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.loading}>
        <img src="/assets/image/loading.gif" alt="loading" />
      </div>
    );
  }
}

export default Dictionary;
