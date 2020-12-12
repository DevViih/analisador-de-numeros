var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function clicar(){

if(isNumero(num.value) && !inLista(num.value , valores)){
  valores.push(Number(num.value))
  let item = document.createElement('option')
  item.text =`valor ${num.value} adicionado`
  lista.appendChild(item)
  res.innerHTML = ``
}else {
  window.alert('valor inválido ou já encontrado na lista !')
}
 num.value = ''
 num.focus()
  
}
function isNumero(n){
  if(Number(n) >= 1 && Number(n)<= 100){
  return true 
  } else {
    return false 
  }
}

function inLista(n , l){
  
  if(l.indexOf(Number(n)) != -1){
    return true 
  }else {
    return false 
  }

}


function finalizar(){
  if(valores.length== 0){
    window.alert('para finalizar adicione valores')
  }else {
    
   let  to = valores.length
   let maior = valores[1]
   let menor = valores[0]
   let soma = 0
   let média = 0 
   
   for(let pos in valores){
    soma += valores[pos]
     if(valores[pos] > maior)
      maior = valores[pos]
   else (valores[pos] < menor )
      menor = valores[pos]
   }
   média = soma/to 
    
    res.innerHTML = ''
    res.innerHTML +=  `<p>Ao todo, temos ${to} números digitados </p> `
    res.innerHTML += `<p>O maior valor digitado é ${maior}</p>`
    res.innerHTML += `<p>O menor valor digitados foi ${menor}</p>`
    res.innerHTML += `<p> A soma de todos os valores é ${soma}`
    res.innerHTML +=`<p>A média dos valores digitados é ${média}</p>`
  }
  
}
  
  
