import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.div`
    width: calc(90% - 20px);
    padding: 30px 10px 0 18px;
    font-size: 16px;
    outline: none;
    font-family: Pretendard;
    font-weight: 500;
`;

export const Arrow = styled.span`
    font-size: 20px;
    color: #888;
`;

export const DropZone = styled.div`
    width: calc(90% - 20px);
    min-height: 326px; 
    padding: 10px;
    background: #F2F6FF;
    border-radius: 12px;
`;

export const Zone = styled.div`
    /* width: calc(90% - 20px); */
    min-height: 326px; 
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
`;