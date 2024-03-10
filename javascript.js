function moveBall(event) 
{
    var ball = document.getElementById('ball');
    var field = document.getElementById('field');
    var goalLeft = document.getElementById('leftG');
    var goalRight = document.getElementById('rightG');
    var fieldRect = field.getBoundingClientRect();
    var clickX = event.clientX - fieldRect.left;
    var clickY = event.clientY - fieldRect.top;
    var ballX = clickX - ball.offsetWidth / 2;
    var ballY = clickY - ball.offsetHeight / 2;
    ballX = Math.max(0, Math.min(field.offsetWidth - ball.offsetWidth, ballX));
    ballY = Math.max(0, Math.min(field.offsetHeight - ball.offsetHeight, ballY));
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
    if ((ballX <= goalLeft.offsetWidth && ballY >= goalLeft.offsetTop && ballY <= goalLeft.offsetTop + goalLeft.offsetHeight) ||
        (ballX >= field.offsetWidth - goalRight.offsetWidth - ball.offsetWidth && ballY >= goalRight.offsetTop && ballY <= goalRight.offsetTop + goalRight.offsetHeight)) 
    {
        alert("Goal!");
    }
}