const btnElement = document.getElementById('btn')
const spanElement = document.getElementById('Updated-Name')

btnElement.onclick = function() {
    const Name = prompt('Please Enter Your Name');
    spanElement.textContent = Name;
}
