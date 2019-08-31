import React, {useState} from 'react';
import Item from './Item.jsx'

const Prescription = () => {
	
	const [list, setList] = useState([]);
	const [input, changeInput] = useState('');

	const handleUp = (id) => {
		const index = list.findIndex(li => li.id === id);
    const selected = list[index]; // 선택한 객체

    const nextList = [...list]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextList[index] = { 
      ...selected, 
      count: selected.count + 1
		};
		
		setList(nextList)
	}

	const handleDown = (id) => {
		const index = list.findIndex(li => li.id === id);
    const selected = list[index]; // 선택한 객체

    const nextList = [...list]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextList[index] = { 
      ...selected, 
      count: selected.count - 1
		};
		
		setList(nextList)
	}


	const createLi = (data) => {
		const { name, id, count } = data;
		let obj = {
			id: id,
			name: name,
			count: count
		}
		setList({...list, obj});
	}

	const handleCreate = () => {
      setList(list.concat({
        id: this.id++,
				name: input,
				count: count
      }));

  }

	const handleRemove = (id) => {
		setList(list.filter(li => li.id !== li));
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
			/>
		)
	);

	return (
		<div>
			<div>
				{List}
			</div>
		</div>
	)
}

export default Prescription;