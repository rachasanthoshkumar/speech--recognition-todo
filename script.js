if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  let recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition);
  const taskInput = document.getElementById('taskInput'); 
  const ul = document.getElementById('ulId');
  const deleteButtonContent = window.innerWidth >= 480 ? 'Delete' : '&times;';
  taskInput.addEventListener('focus',()=>{
    recognition.start();
  })
  recognition.onresult = (event)=>{
    const transcript = event.results[0][0].transcript;
    taskInput.value = transcript;
   addTask();
  }
  function addTask(){
    const markup = document.createElement('li');
    markup.innerHTML = `<div><li>${taskInput.value}</li><button onclick="deleteTask(this)" id='deleteTaskbtn'>${deleteButtonContent}</button></div>`;
    ul.appendChild(markup);
    taskInput.value='';
  }
  function deleteTask(e){
    let task = e.parentNode.parentNode;
    console.log(task)
    ul.removeChild(task);
  }

}

