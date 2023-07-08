var st=[{
    name:'aziz',
    age:18 ,
    skil:'math',
    sex:'man'
},{
    name:'sami',
    age:17 ,
    skil:'english',
    sex:'man'
},{
    name:'mariam',
    age:20 ,
    skil:'bisness',
    sex:'woman'
}];
/*
var x , y;
x=Math.floor(Math.random() * st.length)
do {
    y=Math.floor(Math.random() * st.length)
} while (x===y);

console.log(st[x].name+' love '+st[y].skil )
cheker(st[x].sex,st[x].age)
function cheker(sex,n) {
    var h ='he'
    if (sex == 'woman') {
        h='s'+h
    };   
    if(n>=18) {
        console.log(h+' can join us :)')
    }
    else {
        console.log(h+' can\'t join us :( ')
    }
}*/
/*const he=document.getElementById('here')
const te=document.getElementById('hach')
document.getElementById('po9').onclick=function () {
    if (he.textContent =='') {
        
        te.innerHTML='your name cant be empty'
    }
    else {
        te.innerHTML='hi '+he.textContent
        for (let i =0; i<st.length;i++) {
            if (st[i].name==he.textContent){
                te.innerHTML='WELCOME '+st[i].name;
                break
            }
        }
        te.innerHTML='Sorry '+ he.textContent+' your not in our group'

    }
}*/
let buton=document.getElementById('po9');
let text=document.getElementById('text');
let input=document.getElementById('here');
buton.onclick=function () {
    if(buton.hasAttribute('class')) {
        switch (buton.getAttribute('class')) {
            case 'b1':
                buton.setAttribute('class','b2')
                input.setAttribute('class','i2')
                text.setAttribute('class','t2')
                break;
            case 'b2':
                buton.setAttribute('class','b3')
                input.setAttribute('class','i3')
                text.setAttribute('class','t3')
                break;
            case 'b3':
                buton.setAttribute('class','b1')
                input.setAttribute('class','i1')
                text.setAttribute('class','t1')
                break;
}
    }else {
        buton.setAttribute('class','b1')
        input.setAttribute('class','i1')
        text.setAttribute('class','t1')
    }}
    