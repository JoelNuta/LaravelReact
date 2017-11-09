import React from 'react';

/* Ui con li */
export class List extends React.Component{

    render (){
        const dataList = this.props.dataList
        const liList = dataList.map( (data) => {
            return <li key={data}>{data}</li>
        })
        return <ul>{liList}</ul>
    }

}