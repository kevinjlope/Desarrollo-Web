const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('Test error'))
    })
};
const helloScript = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(() => resolve('Hello Script'),2000)
        : reject(new Error('Test error'))
    })
};
const helloAsync = async () => {
    const hello = await helloWorld();
    const hellow = await helloScript();
    console.log(hello);
    console.log(hellow);
};

helloAsync();

//Otra forma 
const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};
anotherFunction();
