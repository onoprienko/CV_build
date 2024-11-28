
var rellax = new Rellax('.rellax', {
    center:true
});


setTimeout(()=>{rellax.refresh();}, 1500)



////



inView('.section-info')
.on('enter', (el)=>{
	let stars = document.getElementsByClassName("star");
	[...stars].forEach((el)=>{
		el.classList.remove("big");
	})
})
.on('exit', (el)=>{
    let stars = document.getElementsByClassName("star");
	[...stars].forEach((el)=>{
		el.classList.add("big");
	})
});
inView.offset(document.getElementsByClassName("section-info")[0]?.offsetHeight/3)




////

AOS.init();


////


if (window.innerWidth > 1200 && document.getElementsByClassName("snap")[0]) {
    document.addEventListener("DOMContentLoaded", function() {
	  var defaultOptions = {
	    container: document.body,
	    panelSelector: '.snap',
	    directionThreshold: 10,
	    delay: 0,
	    duration: 1000,
	    easing: function(t) { return t },
	  };

	  new PanelSnap(defaultOptions);
	});
}

////

if(document.getElementById('popup-ident')){
	document.getElementById('popup-ident').addEventListener('click', (e)=>{
		e.preventDefault();
		document.getElementById('popup-ident').classList.toggle('active')
		document.getElementById('popup-ident').scrollTo(0, 0);
		document.getElementById('popup-ident-img').setAttribute('src', '')

	});

	let popup_ident_btn = document.getElementsByClassName("ident-item-btn");
	[...popup_ident_btn].forEach((el)=>{
		el.addEventListener('click', (e)=>{
			e.preventDefault();
			document.getElementById('popup-ident').classList.toggle('active')
			document.getElementById('popup-ident-img').setAttribute('src', el.getAttribute('href'))
			//console.log(el)
		});
	})
}



////


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
