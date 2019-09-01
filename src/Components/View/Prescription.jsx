import React, {useState} from 'react';
import Item from './Item.jsx';
import Form from './Form.jsx';

const Prescription = () => {
	const [list, setList] = useState([]);
	const [inputs, changeInput] = useState('');
	const [id, setId] = useState(1);

	const handleKey = (e) =>{
		if(e.key === "ENTER") {
			handleCreate();
		}
	}

	const handleInput = (e) => {
		let a = e.target.value;
		changeInput(a);
	}

	const handleUp = (id) => {
	const index = list.findIndex(li => li.id === id);
    const selected = list[index]; 
    const nextList = [...list];
    nextList[index] = { 
      ...selected, 
      count: selected.count + 1
		};
		
		setList(nextList)
	}

	const handleDown = (id) => {
	const index = list.findIndex(li => li.id === id);
    const selected = list[index];
    const nextList = [...list]; 

    nextList[index] = { 
      ...selected, 
      count: selected.count - 1
		};
		
		setList(nextList)
	}

	const handleCreate = () => {
		setList(list.concat({
			id: id,
			name: inputs,
			count: 1
		}));
		setId(id+1);
		changeInput('');
  }

	const handleRemove = (id) => {
		setList(list.filter(li => li.id !== id));
  }

	const List = list.map(
		({id, name, count}) => (
			<Item
				onDown={handleDown}
				onUp={handleUp}
				onRemove={handleRemove}
				text={name}
				count={count}
				key={id}
				id={id}
			/>
		)
	);

	return (
		<div>
			<Form 
				onCreate={handleCreate}
				onKey={handleKey}
				onInput={handleInput}
				value={inputs}
			/>
			<div>
				{List}
			</div>
		</div>
	)
}

export default Prescription;