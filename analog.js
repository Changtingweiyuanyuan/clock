
const now=new Date();
const valH=now.getHours(), valM=now.getMinutes(), valS=now.getSeconds();

// 360度/60秒=> 6度等於一秒 && 1豪秒=幾度?
const degS=valS*6;
// 360度/60分=> 6度等於一分鐘 && 6度/60秒=> 0.1度=1秒(偏移量)
const degM=valM*6 + valS*0.1;
// 360度/12小時=> 30度等於一小時 && 30度/60分=> 0.5度=1分 && 0.5度=60秒=> 0.00833度=1秒
const degH=valH*30 + valM*0.5 + valS*0.00833;

console.log(now);

// 增加keyframe

let kf=document.createElement('style');


kf.innerHTML=`
    @keyframes js{
        from{
            transform:rotate(${degS}deg);
        }
        to{
            transform:rotate(${degS+360}deg);
        }
    }

    @keyframes jm{
        from{
            transform:rotate(${degM}deg);
        }
        to{
            transform:rotate(${degM+360}deg);
        }
    }

    @keyframes jh{
        from{
            transform:rotate(${degH}deg);
        }
        to{
            transform:rotate(${degH+360}deg);
        }
    }
`;
document.querySelector("head").append(kf);





    /*
    const domH=document.querySelectorAll(".hour2");
    const domM=document.querySelectorAll(".min2");
    const domS=document.querySelectorAll(".sec2");

    console.log(domH,domM,domS);

    domH.style.transform=`rotate(${degH}deg)`;
    domM.style.transform=`rotate(${degM}deg)`;
    domS.style.transform=`rotate(${degS}deg)`;
    
    // // 每一秒角度變換多少
    const time=new Date();
    setInterval(function(){
        const valM = time.getMinutes(), valS = time.getSeconds(), valH = time.getHours();
        const degS = valS * 6;
        const degM = valM * 6; +valS * 0.1;
        const degH = valH * 30 + valM * 0.5 + valS * 0.00833;
        domH.style.transform=`rotate(${degH}deg)`;
        domM.style.transform=`rotate(${degM}deg)`;
        domS.style.transform=`rotate(${degS}deg)`;
    }, 1000);
    */



onload=()=>{

let day=now.getDay().toString();
switch(day){
    case '1':
        day="Monday";
        break;
    case '2':
        day="Tuesday";
        break;
    case '3':
        day="Wednesday";
        break;
    case '4':
        day="Thursday";
        break;
    case '5':
        day="Friday";
        break;
    case '6':
        day="Saturday";
        break;
    case '7':
        day="Sunday";
        break;
}
let month=now.getMonth().toString();
switch(month){
    case '0':
        month="JAN";
        break;
    case '1':
        month="FEB";
        break;
    case '2':
        month="MAR";
        break;
    case '3':
        month="APR";
        break;
    case '4':
        month="MAY";
        break;
    case '5':
        month="JUN";
        break;
    case '6':
        month="JUL";
        break;
    case '7':
        month="AUG";
        break;
    case '8':
        month="SEP";
        break;
    case '9':
        month="OCT";
        break;
    case '10':
        month="NOV";
        break;
    case '11':
        month="DEC";
        break;
}

document.getElementsByClassName("ymd")[0].innerText=`${day} ${now.getDate()} ${month} ${now.getFullYear()}`;
// ymd.innerHTML="123";
// console.log(day);
}