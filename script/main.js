//위치에 따른 header 변화
//메인화면에서 header숨기기(profile의 위치보다 window가 작을 때)
const header = document.querySelector('header')
const profile = document.querySelector('.profile')
const nav = document.querySelectorAll('nav > ul > li')
console.log(header,profile)
window.addEventListener('scroll',()=>{
    console.log(`window.pageYOffset=> ${window.pageYOffset}`)
    console.log(`profile.offsetTop=> ${profile.offsetTop}`)
    if(window.pageYOffset < profile.offsetTop){
        header.style.display = 'none'
    }else{header.style.display = 'flex'}
    //위치에 따라 알맞게 active class 적용하기
});
const web = document.querySelector('.web')
console.log(`web.offsetTop=> ${web.offsetTop}`)
const detail = document.querySelector('.detail')
console.log(`detail.offsetTop=> ${detail.offsetTop}`)
const sns = document.querySelector('.sns')
console.log(`sns.offsetTop=> ${sns.offsetTop}`)
const etc = document.querySelector('.etc')
console.log(`etc.offsetTop=> ${etc.offsetTop}`)
window.addEventListener('scroll',()=>{
    if(profile.offsetTop < window.pageYOffset && window.pageYOffset < web.offsetTop){
        for(let i of nav){i.classList.remove('nav_active')}
        nav[0].classList.add('nav_active')
    }
})
window.addEventListener('scroll',()=>{
    if(web.offsetTop < window.pageYOffset && window.pageYOffset < detail.offsetTop){
        for(let i of nav){i.classList.remove('nav_active')}
        nav[1].classList.add('nav_active')
    }
})
window.addEventListener('scroll',()=>{
    if(detail.offsetTop < window.pageYOffset && window.pageYOffset < sns.offsetTop){
        for(let i of nav){i.classList.remove('nav_active')}
        nav[2].classList.add('nav_active')
    }
})
window.addEventListener('scroll',()=>{
    if(sns.offsetTop < window.pageYOffset && window.pageYOffset < etc.offsetTop){
        for(let i of nav){i.classList.remove('nav_active')}
        nav[3].classList.add('nav_active')
    }
})
window.addEventListener('scroll',()=>{
    if(etc.offsetTop < window.pageYOffset){
        for(let i of nav){i.classList.remove('nav_active')}
        nav[4].classList.add('nav_active')
    }
})