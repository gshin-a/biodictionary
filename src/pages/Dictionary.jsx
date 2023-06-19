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

  function handleSubmit(e) {
    e.preventDefault();
    setSearchName(searchInput);
  }

  useEffect(() => {
    requestList({
      type,
      searchName,
      numOfRows: 20,
      pageNo: 1,
    }).then((res) => {
      console.log(res);
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
  }, [type, searchName]);

  if (data && data.length > 0) {
    return (
      <div className={style.dictionary}>
        <div className={style.category}>
          {typeList.map((e) => (
            <button
              key={e}
              onClick={() => {
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
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Dictionary;
