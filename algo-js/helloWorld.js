const queueRaw = process.argv[2];
const queue = queueRaw.split(",");

while(queue[0] != ""){
    let i = 0;
    console.log("Actual state : ", queue);
    console.log("Last exited : " + queue[i]);
    while(i < queue.length - 1){
        queue[i] = queue[i+1];
        i++;
    }
    queue[i] = "";
    
    console.log("Next state : ", queue);
}