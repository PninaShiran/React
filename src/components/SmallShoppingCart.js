import { useSelector } from "react-redux";
import { sum } from "../store/reducers";
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function SmallShoppingCart(props) {
    let arr = useSelector(state=>state.s.orderArr);
    let cart = sum(arr);
    const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    props.closeDialog(false);

  };
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          עגלת הקניות שלך
        </DialogTitle>
        <DialogContent>
          <div>
                {arr.map(item=>{return(
                    <div className="ui card" key={item.id}>
                    <div className="image">
                      <img src={item.img}/>
                    </div>
                    <div className="content">
                      <h2>{item.name}</h2>
                      <div className="meta">
                        <span className="date">{`מחיר ליחידה:  ${item.price} ₪`}</span>
                        <h4>{`סה"כ:  ${item.price*item.amount} ₪`}</h4>
                      </div>
                    </div>
                  </div>
                )})}
                
                    <h3>{`סה"כ לתשלום:  ${cart.sum} ₪`}</h3>
                    <h3>{`סה"כ כמות המוצרים:  ${cart.cnt}`}</h3>
               
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            סגירה
          </Button>
        </DialogActions>
        </Dialog>
    );
}
    export default SmallShoppingCart;