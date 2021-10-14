// Note: Các bài tập liên quan tới DOM thì bên html file tạo <div id="Tên bài tập tương ứng"> và xử lý trong này

// 1. Tạo Array với các số bất kỳ, tính tổng các số trong array, in ra màn hình html
    const  num = [1,2,3,4,3,5];
    let sum = 0;
    num.forEach(value => {
        sum +=value;
    })

    console.log(sum);

    const tong = document.querySelector('#tong');

    tong.innerHTML = `${sum}`;



// 2. Tạo Array với các chuỗi string bất kỳ, lặp và in ra màn hình html tương ứng với mỗi thẻ <p>. Ví dụ: ['haha', 'hehe'] -> 
// <p>haha</p> 
// <p>hehe</p>
    const  randomString = ['cocacola', 'pepsi', 'audi', 'tivi'];
    const ramdom = document.querySelector('#random');
    const add = (string) =>{
        const e = document.createElement('p');
        e.innerHTML = `${string}`;
        document.getElementById('random').appendChild(e);
    }
    randomString.forEach((string)=>{
        add(string);
    });


// 2.2 Add thêm 1 thẻ <p> với text bất kỳ thêm vào ở đầu và ở cuối. ví dụ: 

    const el = document.createElement('p');
    el.innerHTML = `Start`;
    document.getElementById('random').insertBefore(el,ramdom.childNodes[0]);

    const ele = document.createElement('p');
    ele.innerHTML = `End`;
    document.getElementById('random').appendChild(ele);

// <p>insert ở đầu</p> // Gợi ý: dùng .insertBefore
// <p>haha</p> 
// <p>hehe</p>
// <p>insert ở cuối</p> // Gợi ý: dùng .appendChild

// 3. Tạo 1 button với sự kiện onclick, khi user bấm vào thì ẩn hiện text bất kỳ, thay đổi background của màn hình.
    const click = document.querySelector('#click');
    const text = document.querySelector('#text');
    const body = document.querySelector('body');

    // text.style.visibility = "visible"
    click.addEventListener('click',()=>{
        if(text.style.visibility == "hidden"){
            body.style.backgroundColor = "white";
            text.style.visibility = "visible";
        }
        else {
            text.style.visibility = "hidden";
            body.style.backgroundColor = "blue";
        }
    })

// 3.2 Tạo thêm 1 button với text "Bảo trì" và sự kiện ondblclick, khi bấm vào thì ẩn hiện tất cả UI trên trang, show text "Page bảo trì".

    const  baotri = document.getElementById('baotri');
    baotri.addEventListener('dblclick',()=>{
       body.innerHTML = "Page bảo trì";
    })


// ////////////////////
// 4. Bài tập nhỏ: Tạo 1 gallery popup đơn giản
// Link source: https://drive.google.com/drive/folders/19MM0LoGycRFIPpw714JrjgoRfJjLUsBU?usp=sharing
// Yêu cầu xử lý: khi click vào thì show popup với hình ảnh tương ứng ở attribute alt (Thêm class open ở thẻ <div class="modal"> để xem ví dụ)


 const popup = document.querySelectorAll('.img-container');

let s = 0;
popup.forEach((el)=>{
    el.addEventListener('click',()=>{
        s++;
        if(s<2){
            el.classList.add('modal','open');
            const a =  el.querySelector('img');
            a.classList.add('full-img');
        }
        else
            {
            el.classList.remove('modal','open');
            const a =  el.querySelector('img');
            a.classList.remove('full-img');
            s=0;
            }
       
        
    })
})
