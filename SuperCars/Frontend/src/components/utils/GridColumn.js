import React from 'react';

function GridColumn(props) {

    const { children, className, column, row} = props

    const style ={
        GridColumn: column,
        GridRow: row
    }

    return ( 
        <div className={className} style={style}>
            {children}
        </div>
     );
}

export default GridColumn;