



let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click",function(e){
    let addTxt1 = document.getElementById('input1');
    
    let comments = sessionStorage.getItem('comments');
    if(comments==null){

        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }

    commentsObj.push(addTxt1.value);
    sessionStorage.setItem("comments", JSON.stringify(commentsObj));
    addTxt1.value="";
   console.log
    showComments();
})
let submitBtn2 = document.getElementById('submitBtn2');
submitBtn2.addEventListener("click",function(e){
    let addTxt2 = document.getElementById('input2');
    
    let comments = sessionStorage.getItem('comments');
    if(comments==null){

        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }

    commentsObj.push(addTxt2.value);
    sessionStorage.setItem("comments", JSON.stringify(commentsObj));
    addTxt2.value="";
   console.log
    showComments();
})
let submitBtn3 = document.getElementById('submitBtn3');
submitBtn3.addEventListener("click",function(e){
    let addTxt3 = document.getElementById('input3');
    
    let comments = sessionStorage.getItem('comments');
    if(comments==null){

        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }

    commentsObj.push(addTxt3.value);
    sessionStorage.setItem("comments", JSON.stringify(commentsObj));
    addTxt3.value="";
   console.log
    showComments();
})
let submitBtn4 = document.getElementById('submitBtn4');
submitBtn4.addEventListener("click",function(e){
    let addTxt4 = document.getElementById('input4');
    
    let comments = sessionStorage.getItem('comments');
    if(comments==null){

        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }

    commentsObj.push(addTxt4.value);
    sessionStorage.setItem("comments", JSON.stringify(commentsObj));
    addTxt4.value="";
   console.log
    showComments();
})



function showComments(){
    let comments = sessionStorage.getItem("comments");
    if(comments==null){
        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }
     let html = "";
     commentsObj.forEach(function(element,index) {
         html += ` <div class="cardC my-3 mx-3" style="width: 18rem;" >
                          
         <div class="cardC-body">
           <h5 class="cardC-title"> Review Comment ${index + 1}</h5>

           <p class="cardC-text">${element}</p>
           <br>
           <br>
           <br>
           <br>    
           <br>
           <br>
           <br>
           <button id ="${index}" onClick="deleteComment(this.id)" class="btn btn-primary">Delete Comment</button>
         </div>
       </div>
         `
         
     });

     let commentsELm = document.getElementById("comments");
     if(commentsObj.length != 0){
         commentsELm.innerHTML = html;
     }
     else{
         commentsELm.innerHTML = `Nothing to display ! "Add a Comment " `
     }


} 
//function to delete notes

function deleteComment(index) {
    let comments = sessionStorage.getItem('comments');
    if(comments==null){
        commentsObj=[];

    }
    else{
        commentsObj = JSON.parse(comments);

    }
    commentsObj.splice(index, 1);
  
    sessionStorage.setItem("comments", JSON.stringify(commentsObj));
    showComments();
    
}
// function MyFunction(){
//     fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//       .then(data => {
//           let x = data.results[0].picture.large;
//           console.log(x);
//           return x;
          
//       });
// }
imageGenerator();
   function MyFunction(index){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
      .then(data => {
          let x = data.results[0].picture.large;
          let y  = data.results[0].name.first +' ' + data.results[0].name.last; 
          let z = data.results[0].email;
         
          displayImage(x,y,z,index);
      console.log(data);
          
         
          
      });
}

function displayImage(url,name,date,index){
   
      
        document.getElementById(`image${index}`).src = url;
        document.getElementById(`name${index}`).innerText = name;
        document.getElementById(`date${index}`).innerText = date;

        
    

}

function imageGenerator (){
    for (let index = 1; index < 5; index++) {
      
        MyFunction(index);

        
    }



}
function Expander() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
 
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " ";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less...";
    
      moreText.style.display = "inline";
    }

  }
  
  function Expander2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
 
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " ";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less...";
    
      moreText.style.display = "inline";
    }

  }
  

  function Expander3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
 
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " ";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less...";
    
      moreText.style.display = "inline";
    }

  }
  function Expander4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
 
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " ";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less...";
    
      moreText.style.display = "inline";
    }

  }
  




  

  


  









