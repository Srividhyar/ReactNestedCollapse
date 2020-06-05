import styled from "styled-components";

const CollapseStyle = styled.div`
  .group-container {
    margin: 30px;
  }
  .division-container {
    margin: 15px;
  }
  .hide {
    display: none;
  }
  .collapse-content {
    margin: 20px;
  }
  .expand {
    width: 15px;
    height: 15px;
    background-image: url("https://img.icons8.com/android/2x/minus.png");
    background-repeat: no-repeat;
    background-size: contain;
    border: 0.5px solid #444;
    margin-right: 5px;
    padding: 2px;
  }
  .plus {
    background-image: url("https://img.icons8.com/android/2x/plus.png");
  }
`;

export default CollapseStyle;
