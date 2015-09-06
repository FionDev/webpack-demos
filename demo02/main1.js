
var $=require('jquery');
document.write('<h1>Hello World</h1>');

//way1---------------
function load_main2(){
	require('./main2.js');
}
window.load_main2=load_main2;
//------------------

//load的時候在
$(function(){
	
		$('button').on('click',function(){
			require('./main2.js');

		});

});
