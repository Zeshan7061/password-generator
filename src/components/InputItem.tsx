export const labelClass =
	'flex justify-between items-center p-2 font-semibold shadow-md transition-all hover:shadow-lg hover:bg-blue-200 cursor-pointer active:scale-90';
const checkboxClass = 'w-4 h-4 border-2 border-blue-500 rounded-sm bg-white';

type Props = {
	name: string;
	title: string;
	checked: boolean;
	setChecked: React.Dispatch<
		React.SetStateAction<{
			lowercase_letters: boolean;
			uppercase_letters: boolean;
			special_letters: boolean;
			numbers: boolean;
		}>
	>;
};

const InputItem = ({ name, title, checked, setChecked }: Props) => {
	return (
		<label
			htmlFor={name}
			className={labelClass}
			onClick={() => {
				setChecked(prevOpts => ({
					...prevOpts,
					[name]: !prevOpts[name],
				}));
			}}>
			{title}
			<input
				type='checkbox'
				name={name}
				className={checkboxClass}
				checked={checked}
				onChange={e =>
					setChecked(prevOpts => ({
						...prevOpts,
						[name]: e.target.checked,
					}))
				}
			/>
		</label>
	);
};

export default InputItem;
