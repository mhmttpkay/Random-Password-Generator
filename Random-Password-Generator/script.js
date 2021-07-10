const getRandomLover=() => {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

const getRandomUpper=() => {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

const getRandomNumber=() => {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

const getRandomSymbol=()=>{
    const symbols='@>£#$½+';
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const Randomfunction = {getRandomSymbol,getRandomUpper,getRandomLover,getRandomNumber
}

const generatePassword = () =>{
    const length=16;
    let generatePassword ='';

    for(let x=0 ; x< length; x++)
    generatePassword += Object.values(Randomfunction)[Math.floor(Math.random() *4 )]();
    return generatePassword;
}

const spanResult = document.getElementById('result');
const generateButton= document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');

generateButton.addEventListener('click',()=>{
spanResult.innerText=generatePassword();

})


clipboardButton.addEventListener('click',()=>{

    const password = spanResult.innerText;
    if(!password)
    return;
    
    const textareat= document.createElement('textarea');
    textareat.value = password;
    document.body.appendChild(textareat);
    textareat.select();
    document.execCommand('copy');
    textareat.remove();
    alert('Parola Kopyalandı...');

})
