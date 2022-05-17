import styled from "styled-components";

const TableStyled = styled.table`
    position:relative;
    border:1px solid #999;
    border-radius:15px;
    padding:  10px ;
    padding-bottom:50px;
    max-width:500px;
    width:100%;
    margin:20px auto;
    box-shadow: 5px  3px 12px #8581814c;

    th,
    td{
        padding:5px 25px;
    }

    .noData{
        color:red;
        text-align:center;
        font-size:48px;
        position:absolute;
        right:35px;
    }

    .result{
        position:absolute;
        bottom:6px;
        right:20px;
        text-align:center;
        color:blue;
        font-size:40px;
    }
`

export default TableStyled;