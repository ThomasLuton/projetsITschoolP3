const pingsAndPongs = process.argv[2];

//string to array 
const pingAndPongsArray = [];
let tmp = "";
for(let i = 0; i < pingsAndPongs.length; i++){
    const candidate = pingsAndPongs[i];
    if(candidate != ','){
        tmp += candidate;
        
    }else{
        pingAndPongsArray.push(tmp);
        tmp ='';
    }
}
pingAndPongsArray.push(tmp);

console.log(pingAndPongsArray);

let pings = 0;
let pongs = 0;
for(let i = 0; i < pingAndPongsArray.length; i++){
    if(pingAndPongsArray[i] === "ping"){
        pings++;
    }else{
        pongs++;
    }
}
console.log("Match result ping vs pong: " + pings + "-" + pongs);
