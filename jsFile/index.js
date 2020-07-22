//import './index.css';

let textField= document.querySelector('#textField');
let btnTask= document.querySelector('#btnTask');
let allTask= document.querySelector('.allTask');

textField.addEventListener('keypress', function(event) {

	if(event.keyCode===13){
		let x= event.target.value;
		allTask.innerHTML= x;
		x=" "
	}
});