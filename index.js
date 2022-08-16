console.log("Welcome to the world of ayurveda")
let blogrensponse = document.querySelector(".blogrensponse")

function blglifun1(){
  console.log("li1 function clicked ")
  blogrensponse.innerHTML = `<iframe src="https://www.femina.in/wellness/home-remedies/how-to-stop-hair-fall-and-tips-to-control-with-natural-home-remedies-60280.html" height="100%" width="100%"></iframe>
  `
}

function blglifun2(){
  console.log("li2 function clicked ")
  blogrensponse.innerHTML = `<iframe src="https://www.medicalnewstoday.com/articles/322047#what-is-it" height="100%" width="100%"></iframe>
  `
}

function blglifun3(){
  console.log("li3 function clicked ")
  blogrensponse.innerHTML = `<iframe src="https://www.medicalnewstoday.com/articles/325989" height="100%" width="100%"></iframe>
  `
}

function blglifun4(){
  console.log("li4 function clicked ")
  blogrensponse.innerHTML = `<iframe src="https://www.healthmantra.com/dixit/healthy-living.shtml" height="100%" width="100%"></iframe>
  `
}

function blglifun5(){
  console.log("li5 function clicked ")
  blogrensponse.innerHTML = `<iframe src="https://www.medicalnewstoday.com/articles/321671" height="100%" width="100%"></iframe>
  `
}



/*function for contact us */
let contact = document.querySelector("#contact")
 let contactbtn = document.querySelector(".contactbtn")
 contactbtn.addEventListener("click",()=>{
  console.log("we are inside contact us page ")
  contact.innerHTML=`<h1 class="contactcolor">plz wait while the page is reloading</h1>`
  
  setTimeout(() => {
    contact.classList.add("contactbannerclass")
    contact.innerHTML=` <div class="container"> 
    <form>
      <div class="mb-3">
        
        <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Your Name Plz">
        
      </div>
      <div class="mb-3">
        
        <input  placeholder="Enter your Email Id"type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control"   id="floatingTextarea" ></textarea>
        <label for="floatingTextarea">Your feedback is very valuable for US. </label>
      </div>
      
      
      <button type="submit" class="btn btn-primary mb-3 contactcustombtn">Submit</button>
    </form>
  </div>`
    
  }, 1000);
 
 })