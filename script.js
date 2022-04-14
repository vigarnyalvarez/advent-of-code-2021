const fs = require('fs'); //FS stands for file system


//Imported fs, and used method readFile. First parameter is the path to the file and will read it. If there's an error, will provide the error. If there's data, it will provide the data. This method is asynchronous. It is saying, I will read this file and once you're done, I will display the data or give an error. This goes into the call back queue. This one is recommended when developing a server as we don;t block any execution while reading a file



// fs.readFile('./hello.txt',(err,data) => {
//     if(err){
//         console.log('error', err)
//     }
//     console.log('Async',data.toString()) //We need to add toString as it will display as UTF-8 encoding
// })

/******Challenge 1************/
// fs.readFile('./hello.txt', (err,data) => {
//     console.time('Challenge')
//     if(err){
//         console.log('Err')
//         return 
//     }
//     let result = 0;
//     let i=0;
//     let v = false;
//     const fileContent = data.toString();
//     for(let c of fileContent) {
//         if(c === '(' ){
//                 result = result +1 
//                 i++;
//             }else{
//             result = result -1
//             i++
//         }
//         if(result === -1 && !v){
//             v =true;
//             console.log(`Santa went to floor -1 on position ${i}`)
//         }
        
//     }
//     console.log(result) 
//     console.timeEnd('Challenge')
// })

/**********Challenge 1/2021*************/

// const challenge2 = () => {
//     fs.readFile('./depth-challenge.txt',(err, data) => {
//         console.time('c2')
//         if(err){
//             console.log('Error:', err)
//         }
//         const depthMeasurements = data.toString().split('\r\n').map(item => parseInt(item))
//         let timesIncreased = 0;
//         let timesSumIncreased = 0;
//         depthMeasurements.forEach((depth, index) => {
//             if( index > 0 && depthMeasurements[index-1] < depth ){
//                 timesIncreased++;
//             }
//         })        
//         console.log(timesIncreased)

//         const arrayOfSums = depthMeasurements.map((depth, index) => {
//             if(index === 0){
//                 return (depth + depthMeasurements[index+1] + depthMeasurements[index+2])
//             }else if(index < depthMeasurements.length-2){
//                 return (depth + depthMeasurements[index+1] + depthMeasurements[index+2])
//             }
        
//         })
    
//         arrayOfSums.forEach((sumOfDepth, index) => {
//             if( index > 0 && arrayOfSums[index-1] < sumOfDepth ){
//                 timesSumIncreased++;
//             }
//         })        
//         console.log(timesSumIncreased)

//         console.timeEnd('c2')
//     })

    


// }
// challenge2()


// const test = () => {
//     let testArr = [199,200,208,210,200,207,240,269,260,263]
//     let sums;
//     testArr.forEach((value, index) => {
//         if(index === 0){
//             sums= value + testArr[index+1] + testArr[index+2] 
//             console.log(sums)
//         }else if(index < testArr.length-2){
//             sums= value + testArr[index+1] + testArr[index+2] 
//             console.log(sums)
//         }
//     })
// }




/*************Challenge 2/2021******************/


const challenge2 = () => {
    fs.readFile('./depth-challenge-position.txt',(err, data) => {
        let finalDepth = 0;
        let finalHorizontalPosition = 0;
        let aim = 0;
        if(err){
            console.log('Error', err);
        }

        const submarinePositions = data.toString().split('\r\n',)

        submarinePositions.forEach(position => {
            const splitString = position.split(' ')
            if(splitString[0] === 'forward'){  
                finalDepth += aim*parseInt(splitString[1])
                finalHorizontalPosition += parseInt(splitString[1])
            }else if(splitString[0] === 'up'){
                aim -= parseInt(splitString[1])
            } else if(splitString[0] ==='down'){
                aim += parseInt(splitString[1])
            }
        })
        console.log(finalDepth*finalHorizontalPosition)
    })
}

challenge2()



//This is a synchronous method and goes straight into reading the file. This goes directly into the call stack
// const file = fs.readFileSync('./hello.txt')
// console.log('Sync',file.toString())

//appendFile receives as first parameter the file we would like to append (If it doesn;t exists, will create the file for us). Second parameter: receives what we would like to append. Third parameter: will receive an error and an instruction on what to do if in case of an error
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if(err){
//         console.log(err)
//     }
// })

//writeFile: First parameter: Name of the new file. Second Parameter: String inside file. Third Parameter: Error action
// fs.writeFile('bye.txt','Sad to see you go', (err) => {
//     if(err){
//         console.log(err)
//     }
// })

//unlink: First Paramter: File name to be deleted. Second parameter: Error action
// fs.unlink('./bye.txt', err => {
//     if(err){
//         console.log(err)
//     }
//     console.log('Inception')
// })