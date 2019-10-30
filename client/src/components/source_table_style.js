import styled from 'styled-components';

export const StyledTable = styled.table`
    color:#595959;
`;

export const StyledTableHeader = styled.th`
    padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #3F5941;
      color: white;
`;

export const StyledTableRow = styled.tr`
    &:nth-child(even){background-color: #e6e6e6;}
`;

export const StyledData1 = styled.td`
    margin: 2px;
    text-align: center;
`;

// ToDo: not DRY - duplicating StyledTableHeader details
export const StyledTableHeaderTD1 = styled.td`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3F5941;
    color: white;
    margin: 2px;
    text-align: center;
`;
export const StyledTableLink = styled.a`
    color: #3F5941;
`;