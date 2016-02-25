// workker.js
addEventListener("fetch", function(evt) {
	evt.respondWith(new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(new Response("Hi, Barret Lee"));
		}, 1000);
	}));
});

console.info("workker.js");
