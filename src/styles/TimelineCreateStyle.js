import styled from "styled-components";

export const TimelineCreate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const DropZone = styled.div`
    width: calc(90% - 20px);
    min-height: 326px; 
    padding: 10px;
    background: ${(props) => (props.isOver ? "#e0eaff" : "#F2F6FF")};
    border: 2px dashed ${(props) => (props.isOver ? "#387DFF" : "#d1d5db")};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 10px;
    transition: background 0.3s, border 0.3s;
`;

export const ScrapItem = styled.div`
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    width: 180px;
    text-align: center;
    cursor: grab;
    transform: rotate(${() => Math.random() * 6 - 3}deg); /* 랜덤 회전 */
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ButtonArea = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const CreateButton = styled.button`
    background-color: #3b82f6;
    color: white;
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 16px;
    transition: background 0.3s;
`;

export const InputField = styled.input`
    width: calc(90% - 20px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    margin-bottom: 16px;
    outline: none;
    font-family: Pretendard;
    font-weight: 500;
    &:focus {
        border-color: #3b82f6;
    }
`;
