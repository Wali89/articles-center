import React from 'react';

const SourceTableRow = (props) => {
    return (
        <React.Fragment>
            <StyledTableRow>
            <StyledData1>
                    <input className="formCheckInput" type="checkbox" onChange={props.onChange} checked={props.checkVal} value={props.val} />
                </StyledData1>
                <td>{props.source.name}</td>
                <td>{props.source.category}</td>
                <td>{props.source.description}</td>
                <td><StyledTableLink href={props.source.url} target="_blank" rel="noopener noreferrer">{props.source.url}</StyledTableLink></td>
            </StyledTableRow>
        </React.Fragment>
    )
}