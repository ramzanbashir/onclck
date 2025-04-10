let abc = document.getElementById("abc");

function expand(){
   let content = document.getElementById("content");
   if(abc.innerHTML === "see less" ){
    content.innerHTML="If you use this site regularly and would like to help keep the site on the Internet."
    abc.innerHTML = "see more...";
   } else{
    content.innerHTML = "If you use this site regularly and would like to help keep the site on the Internet.please consider donating a small sum to help pay for the hosting and bandwidth bill."
    abc.innerHTML = "see less";
   }
}