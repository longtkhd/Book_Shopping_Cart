import React from 'react';
import { connect} from 'react-redux';
import {increment } from '../../src/actions/cartAction'
import { decrement } from '../../src/actions/cartAction'


class Cart extends React.Component {
        handleIncrement = (id) => {
            this.props.increment(id);//creator action here
        }
        handleDecrement = (id) => {
            this.props.decrement(id);
        }

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


                <div className="row ">
                    <div className="col-xs-3 img-thumnail-custom">
                        <p className="image">
                            <img src={item.img} alt={item.desc}/>
                        </p>
                    </div>
                    
                    <div className="col-right">
                        <div className="box-info-product"><h3>{item.title}</h3></div>
                        <div className="">{item.desc}</div>
                        <div className="author">Cung cấp bởi <a href="abc.com">{item.author}</a></div>                 
                    </div>
                    <div className="box-pr pl-5">{item.price * item.quantity} $</div>  
                    
                            <div className="counter ml-5">
                        <button onClick={() => { this.handleDecrement(item.id) }} className="btn btn-primary" type="submit">-</button>
                        <button type="button" className="btn btn-light">{item.quantity}</button>
                    
                        <button onClick={() => { this.handleIncrement(item.id)}}className="btn btn-primary" type="submit">+</button>
                            </div>                  
                        
                    </div>                                           
                

                )  })



        return (    
            <div className="ml-5  mt-5">
                <div className="row ">
            <div className=" mt-5 border border-primary col-8  ">
                <h3 className="center " >Your Oders</h3>
                <div className="box ">
                    {addedItems }
                </div>
                  
                
            </div>
                    <div className="total col-3 mt-5  ml-2 sticky-top">
                <div className="total_price">
                        <p className="center ">Total:{this.props.total} $</p>
                            <button  type="button" className="btn btn-danger"> <i class="fa fa-shopping-cart fa-2x">    </i> BUY ITEMS</button>

                </div>
            </div>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (id) => { dispatch(increment(id)) },
        decrement : (id) => {dispatch(decrement(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);