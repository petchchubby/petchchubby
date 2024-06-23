document.getElementById('button1').addEventListener('click', function() {
  
    var messageElement = document.getElementById('message1');
    if (messageElement.style.display === 'none') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

  
    this.classList.toggle('clicked1');
});
document.getElementById('button2').addEventListener('click', function() {
   
    var messageElement = document.getElementById('message2');
    if (messageElement.style.display === 'none') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    this.classList.toggle('clicked2');
});

document.getElementById('return-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  });
