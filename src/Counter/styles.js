import { css } from "emotion";

const styles = css`
  width: 200px;
  display: flex;
  background-color: #edf2f7;
  border: 4px solid #4a5568;
  border-radius: 7px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  .inc,
  .dec {
    background-color: #718096;
    border: none;
    color: #fff;
    height: 50px;
    width: 50px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    padding: 0;
    margin: 0;
    :hover {
      cursor: pointer;
      background-color: #4a5568;
    }
  }

  .count {
    color: #4a5568;
    user-select: none;
    font-size: 26px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default styles;
