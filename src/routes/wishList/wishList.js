import React, { Component } from 'react';
import Items from '../../component/items/items'

export default class wishList extends Component {
    state={

    }
    render() {
        return (
            <div>
            {
                this.props.wishList.map((item)=> <Items item={item} addItemsToWishList={this.props.addItemsToWishList}/>)
            }
               
            </div>
        )
    }
}
