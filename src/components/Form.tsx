import { useState } from 'react';
import InputItem from './InputItem';

const Form = () => {
	const [options, setOptions] = useState({
		lowercase_letters: true,
		uppercase_letters: true,
		special_letters: true,
		numbers: true,
	});
	const labelClass =
		'flex justify-between items-center p-2 font-semibold shadow-md transition-all hover:shadow-lg';

	return (
		<form className='flex flex-col gap-4 p-5 rounded-md shadow-2xl min-w-full sm:w-[80vw] md:w-[50vw] lg:w-[40vw] bg-white'>
			<div className='flex justify-between gap-2'>
				<input
					type='text'
					readOnly
					placeholder='Password...'
					className='p-2 flex-1 border-none shadow-md bg-blue-100 font-bold outline outline-none text-blue-800'
				/>
				<button
					type='button'
					className='bg-blue-800 p-2 font-semibold text-white cursor-pointer shadow-md hover:bg-blue-900 disabled:bg-blue-200'>
					Copy
				</button>
			</div>

			<hr />

			<label htmlFor='length' className={labelClass}>
				<span>Length: </span>
				<input type='range' name='length' step={1} min={1} max={30} />
			</label>

			<InputItem
				title='Lowercase Letters'
				name='lowercase_letters'
				checked={options.lowercase_letters}
				setChecked={setOptions}
			/>
			<InputItem
				title='Uppercase Letters'
				name='uppercase_letters'
				checked={options.uppercase_letters}
				setChecked={setOptions}
			/>
			<InputItem
				title='Special characters'
				name='special_letters'
				checked={options.special_letters}
				setChecked={setOptions}
			/>
			<InputItem
				title='Numbers'
				name='numbers'
				checked={options.numbers}
				setChecked={setOptions}
			/>

			<input
				type='submit'
				value='Generate Password'
				className='p-2 mt-5 bg-blue-800 text-white cursor-pointer shadow-md font-semibold transition-all delay-200 hover:bg-blue-900'
			/>
		</form>
	);
};

export default Form;
