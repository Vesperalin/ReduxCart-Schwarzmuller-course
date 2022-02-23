import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = props => {
	const amountOfItems = useSelector(state => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const toggleCardHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button
			type='button'
			className={classes.button}
			onClick={toggleCardHandler}
		>
			<span>My Cart</span>
			<span className={classes.badge}>{amountOfItems}</span>
		</button>
	);
};

export default CartButton;
