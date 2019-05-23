+(function(){

	var btnList = document.getElementById('button-list');
	var inp = document.getElementById('formula');

	var buttons = '1234567890+-*/='.split('');

	for (var i in buttons) {
		var col = document.createElement('div');
		col.classList.add('col-md-3');
		col.classList.add('p-3');

		var btn = document.createElement('button');
		btn.classList.add('btn');
		btn.classList.add('btn-default');
		btn.style.width = "100%";
		btn.style.height = "100%";
		btn.innerHTML = buttons[i];

		col.appendChild(btn);
		btnList.appendChild(col);

		btn.addEventListener('click', function(e){
			var val = e.target.innerHTML;

			if (val === "=") {
				inp.value = eval(inp.value);
			} else {
				inp.value = inp.value + val;
			}
		});

	}


}());
	