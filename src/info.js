import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, adress, phoneNm] = useState("");
  const [setName, setAdress, setPhoneNm] = useState("");
  useEffect(() => {
    console.log("렌더링 완료 확인!");
    console.log({
      name,
      adress,
      phoneNm,
    });
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeadress = (e) => {
    setAdress(e.target.value);
  };
  const onChangePhoneNm = (e) => {
    setPhoneNm(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          placeholder="성함을 입력해주세요."
          onChange={onChangeName}
        />
        <input
          value={adress}
          placeholder="주소를 입력해주세요."
          onChange={onChangeadress}
        />
        <input
          value={phoneNm}
          placeholder="핸드폰 번호를 입력해주세요."
          onChange={onChangePhoneNm}
        />
      </div>
      <div>
        <div>
          <b>성함 :</b>
          {name}
        </div>
        <div>
          <b>주소 :</b> {adress}
        </div>
        <div>
          <b>핸드폰 번호 :</b> {phoneNm}
        </div>
      </div>
    </div>
  );
};

export default Info;
