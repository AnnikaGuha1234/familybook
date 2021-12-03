var images = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrCpHmX32-662MjTk-0xiqIMJwftWoNSATOc5skgesF5dJJsik","https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg","https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg","https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg","https://previews.123rf.com/images/yupiramos/yupiramos1803/yupiramos180310511/96946833-cartoon-beauty-cute-girl-daughter-vector-illustration.jpg","https://cdn.vectorstock.com/i/1000x1000/41/22/cartoon-boy-kid-son-family-image-vector-15024122.jpg"];

var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Ahana Singh", "Alia Singh", "Soni Singh"];


var a = 0;
function update()
{
     a++;
     var peopel = 5
     if(a > people )
     {
        a = 0;
     }
     var updatedImage = images[a];
     var updatedName  = names[a];
     document.getElementById("img").src = updatedImage;
     document.getElementById("name").innerHTML = updatedName; 
}