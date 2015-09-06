
var $=require('jquery');
document.write('<h1>Hello World</h1>');

//way1---------------
//function load_main2(){
//	require('./main2.js');
//}
//window.load_main2=load_main2;
//------------------

//load的時候在
$(function(){
	
		$('button').on('click',function(){
			require('./main2.js');

		});

		$('img').on('click',function(){
			$(this).attr('src',require('file?name=./img/google-[hash:6].[ext]?[hash]!./big.jpg'));
			
		});
});
