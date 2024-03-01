import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Form from './components/Form';

function App() {
	return (
		<div className='bg-blue-950 h-screen grid place-content-center bg-gradient-to-b from-cyan-500 to-blue-500'>
			<h1 className='my-5 mx-auto text-3xl text-indigo-50 font-bold p-2 w-full text-center animate-bounce tracking-widest'>
				Password Generator App
			</h1>

			<Form />
		</div>
	);
}

export default App;
