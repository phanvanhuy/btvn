// 1. Viết hàm với tham số đầu vào là 1 số bất kỳ, kiểm tra và in ra màn hình là số chẵn hay lẽ. Ví dụ: Số 3 là số lẽ.
    function input(a){
        if(a % 2 == 0){
            console.log(a+' la so chan');
            return 1;
        }
        else
            console.log(a+' la so le');
            return 0;
        
    }

    input(5);




// 1.2 Dựa vào hàm ở bài 1, kiểm tra thêm số đó là số âm hay dương. Ví dụ: Số 3 là số âm và lẽ.

function check(a){
        if(a < 0){
                    if(input(a))
                        {
                            console.log(a + ' la so am chan');
                        }
                    else
                        {
                            console.log(a + ' la so am le');
                        }
                }
        else
                    {
                        if(input(a))
                        {
                            console.log(a + ' la so duong chan');
                        }
                    else
                        {
                            console.log(a + ' la so duong le');
                        }
                    }

}

check(-2);


// 2. Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12), kiểm tra và in ra tháng đó có bao nhiều ngày? Ví dụ Tháng 1 có 31 ngày

function month(a){
    switch(a)
        {
            case 1: 
            {
                console.log('thang 1 co 31 ngay');
                break;
            }
            case 2: 
            {
                console.log('thang 2 co 28 ngay');
                break;
            }
            case 3: 
            {
                console.log('thang 3 co 31 ngay');
                break;
            }
            case 4: 
            {
                console.log('thang 4 co 30 ngay');
                break;
            }
            case 5: 
            {
                console.log('thang 5 co 31 ngay');
                break;
            }
            case 6: 
            {
                console.log('thang 6 co 30 ngay');
                break;
            }
            case 7: 
            {
                console.log('thang 7 co 31 ngay');
                break;
            }
            case 8: 
            {
                console.log('thang 8 co 31 ngay');
                break;
            }
            case 9: 
            {
                console.log('thang 9 co 30 ngay');
                break;
            }
            case 10: 
            {
                console.log('thang 10 co 31 ngay');
                break;
            }
            case 11: 
            {
                console.log('thang 11 co 30 ngay');
                break;
            }
            case 12: 
            {
                console.log('thang 12 co 31 ngay');
                break;
            }
            default: {
                console.log(a + ' khong phai la thang trong nam');
                break;
            }
        }
    
}

month(12);
// 2. Viết hàm với đầu vào là 1 số bất kỳ, kiểm tra số đó và in ra là số nguyên dương hay số nguyên âm, nếu không phải cả 2 thì in ra không phải số cần kiểm tra.
function checkInt(a){
    if(Number.isInteger(a)){
        if(a >= 0){
            console.log(a + ' la so nguyen duong');
        }
        else
            {
            console.log(a + ' la so nguyen am');
            }
    }
    else 
        return 0;
}

checkInt(2);


// 3. Viết hàm tính tổng 2 số với tất cả các phép tính (+ - * / %) thông qua tham số truyền vào
// Yêu cầu của bài 2: a muốn có 1 hàm mà truyền vào 3 tham số a, b là 2 số muốn tính, tham số thứ 3 (+ - * / %) sẽ quyết định kết quả. Kiểm tra kỹ đầu vào của 2 số muốn tính, nếu không phải số thì exit và thông báo số nhập không đúng.
function tinhtoan(a,b,c){
    switch(c){
        case '+':{
            return (a+b);
            break;
        }
        case '-':{
            return (a-b);
            break;
        }
        case '*':{
            return (a*b);
            break;
        }
        case '/':{
            return (a/b);
            break;
        }
        case '%':{
            return (a%b);
            break;
        }
        default:{
            console.log('nhap khong dung yeu cau');
            break;
        }
    }
}

console.log(tinhtoan(1,2,'/'));