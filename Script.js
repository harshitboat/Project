function updateClock(){
    const now = new Date;
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >=12 ? 'PM':'AM';

    hours = hours%12;
    hours = hours? hours:12;//if 0 , change to 12//
    
    const formattedTime =
       `${String(hours).padStart(2,'0')}:`+
       `${String(minutes).padStart(2,'0')}:`+
       `${String(seconds).padStart(2, '0')} ${ampm}`;
       
  // Display the time inside the element with id="clock"
    document.getElementById('clock').textContent = formattedTime;

}
// Call updateClock every 1000 milliseconds (1 second)
setInterval(updateClock,1000);
// Call updateClock once immediately so it doesn't wait 1 second
updateClock();
