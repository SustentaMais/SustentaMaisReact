export default function Toggle (){

const $html = document.querySelector('html');
    if($html.classList.contains("darkMode")===true){
        $html.removeAttribute('class','darkMode');
    }else{
       $html.setAttribute("class","darkMode")
    }
}