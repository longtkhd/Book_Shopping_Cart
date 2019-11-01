import React from 'react';
import { connect } from 'react-redux'
import { addToCart} from '../actions/cartAction'


class Home extends React.Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        let itemList = this.props.items.map(item => {
            return (
                // <div className="card mt-3 shadow p-3 mb-5 bg-white rounded " key={item.id}>
                //     <div className="card-image">
                //         <img src={item.img} alt={item.title} />
                //         <span to="/" className="" onClick={() => { this.handleClick(item.id) }}><i class="fa fa-plus fa-1x">Add</i></span>
                //         <br/>
                //         <span className="card-title">{item.title}</span>
                //     </div>
                //     <div className="card-content">
                //         <p>{item.desc}</p>
                //         <p><b>Price: {item.price}$</b></p>
                //     </div>
                // </div>
                <div className="card mt-4" style={{ width: '18rem' }} key={item.id}>
                    <img className="card-img-top" src={item.img} alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                        <a href="/" className="btn btn-primary" onClick = {()=>this.handleClick(item.id)}>Add</a>                       
                    </div>
                </div>
            )
        })
        return (
            <div className="container mt-5em">
                <h3 className="center " >OUR BOOK</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);