

const InputQuantity = ({ quantity, setQuantity , stock}) => {

    /* Add and Menus quantity Cart */ 
    const addQuantity = () => {
        
        if(quantity === stock ) return;
        setQuantity(quantity+1);
    }
    const minusQuantity = () => {
        
        if(quantity === 1) return;
        setQuantity(quantity-1);
    }

    return (
        <div >
            <label htmlFor="quantity">Quantity:</label>
            <div className="box-price">
               <button  className="btn btn-secondary" onClick={minusQuantity}>-</button> 
                <input type="number" id="quantity"  className="form-control text-center" value={quantity} disabled/>
                <button className="btn btn-secondary" onClick={addQuantity}>+</button>
            </div>
            
        </div>
    );
};

export default InputQuantity;
