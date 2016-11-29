export function saySomething(...args: string[]) {
    args.forEach(element => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = element;
    });
}