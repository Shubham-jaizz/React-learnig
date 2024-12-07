const reactElement = {
    type:'a',
    props:{
        href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&t=428s",
        target:'_blank'
    },
    content:"click me to play music"

}

function reactRender(reactElement, container) {
    /*
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.content;
    element.setAttribute("href", reactElement.props.href);
    element.setAttribute("target", reactElement.props.target);
    container.appendChild(element);
    */

    //2nd way to create
    const element = document.createElement(reactElement.type);
    const {props} = reactElement;
    element.innerHTML = reactElement.content;
    for (const prop in props) {
        if (prop === "content")continue 
        element.setAttribute(prop, props[prop]);
    }
    container.appendChild(element);

}
const mainContainer = document.querySelector('.root');

reactRender(reactElement, mainContainer);