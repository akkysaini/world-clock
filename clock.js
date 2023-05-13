// This function is not repetitive but it is little bit slower.
let getTime = (id, timezone) => document.getElementById(`${id}`).innerHTML = new Date().toLocaleString("en-US", { timeZone: `${timezone}`, timeStyle: 'medium', hourCycle: 'h12' });

// 1. India Time
setInterval(getTime, 1000, 'indiaTime', 'Asia/Kolkata');

// 2. Pakistan Time
setInterval(getTime, 1000, 'pakistanTime', 'Asia/Karachi');

// 3. USA Time
setInterval(getTime, 1000, 'usaTime', 'America/New_York');

// 4. Australia Time
setInterval(getTime, 1000, 'australiaTime', 'Australia/Sydney');

// 5. Canada Time
setInterval(getTime, 1000, 'canadaTime', 'Canada/Eastern');

// 6. Russia Time
setInterval(getTime, 1000, 'russiaTime', 'Europe/Moscow');



// This function is fast but we'll have to repeat when we would set next country time
// let geteTime = () => document.getElementById("indiaTime").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata', timeStyle: 'medium', hourCycle: 'h12' });
// setInterval(geteTime, 1000);
// geteTime();





