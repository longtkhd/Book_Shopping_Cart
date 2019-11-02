import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/actionType/actionType'
import Item1 from '../images/Item1.jpg';
import Item2 from '../../src/images/Item2.jpg';
import Item3 from '../../src/images/Item3.jpg';
import Item4 from '../../src/images/Item4.jpg';
import Item5 from '../../src/images/Item5.jpg';
import Item6 from '../images/Item6.jpg'




const initState = {
    items: [
        { id: 1, title: 'Làm bạn với bầu trời', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, img: Item1, author: "Nguyễn Nhật Ánh" },
        { id: 2, title: '5 centimet trên giây', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, img: Item2, author: "Shinkai Makoto" },
        { id: 3, title: 'Bạn đắt giá bao nhiêu', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 12, img: Item3, author: "Văn Tình" },
        { id: 4, title: 'Cân bằng cảm xúc lúc giông bão', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 13, img: Item4, author: "Richard Nicholls" },
        { id: 5, title: 'Đừng lựa chọn an nhàn khi còn trẻ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, img: Item5 },
        { id: 6, title: 'Tuổi trẻ đáng giá bao nhiêu', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 15, img: Item6, author: "Rosie Nguyễn" },

    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = state.items.find(x => x.id === action.id)
            console.log("add" , addedItem);
            //Tìm những phần tử trong Items bên trên có id = action.id
            let existed_item = state.addedItems.find(x => action.id === x.id)
                //kiểm tra action id có tồn tại trong additems không
            console.log("trùng" ,existed_item);
            //test
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            } else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(x => x.id === action.id)
                //Tìm kiếm phần tử có id trùng với id phần tử trong action khi thực hiện handling event Remove
            let new_items = state.addedItems.filter(x => action.id !== x.id)
                // Xóa những phần tử có id khác với id trong action ,những phần tử còn lại lưu vào new_items
            let newTotal = state.addedItems.total - (itemToRemove.price * itemToRemove.quantily)
                // Tính lại tổng số tiền bằng tổng số ban đầu trừ đi giá của những phần tử xóa nhân số lượng
            return {
                ...state,
                addItems: new_items,
                total: newTotal
            }
        case ADD_QUANTITY:
            let add_item = state.items.find(x => x.id === action.id);         

            add_item.quantity++;
            console.log("add_item" , add_item.quantity)
            return {
                ...state,
                total: state.total + add_item.price
            }
            //thêm số lượng
        case SUB_QUANTITY:

            let item_sub = state.items.find(x => action.id === x.id);
            if(item_sub.quantity === 1){
                let new_item = state.addedItems.filter(x => x.id !== action.id);  
                // để lại những sách chưa xóa vào addedItems thôi           
                return {
                    ...state,
                    addedItems:new_item,
                    total: state.total - item_sub.price
                }
            }else {
                item_sub.quantity --;
                return {
                    ...state,
                    total: state.total -item_sub.price
                }
            }
        default:
            return state;
    }



}
export default cartReducer