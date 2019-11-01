import React from 'react';
import { connect} from 'react-redux';


class Cart extends React.Component {
    

    render() {
        let addedItems = this.props.items.map(item => {
            return (
                //  <div className="card mt-4" style={{ width: '18rem' }} key={item.id}>
                //      <img className="card-img-top" src={item.img} alt={item.title} />
                //      <div className="card-body">
                //          <h5 className="card-title">{item.title}</h5>
                //          <p className="card-text">{item.desc}</p>
                //          <p>
                //              <b>Quantity: {item.quantity}</b>
                //          </p>
                //          <p>
                //              <b>Total: {this.props.total} $</b>
                //              {/* lấy total từ state Items */}
                //          </p>
                        
                        
                //      </div>
                //  </div>


                <div className="row">
                    <div className="col-xs-3 img-thumnail-custom">
                        <p className="image">
                            <img src={item.img} alt={item.desc}/>
                        </p>
                    </div>
                    <div className="col-right">
                        <div className="box-info-product"><h3>{item.title}</h3></div>
                        <div className="">{item.desc}</div>
                        <div className="author">Cung cấp bởi <a href="#">{item.author}</a></div>                 
                    </div>
                    <div className="box-pr pl-5">{item.price * item.quantity} $</div>                                    
                </div>          
                )  })



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