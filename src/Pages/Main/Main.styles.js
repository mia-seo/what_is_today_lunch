import styled from "styled-components";

export const MenuTab = styled.div`
  width: 90%;
  margin: 50px auto;
  overflow-x: hidden;
`;

export const CategoriTab = styled(MenuTab)`
  font-size: 30px;
`;

export const Tab = styled.ul`
  display: flex;
`;

export const CategoriTabLi = styled.li`
  margin: 10px;
  width: 100%;
  background-color: white;
  border: 1px solid tomato;
  border-radius: 10px;
  color: tomato;
  text-align: center;
  padding: 20px;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: tomato;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
  }
`;
