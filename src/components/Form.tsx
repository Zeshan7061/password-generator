const Form = () => {
	const labelClass =
		'flex justify-between items-center p-2 font-semibold shadow-md transition-all hover:shadow-lg';
	const checkboxClass = 'w-4 h-4 border-2 border-blue-500 rounded-sm bg-white';

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

			<label htmlFor='lowercase_letters' className={labelClass}>
				Lowercase Letters
				<input type='checkbox' name='lowercase_letters' className={checkboxClass} />
			</label>

			<label htmlFor='uppercase_letters' className={labelClass}>
				Uppercase Letters
				<input type='checkbox' name='uppercase_letters' className={checkboxClass} />
			</label>

			<label htmlFor='special_letters' className={labelClass}>
				Special characters
				<input type='checkbox' name='special_letters' className={checkboxClass} />
			</label>

			<label htmlFor='numbers' className={labelClass}>
				Numbers
				<input type='checkbox' name='numbers' className={checkboxClass} />
			</label>

			<input
				type='submit'
				value='Generate Password'
				className='p-2 mt-5 bg-blue-800 text-white cursor-pointer shadow-md font-semibold transition-all delay-200 hover:bg-blue-900'
			/>
		</form>
	);
};

export default Form;
