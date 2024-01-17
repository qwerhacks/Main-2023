<script lang="ts">
	import { onMount } from 'svelte';
	import WindowBase from '../utils/WindowBase.svelte';
	import CalculatorButton from './CalculatorButton.svelte';

	let calculator: HTMLDivElement;
	let calculationDisplay: HTMLDivElement;
	let resultDisplay: HTMLDivElement;
	let currentCalculation = '200 + 200 + 200 = 600';
	let currentResult = 0;
	let reset = true;

	function onClickHandler(e: MouseEvent) {
		if (
			e.target !== null &&
			e.target instanceof HTMLElement &&
			e.target.tagName === 'BUTTON' &&
			e.target.textContent !== null
		) {
			const value = e.target.textContent;

			if (reset) {
				currentCalculation = '';
				reset = false;
			}

			if (parseInt(value) >= 0 || value === '.') {
				currentCalculation += value;
			} else if (value === 'C') {
				currentCalculation = ' ';
        resultDisplay.textContent = 'Fly _ hackers to QWER Hacks!';
				currentResult = 0;
			} else if (value === 'CE') {
				currentCalculation = currentCalculation.slice(0, -1);
			} else if (value === '=') {
				try {
					currentResult = eval(currentCalculation);
					currentCalculation += ` = ${currentResult}`;
					resultDisplay.textContent = `Fly ~${(currentResult / 200).toFixed(
						1
					)} hackers to QWER Hacks!`;
					reset = true;
				} catch (error) {
					resultDisplay.textContent = 'Error';
					reset = true;
				}
			} else if (value == '×') {
				currentCalculation += '*';
			} else if (value == '÷') {
				currentCalculation += '/';
			} else {
				currentCalculation += ` ${value} `;
			}
			calculationDisplay.textContent = currentCalculation;
		}
	}

	onMount(() => {
		calculator.addEventListener('click', onClickHandler);

		return () => {
			calculator.removeEventListener('click', onClickHandler);
		};
	});
</script>

<WindowBase title="🧮 Calc-you-later!" background_val="#92DEFF" main_bg_val="bg-[#FFE9B1]">
	<div class="max-w-md w-full">
		<div class="mb-4">
			<p class="text-base">Calculate the impact of your donation!</p>
		</div>
		<div bind:this={calculator} class="calculator-grid grid grid-cols-4 gap-4 mb-4">
			<div class="bg-white col-span-4 text-right p-4 border-4 border-black">
				<div bind:this={calculationDisplay} class="text-gray-800 text-sm h-4 font-jetbrains italic">{currentCalculation}</div>
				<div bind:this={resultDisplay} class="text-gray-800 font-semibold">
					Fly ~3 hackers to QWER Hacks!
				</div>
			</div>
			<CalculatorButton>🧡</CalculatorButton>
			<CalculatorButton>✈️</CalculatorButton>
			<CalculatorButton>CE</CalculatorButton>
			<CalculatorButton>C</CalculatorButton>
			<CalculatorButton>7</CalculatorButton>
			<CalculatorButton>8</CalculatorButton>
			<CalculatorButton>9</CalculatorButton>
			<CalculatorButton>÷</CalculatorButton>
			<CalculatorButton>4</CalculatorButton>
			<CalculatorButton>5</CalculatorButton>
			<CalculatorButton>6</CalculatorButton>
			<CalculatorButton>×</CalculatorButton>
			<CalculatorButton>1</CalculatorButton>
			<CalculatorButton>2</CalculatorButton>
			<CalculatorButton>3</CalculatorButton>
			<CalculatorButton>-</CalculatorButton>
			<CalculatorButton>0</CalculatorButton>
			<CalculatorButton>+</CalculatorButton>
			<CalculatorButton classList="!col-span-2 !aspect-auto">=</CalculatorButton>
		</div>
		<a href="https://hcb.hackclub.com/donations/start/qwer-hacks?amount={(currentResult*100).toFixed(0)}" class="text-blue-600 hover:underline">Click here to donate {currentResult !== 0 ? `$${currentResult}` : "*amount*"}!</a>
	</div>
</WindowBase>
