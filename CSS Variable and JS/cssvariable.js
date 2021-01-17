const input = document.querySelectorAll('.in input');

input.forEach(input => input.addEventListener('change',handleUpdate));
input.forEach(input => input.addEventListener('mousemove',handleUpdate));
function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}