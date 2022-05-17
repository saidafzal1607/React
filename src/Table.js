import React from 'react';
import Thead from './Thead';
import TableStyled from './styles/Table.styled';
import Tbody from './Tbody';
const Table = () => {
    return (
        <TableStyled>
            <Thead/>
            <Tbody />
        </TableStyled>
    );
};

export default Table;