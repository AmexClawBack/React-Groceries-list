
// App Component
class App extends React.Component {


    //State
    state = {
        groceries: groceryItems,
        product: '',
        brand: '',
        units: '',
        quantity: '',
        isPurchased:''
    }

    
    
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            product: this.state.product,
            brand: this.state.brand,
            quantity: this.state.quantity,
            units: this.state.units,
            isPurchased: this.state.isPurchased
        }
        // console.log(newItem)
        this.setState ({
            groceries: [newItem, ...this.state.groceries],
            product: '',
            brand: '',
            quantity: '',
            units: '',
            isPurchased: ''
        })
    }
    
    render() {
        // console.table(this.state.groceries)
        return(
            <div className="container">

            <h1>Grocery List</h1>
            <form onSubmit={this.handleSubmit} className="form">
                <label htmlFor='product'>Product:</label>
                <input id='product' type='text' value={this.state.product} onChange={this.handleChange}></input>

                <label htmlFor='brand'>Brand:</label>
                <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange}></input>
               
                <label htmlFor='quantity'>Quantity:</label>
                <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange}></input>

                <label htmlFor='units'>Units:</label>
                <input id='units' type='text' value={this.state.units} onChange={this.handleChange}></input>

                <label htmlFor='isPurchased'>Purchased:</label>
                <input id='isPurchased' type='radio' value={this.state.isPurchased} onChange={this.handleChange}></input>

                <input type='submit' />
               
            </form>

            <div>
                        <h2 className="preview">Preview our new item</h2>
                        <h3>{this.state.product}</h3>
                        <h4>{this.state.brand}</h4>
                        <h5>{this.state.quantity}</h5>
                        <h5>{this.state.units}</h5>
                    </div>

            <ul>
            {/* Returning full item list */}
            {this.state.groceries.map(item => {
                return (
                 <ProductList item={item}/>
                )
            })}
        </ul>
        </div>
        )
    }

}
     


ReactDOM.render(
    <App />,
    document.querySelector('#container')
)