class Product extends React.Component {
    state = {
        isPurchased: false
    }
    
    render() {
        return (
            <li onClick={() => this.props.handleAdd(this.props.item)}>
            {this.props.item.product} 
            {this.props.item.brand}
            {
            this.state.isPurchased
            ?
            <span> is purchased</span>
            : ''
            }
        </li>
        )
    }
}