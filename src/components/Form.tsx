import { useCallback, useRef, useState } from 'react';
import InputItem from './InputItem';
import { toast } from 'react-toastify';

const Form = () => {
	const [length, setLength] = useState(8);
	const [password, setPassword] = useState('');
	const [options, setOptions] = useState({
		lowercase_letters: true,
		uppercase_letters: true,
		special_letters: true,
		numbers: true,
	});
	const inputRef = useRef<HTMLInputElement | null>(null);
	const labelClass =
		'flex justify-between items-center p-2 font-semibold shadow-md transition-all hover:shadow-lg hover:bg-blue-200 cursor-pointer';

	const generatePassword = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			setPassword('');

			if (Object.values(options).every(key => !key)) {
				toast.error('Please select at least one option.');
				return;
			}

			const smallLetters = 'abcdefghijklmnopqrstuvwxyz',
				capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				specialChars = `!"#$%&'()*+,-.\\/:;=<>?@[]^_{|}~`,
				numbers = '123456789';
			let allLetters = '';

			if (options.lowercase_letters) allLetters += smallLetters;
			if (options.uppercase_letters) allLetters += capitalLetters;
			if (options.special_letters) allLetters += specialChars;
			if (options.numbers) allLetters += numbers;

			let passwordStr = '';
			for (let i = 0; i != length; i++) {
				const randIndex = Math.floor(Math.random() * allLetters.length - 1) + 1;
				passwordStr += allLetters[randIndex];
			}

			setPassword(passwordStr);
		},
		[length, options]
	);

	const copyToClipboard = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(password);
			inputRef.current?.select();
			toast.info('Password copied to clipboard.');
		}
	};

	return (
		<form
			className='flex flex-col gap-4 p-5 rounded-md shadow-2xl min-w-full sm:w-[80vw] md:w-[50vw] lg:w-[40vw] bg-white'
			onSubmit={generatePassword}>
			<div className='flex justify-between gap-2'>
				<input
					type='text'
					placeholder='Password...'
					className='p-2 flex-1 border-none shadow-md bg-blue-100 font-bold outline outline-none text-blue-800'
					readOnly
					value={password}
					ref={inputRef}
				/>
				<button
					type='button'
					className='bg-blue-800 p-2 font-semibold text-white cursor-pointer shadow-md transition-all hover:bg-blue-900 disabled:bg-blue-200 active:scale-75'
					disabled={!password.length}
					onClick={copyToClipboard}>
					Copy
				</button>
			</div>

			<hr />

			<label htmlFor='length' className={labelClass}>
				<span>Length: {length} </span>
				<input
					type='range'
					name='length'
					step={1}
					min={1}
					max={30}
					value={length}
					onChange={e => setLength(e.target.valueAsNumber)}
				/>
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

			<button className='p-2 mt-5 bg-blue-800 text-white cursor-pointer shadow-md text-lg font-semibold transition-all hover:bg-blue-900 active:scale-75'>
				Generate Password
			</button>
		</form>
	);
};

export default Form;
