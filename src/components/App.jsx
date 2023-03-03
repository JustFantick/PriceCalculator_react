import React, { useEffect, useState } from 'react'
import Ranges from './ranges/ranges.jsx';
import Chart from './chart/chart.jsx';

export default function App() {
	const [storageVal, setStorageVal] = useState(50);
	const [transferVal, setTransferVal] = useState(50);
	const [pricesArray, setPricesArray] = useState([7, 1, 0, 5]);

	const [bunnyOption, setBunnyOption] = useState('hdd');
	const [scalewayOption, setScalewayOption] = useState('single');

	useEffect(() => {
		function actualizeProgressBars() {
			const progressBarArray = document.querySelectorAll('.progress-bar');

			//set width in percentage of price value
			for (let i = 0; i < progressBarArray.length; i++) {
				let perCent = (pricesArray[i] / 74) * 100;//74$ = 100%
				if (window.innerWidth > 600) {
					progressBarArray[i].style.width = perCent + '%';
					progressBarArray[i].style.height = '100%';
				} else {
					progressBarArray[i].style.height = perCent + '%';
					progressBarArray[i].style.width = '100%';
				}

				//unmark all bars
				progressBarArray[i].classList.remove('lowest');
			}

			//mark bar with the lowest price 
			let lowest = Math.min(...pricesArray);
			progressBarArray[pricesArray.indexOf(lowest)].classList.add('lowest');
		}

		actualizeProgressBars();

		window.addEventListener('resize', actualizeProgressBars);

		return () => {
			window.removeEventListener('resize', actualizeProgressBars);
		}
	});

	useEffect(() => {
		setPricesArray([
			calcBackblaze(storageVal, transferVal),
			calcBunny(storageVal, transferVal, bunnyOption),
			calcScaleway(storageVal, transferVal, scalewayOption),
			calcVultr(storageVal, transferVal)
		]);
	}, [storageVal, transferVal, bunnyOption, scalewayOption]);

	function calcBackblaze(stor, transf) {
		let tmpPrice = (stor * 0.005) + (transf * 0.01);
		if (tmpPrice > 7) {
			return parseFloat(tmpPrice.toFixed(2));
		} else return 7;
	}

	function calcBunny(stor, transf, selectedValue) {
		let storePrice = selectedValue === 'hdd' ? 0.01 : 0.02;
		let tempPrice = (stor * storePrice) + (transf * 0.01);
		if (tempPrice > 10) return 10;
		else return parseFloat(tempPrice.toFixed(2));
	}

	function calcScaleway(stor, transf, selectedValue) {
		let storePrice = selectedValue === 'single' ? 0.03 : 0.06;

		stor = (stor - 75) > 0 ? stor - 75 : 0;
		transf = (transf - 75) > 0 ? transf - 75 : 0;

		let tempPrice = (stor * storePrice) + (transf * 0.02);
		return parseFloat(tempPrice.toFixed(2));
	}

	function calcVultr(stor, transf) {
		let tmpPrice = (stor * 0.01) + (transf * 0.01);
		if (tmpPrice > 5) {
			return parseFloat(tmpPrice.toFixed(2));
		} else return 5;
	}

	return (
		<div className="wrapper">
			<Ranges
				setStorageVal={setStorageVal} setTransferVal={setTransferVal}
				storageVal={storageVal} transferVal={transferVal} />

			<Chart pricesArray={pricesArray}
				bunnyOption={bunnyOption} setBunnyOption={setBunnyOption}
				scalewayOption={scalewayOption} setScalewayOption={setScalewayOption} />
		</div>
	)
}