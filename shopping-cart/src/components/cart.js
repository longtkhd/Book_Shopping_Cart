import React from 'react';
import { connect} from 'react-redux';


class Cart extends React.Component {
    

    render() {
        let addedItems = this.props.items.map(item => {
            return (
                <div className="card mt-4" style={{ width: '18rem' }} key={item.id}>
                    <img className="card-img-top" src={item.img} alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                        <span className="btn btn-primary" onClick={() => this.handleClick(item.id)}>Add</span>
                    </div>
                </div>
            )
        })



        return (
            <div className="container mt-5">
                <h3 className="center " >Your Oders</h3>
                <div className="box">
                    {addedItems }
                </div>
            </div>
        );
    }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart);