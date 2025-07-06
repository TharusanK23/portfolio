const cursor = document.createElement("div");
const child = document.createElement("div");

const cursorDefaultStyle = `
            width: 28px;
            height: 28px;
            border-radius: 9999px;
            border: 1.5px solid #FFFFFF;
            position: fixed;
            transform: translate(-50%, -50%);
            top: 0; left: '0';
            transition: 300ms ease-out;
            pointer-events: none;
            z-index: 9999
        `;

const childDefaultStyle = `
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #FFFFFF;
            position: fixed;
            top: 0; left: '0';
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999
        `;

cursor.style.cssText = cursorDefaultStyle;
child.style.cssText = childDefaultStyle;

document.body.appendChild(cursor);
document.body.appendChild(child);

let isActived = false;

window.addEventListener("mousemove", (event) => {
  if (isActived) return;

  cursor.style.top = child.style.top = `${event.clientY}px`;
  cursor.style.left = child.style.left = `${event.clientX}px`;
});

const onHover = document.querySelectorAll(".onHover");
const fixed = (event, getTransition) => {
  event.stopPropagation();
  isActived = true;
  const element = event.currentTarget;
  const { width, height, top, left } = element.getBoundingClientRect();

  const style = window.getComputedStyle(element);
  const borderRadius = style.getPropertyValue("border-radius");
  const transition = style.getPropertyValue("transition");

  cursor.style.cssText = `
                    ${cursorDefaultStyle}
                    width: ${width}px;
                    height: ${height}px;
                    border-radius: ${borderRadius};
                    top: ${top}px;
                    left: ${left}px;
                    transform: translate(0, 0);
                    border-color: white;
                    ${getTransition ? `transition: ${transition};` : ""}
                `;

  child.style.cssText = `
                    ${childDefaultStyle}
                    display: none
                `;
};

const childHoverStyle = `
            width: 21px;
            height: 21px;
            border-radius: 50%;
            opacity: 0.7;
            background-color: #FFC448;
            position: fixed;
            top: 0; left: '0';
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999
        `;

for (const hover of onHover) {
  hover.addEventListener("mousedown", (event) => {
    cursor.style.cssText = cursorDefaultStyle;
    child.style.cssText = childHoverStyle;
  });
  hover.addEventListener("mouseup", (event) => {
    cursor.style.cssText = cursorDefaultStyle;
    child.style.cssText = childHoverStyle;
  });
  hover.addEventListener("mouseover", (event) => {
    cursor.style.cssText = cursorDefaultStyle;
    child.style.cssText = childHoverStyle;
  });
  hover.addEventListener("mouseleave", (event) => {
    isActived = false;
    cursor.style.cssText = cursorDefaultStyle;
    child.style.cssText = childDefaultStyle;
  });
}
