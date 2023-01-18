import React from "react";
import * as M from "./Map.styles";
import "../../styles/reset.css";

const Map = () => {
  return (
    <M.Container>
      <M.Fiter>
        <input />
        <button>검색</button>

        <select>
          <option>중식</option>
          <option>한식</option>
        </select>
      </M.Fiter>
      <M.ContainerBox>
        <M.Inner>지도에욤</M.Inner>
        <M.List>
          <M.Lists primary>
            <M.ItemImg src="/images/cake.jpg" />
            <M.ItemDec>
              <M.ItmeInfo primary>상호명 : 굽네치킨</M.ItmeInfo>
              <M.ItmeInfo>주소 : 서울특별시 서대문구 충정로 43-1</M.ItmeInfo>
              <M.ItmeInfo>전화번호 : 02-433-9292</M.ItmeInfo>
              <M.ItmeInfo>대표메뉴 : 치킨</M.ItmeInfo>
              <M.ItmeInfo>카테고리 : 인스턴트</M.ItmeInfo>
              <M.ItmeInfo>가격대 : 1만원 대</M.ItmeInfo>
            </M.ItemDec>
          </M.Lists>
          <M.Lists>
            <M.ItemImg src="/images/cake.jpg" />
            <M.ItemDec>
              <M.ItmeInfo primary>상호명 : 굽네치킨</M.ItmeInfo>
              <M.ItmeInfo>주소 : 서울특별시 서대문구 충정로 43-1</M.ItmeInfo>
              <M.ItmeInfo>전화번호 : 02-433-9292</M.ItmeInfo>
              <M.ItmeInfo>대표메뉴 : 치킨</M.ItmeInfo>
              <M.ItmeInfo>카테고리 : 인스턴트</M.ItmeInfo>
            </M.ItemDec>
          </M.Lists>
          <M.Lists primary>
            <M.ItemImg src="/images/cake.jpg" />
            <M.ItemDec>
              <M.ItmeInfo primary>상호명 : 굽네치킨</M.ItmeInfo>
              <M.ItmeInfo>주소 : 서울특별시 서대문구 충정로 43-1</M.ItmeInfo>
              <M.ItmeInfo>전화번호 : 02-433-9292</M.ItmeInfo>
              <M.ItmeInfo>대표메뉴 : 치킨</M.ItmeInfo>
              <M.ItmeInfo>카테고리 : 인스턴트</M.ItmeInfo>
            </M.ItemDec>
          </M.Lists>
        </M.List>
      </M.ContainerBox>
    </M.Container>
  );
};

export default Map;
