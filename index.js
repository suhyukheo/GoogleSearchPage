
  var num=0
  // 플러스 표시를 눌렀을 때
  document.querySelector('#urlplus').addEventListener('click',(e)=>{
    document.querySelector('#pluspage').classList.remove('hidden')
    document.querySelector('.screen').classList.remove('hidden')
  })

  //플러스 표시를 눌러서 추가 페이지가 뜬 후

  // 실패 버튼을 눌렀을 때
  document.querySelector('#faile').addEventListener('click', function(e){
    document.querySelector('#pluspage').classList.add('hidden')
    document.querySelector('.screen').classList.add('hidden')
  })
  
  // 성공 버튼을 눌렀을 때
  document.querySelector('#success').addEventListener('click', function(e){
    let url=document.querySelector('#url').value+'/favicon.ico'
    if(url.search('https')===-1){
      url='https://'+url
    }
    let name=document.querySelector('#name').value
    var test=`
    <div class="title" id=${num}>
     <div class="sort">
       <div class="titleIcon sort">
         <img src=${url} width="24px" height="24px">
       </div>
     </div>
    <div class="titleName"><p>${name}</p></div>
   </div>`
   num+=1;
   document.querySelector('#appendhere').insertAdjacentHTML('afterbegin',test)
   document.querySelector('#pluspage').classList.add('hidden')
   document.querySelector('.screen').classList.add('hidden')
    for(let i=0;i<num;i++){
      document.getElementById(`${i}`).addEventListener('mouseover',function(){
        document.getElementById(`${i}`).classList.add('titleevent')
      })
       document.getElementById(`${i}`).addEventListener('mouseout',(e)=>{
         document.getElementById(`${i}`).classList.remove('titleevent')
      })
    }
 
   })
  

