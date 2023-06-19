import React, { useEffect, useState } from "react";
import style from "../Dictionary.module.css";
import { requestOne } from "../../services/api";

function Item({ type, id, name }) {
  const [data, setData] = useState();

  useEffect(() => {
    requestOne({
      type,
      id,
    }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [type, id]);

  return (
    <div>
      <div className={style.item}>
        <img
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
