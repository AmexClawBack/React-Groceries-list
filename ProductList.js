class ProductList extends React.Component {
    render() {
        return(
           <li>{this.props.item.product} {this.props.item.brand} {this.props.item.quantity} {this.props.item.units} {this.props.item.isPurchased}</li>
        )
    }
}