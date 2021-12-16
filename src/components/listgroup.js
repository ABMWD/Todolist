import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListGroup(props){
    const items = props.items;
    const listGroup = items.map(item => {
        return <div className="list" key = {item.key}>
            
            <p>
            <span>
                <FontAwesomeIcon className='Ricon' icon='trash' 
                onClick={ () => props.deleteItem(item.key)}/>
            </span>
            <input type = "text" id={item.key} value ={item.text} 
            onChange={
                (event) => {
                    props.updateItem(event.target.value, item.key)
                }
            }/> </p>
        </div>
    })
    return(
        <div>{listGroup}</div>
    )
}

export default ListGroup;