import React, {useState, useEffect} from 'react';
import { getRoom } from '../../Service/match.js'
import Li from './Li.jsx';

const Mobile = () => {
	const [stat, setStat] = useState(false);
	const [stat2, setStat2] = useState(false);
	const [room, setRoom] = useState();
	const [lis, setList] = useState([]);
	let a = 1;

	useEffect(() => {
    getRoom().then(res => {
			console.log(res.data);
			setList(res.data);
			setStat2(true);
			alt();
		});
	}, []);
	
	const ex = (rooms) => {
		setStat(true);
		setStat2(false)
		setRoom(rooms);
		console.log(rooms);
	}

	const alt = () => {
		list = lis.map(
		({field, doctor, id}) => (
				<Li key={a++} text={doctor} room={id} ex={ex}/>
		));
			
	}	

	let list;

	// let lis = [{room:"asd", text:"asd", id: 1}]
	

	return(
    <div>
			{ stat && <Rtc room={room}/> }
			{ stat2 && lis.map(
		({field, doctor, id}) => (
				<Li key={a++} text={doctor} room={id} ex={ex}/>
		))}
			<div id="gan" value={ room }></div>
    </div>
  )
}

const Rtc = () => {
	return (
		<div>
			<video id="remoteVideo" autoPlay playsInline />
			<video id="localVideo" autoPlay muted playsInline />
		</div>
	)
}

export default Mobile;