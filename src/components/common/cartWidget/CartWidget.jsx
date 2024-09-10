import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './cartWidget.css';

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>    
    </div>
  )
};

export default CartWidget;