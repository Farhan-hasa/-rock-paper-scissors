let list = JSON.parse(localStorage.getItem('stor'));

 if (list === null) {list = [];}

remove ();



function todoList() {

  let add = document.querySelector('.addTodo')
  
  let dudate = document.querySelector('.date')

  list.push({name: add.value, date: dudate.value});
 
  add.value = '';


  localStorage.setItem('stor',JSON.stringify(list));


 remove ();


}




function remove () {

   let all ='';

  for (let i=0; i<list.length; i++) {

   
       name =list[i].name;
       date =list[i].date;

    print = `<p>${name}</p> <p>${date}</p>

             <button class="red" onclick="list.splice(${i},1);

             localStorage.removeItem('stor');
   
             localStorage.setItem('stor',JSON.stringify(list));

             remove ();">Delete</button>`;

    all = all  + print;

    }


  document.querySelector('.display').innerHTML= all;


}