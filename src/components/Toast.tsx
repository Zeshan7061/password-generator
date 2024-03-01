import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => (
	<ToastContainer
		position='top-center'
		autoClose={1000}
		draggable={false}
		closeOnClick
		pauseOnHover={false}
		theme='light'
		transition={Bounce}
		closeButton={false}
		className='min-w-fit m-auto'
	/>
);

export default Toast;
