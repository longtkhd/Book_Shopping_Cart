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
                        <p>
                            <b>Quantity: {item.quantity}</b>
                        </p>
                        <p>
                            <b>Total: {this.props.total} $</b>
                            {/* lấy total từ state Items */}
                        </p>
                        
                        
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
        items: state.addedItems,
        total : state.total
    }
}

export default connect(mapStateToProps)(Cart);