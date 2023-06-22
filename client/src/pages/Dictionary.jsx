import React, { useState } from "react";
import { requestList } from "../services/api";
import { useEffect } from "react";
import style from "./Dictionary.module.css";
import Item from "./Dictionary/Item";
import { typeList, info, description } from "../constants/info";

function Dictionary() {
  const [type, setType] = useState("mamm");
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [searchName, setSearchName] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSearchName(searchInput);
  }

  function handlePageNo(e, type = "event") {
    window.scrollTo(0, 0);
    setLoading(true);
    // eslint-disable-next-line default-case
    switch (type) {
      case "event":
        setPageNo(Number(e.target.value));
        break;
      case "prev":
        if (e % 5 === 1) {
          setStart(start - 5);
        }
        setPageNo(e - 1);
        break;
      case "next":
        if (e % 5 === 0) {
          setStart(start + 5);
        }
        setPageNo(e + 1);
    }
  }

  useEffect(() => {
    requestList({
      type,
      searchName,
      numOfRows: 20,
      pageNo,
    }).then((res) => {
      setTotalCount(res.totalCount);
      if (res && res.items.item) {
        const data = res.items.item;
        if (data.length) {
          setData(data);
        } else {
          setData([data]);
        }
      } else {
        alert("검색결과가 존재하지 않습니다.");
        setSearchName("");
      }
      setLoading(false);
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
                setLoading(true);
                setData([]);
                setStart(0);
                setPageNo(1);
                setSearchName("");
                setSearchInput("");
                setType(e);
              }}
              className={`${type === e ? style.selected : ""} ${
                type === e ? style.disable : ""
              }`}
              disabled={loading || type === e}
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
        <div className={style.count}>
          전체 생물 수 <strong>{totalCount}</strong>
        </div>
        <div className={style.content}>
          {data.map((e) => {
            return (
              <Item
                key={e[info[type].id]}
                type={type}
                id={e[info[type].id]}
                name={e[info[type].name]}
                pageNo={pageNo}
              />
            );
          })}
        </div>
        <div className={style.pagination}>
          <button
            className={pageNo <= 1 || loading ? style.disable : ""}
            onClick={() => handlePageNo(pageNo, "prev")}
            disabled={pageNo <= 1 || loading}
          >
            &lt;
          </button>
          {Array(5)
            .fill()
            .map((v, i) => i + 1 + start)
            .map((e) => (
              <button
                key={e}
                className={`${pageNo === e ? style.selected : ""} ${
                  loading || pageNo === e || e > Math.ceil(totalCount / 20)
                    ? style.disable
                    : ""
                }`}
                onClick={handlePageNo}
                value={e}
                disabled={
                  loading || pageNo === e || e > Math.ceil(totalCount / 20)
                }
              >
                {e}
              </button>
            ))}
          <button
            className={
              pageNo >= Math.ceil(totalCount / 20) || loading
                ? style.disable
                : ""
            }
            onClick={() => handlePageNo(pageNo, "next")}
            disabled={pageNo >= Math.ceil(totalCount / 20) || loading}
          >
            &gt;
          </button>
        </div>
        <div
          className={`${style.loading} ${style.loading2} ${
            loading ? "" : style.hidden
          }`}
        >
          <img src="/assets/image/loading.gif" alt="loading" />
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
