var $=require('jquery');
document.write('<h2>Hello Webpack</h2>');

$(function(){
	$('h2').on('click',function(){
			require('./style.css');

		});
});