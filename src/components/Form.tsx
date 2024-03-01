const Form = () => {
	return (
		<form>
			<div className='flex justify-between gap-2'>
				<input type='text' readOnly placeholder='Password...' />
				<button type='button'>Copy</button>
			</div>

			<hr />

			<label htmlFor='length'>
				<span>Length: </span>
				<input type='range' name='length' step={1} min={1} max={30} />
			</label>

			<label htmlFor='lowercase_letters'>
				Lowercase Letters
				<input type='checkbox' name='lowercase_letters' />
			</label>

			<label htmlFor='uppercase_letters'>
				Uppercase Letters
				<input type='checkbox' name='uppercase_letters' />
			</label>

			<label htmlFor='special_letters'>
				Special characters
				<input type='checkbox' name='special_letters' />
			</label>

			<label htmlFor='numbers'>
				Numbers
				<input type='checkbox' name='numbers' />
			</label>

			<input type='submit' value='Generate Password' />
		</form>
	);
};

export default Form;
