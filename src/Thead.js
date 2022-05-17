import React from 'react';
import StyledThead from './styles/Thead.styled';


const Thead = () => {
    return (
        <StyledThead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
            </tr>
        </StyledThead>
    );
};

export default Thead;