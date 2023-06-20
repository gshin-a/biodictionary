import React, { useEffect, useState } from "react";
import style from "../Dictionary.module.css";
import { requestOne } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Item({ type, id, name }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    if (!loading) {
      if (!data) {
        alert("상세보기가 불가능한 생물입니다.");
      } else {
        const sendData = { data, type };
        navigate("/detail", { state: sendData });
      }
    } else {
      alert("데이터를 불러오는 중입니다.. 잠시 후 다시 시도해주세요.");
    }
  }

  useEffect(() => {
    requestOne({
      type,
      id,
    }).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [type, id]);

  return (
    <div>
      <div className={style.item} onClick={handleClick}>
        <img
          className={data && data.imgUrl !== "NONE" ? "" : style.default_image}
          src={
            data && data.imgUrl !== "NONE"
              ? data.imgUrl
              : `/assets/image/${type}-default.png`
          }
          alt="dictionary item"
        />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Item;
