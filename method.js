// 設置變數，從html裡取得與ID相對應的標籤
const min = document.getElementById("min");
const max = document.getElementById("max");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const tip = document.getElementById("tip");
const hyphen = document.getElementById("hyphen");

let minnumber = 1;
let maxnumber = 100;
const answer = 65;
// 隨機產生亂碼
//const answer = Math.floor(Math.random()*100 +1);

// 對btn(按鈕)做世界監聽，並(點擊按鈕)
btn.addEventListener("click",function(){
    // 設置一個變數guessNum(猜的數字)
    const guessNum = input.value;
    input.value = null;
    
    // 如果 guessNum=answer，顯示"答對了"的提示
    if(guessNum == answer){
        // 可直接更改id=tip的內容
        console.log("答對了");
        hyphen.innerText = "答對了";
        max.innerText = null;
        min.innerText = null;
    }

    if(guessNum > maxnumber || guessNum < minnumber){
        alert("請輸入範圍內的數字")
        return
    }

    // 錯，呈現數字範圍
    if(guessNum > answer){
        max.innerText = guessNum;
        maxnumber = guessNum;
    }

    if(guessNum < answer){
        min.innerText = guessNum;
        minnumber = guessNum;
        
    }



})









// //  設置一個變數，並從html裡找ID=min的標籤
// const min = document.getElementById("min");
// const max = document.getElementById("max");
// // 跟document.getElementById差不多功能
// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");

// let guessmin=1;      //最小值
// let guessmax=100;    //最大值
// let answer=65;

// console.log(min);

// // 對btn做監聽的動作
// btn.addEventListener("click",function(){
//     const guessNum = input.value;
//     // 對輸入的內容做修改(跟Java的add方法類似)
//     min.innerText = guessNum;
//     max.innerText = guessNum;
//     //input.value = null;

//     // 
//     let number;


//     if(guessNum > guessmax || numbguessNumer < guessmin) {	
//         console.log("請輸入範圍內的數字");	
//     }
                
//     if(guessNum == answer) {
//         console.log("答對了");
//     } 
    
//     if(guessNum > answer) {
//         guessmax = guessNum-1;				
//         console.log(guessmin,guessmax);
//     } 
    
//     if(guessNum < answer) {
//         guessmin = guessNum+1;
//         console.log(guessmin,guessmax);				
//     }             

    
// });


// let min=1;      //最小值
// let max=100;    //最大值
// let answer=65;
// let number;     //猜測值
		

		
// for(let i = 0; i<= 100 ; i++) {

// 	if(number > max || number < min) {	
// 		continue;//符合條件輸出後，跳出並重新執行for迴圈
// 	}
			
// 	if(number == answer) {
// 		break;
// 	} 

// 	if(number > answer) {
// 		max = number-1;				
// 		console.log(min,max);
// 	} 

// 	if(number < answer) {
// 		min = number+1;
// 		console.log(min,max);				
// 	}
			
			
// }
		
		
	