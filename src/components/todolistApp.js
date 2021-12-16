import React from 'react';
import ListGroup from './listgroup'
import './todolistApp.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);


 class Todolist extends React.Component {
     constructor(props){
         super(props);
         this.state={
             items: [],
             currentItem: {
                 text: '',
                 key: '',
             }
             
         }
         this.handleInput = this.handleInput.bind(this);
         this.addItem = this.addItem.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
         this.updateItem = this.updateItem.bind(this);
     }
     handleInput(event){
         this.setState({
             currentItem: {
                 text: event.target.value,
                 key: Date.now()
             }
         })

     }
     addItem(event){
         event.preventDefault();
         const newItem = this.state.currentItem;
         if(newItem.text!==""){
             const items=[...this.state.items, newItem];
             this.setState({
                 items:items,
                 currentItem:{
                     text:'',
                     key:''
                 }
             })
         }
     }

     deleteItem(key){
         const filteredItem = this.state.items.filter( item => item.key!==key);
         this.setState ({
             items: filteredItem
         })
     }

     updateItem(text, key){
         const items = this.state.items;
         items.map(item => {
             if(item.key === key){
                 item.text=text;
             }
         })
         this.setState({
             items: items
         })
     }
     render(){
         return (
             <>
                 <header>
                     <div className="header">
                         <h1>To Do List</h1>
                     </div>
                 </header>
                 

                 
                     <div className="container">
                         <div className="col">
                             <form id="todoForm" className="Todolist" onSubmit={this.addItem}>
                                 <input type="text" placeholder="Enter Task" 
                                 value={this.state.currentItem.text}
                                 onChange={this.handleInput}/>
                                 <button id = "btn" type="submit">Add</button>
                                 </form>
                         </div>
                     </div>

                     <ListGroup items = {this.state.items}
                        deleteItem = {this.deleteItem}
                        updateItem = {this.updateItem}>
                            
                    </ListGroup>
              </>   
            
         )
     }
 }

 export default Todolist;