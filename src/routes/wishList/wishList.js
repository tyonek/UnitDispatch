import React, { Component } from 'react';
import Items from '../../component/items/items'

export default class wishList extends Component {
    state={

    }
    render() {
        return (
            <div>
            {
                this.props.wishList.map((item,i)=> <Items item={item} key={i} addItemsToWishList={this.props.addItemsToWishList}/>)
            }
               
            </div>
        )
    }
}
