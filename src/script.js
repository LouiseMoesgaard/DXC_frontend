"use strict"

let formElm = document.querySelector('form');


formElm.addEventListener("submit", e=>{
    e.preventDefault();
    post(serializeForm(formElm));

})

function serializeForm(form) {
	let obj = {};
	let formData = new FormData(form);
	for (let key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};


function post(data) {
    const postData = JSON.stringify(data);
    fetch("https://dxcdb-f741.restdb.io/rest/contact-info", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5fac5cca86395972883852a0",
        "cache-control": "no-cache",
      },
      body: postData,
    })   
}





