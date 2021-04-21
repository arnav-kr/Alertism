const AlertismCss='\n@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap\');\n\n.alert-backdrop *\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  outline: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  font-family: \'Montserrat\', sans-serif;\n}\n\n.alert-backdrop *::-webkit-scrollbar\n{\n  display: none;\n}\n\n.alert-hide\n{\n  display: none !important;\n}\n\n.alert-dark\n{\n  background: #000 !important;\n  color: #fff !important;\n}\n\n.alert-backdrop .alert-container.alert-dark .alert-close\n{\n  color: #fff !important;\n}\n\n.alert-backdrop .alert-container.alert-dark .alert-input\n{\n  background: #000 !important;\n  border-color: #ccc;\n  color: #fff !important;\n}\n\n.alert-glass\n{\n  background: rgba(255,255,255,0.1) !important;\n  color: #fff !important;\n}\n\n.alert-glass .alert-glassmorphism\n{\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  z-index: -1;\n}\n\n.alert-glass .alert-glassmorphism::before\n{\n  content: \'\';\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(45deg, red, blue);\n  clip-path: circle(40% at right 80%);\n}\n\n.alert-glass .alert-glassmorphism::after\n{\n  content: \'\';\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(45deg, #1fe6ff, #673ab7);\n  clip-path: circle(40% at left 25%);\n}\n\n.alert-backdrop .alert-container.alert-glass .alert-close\n{\n  color: #fff !important;\n}\n\n.alert-backdrop .alert-container.alert-glass .alert-input\n{\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  border-color: rgba(255, 255, 255, 0.5) !important;\n  color: #fff !important;\n}\n\n.alert-backdrop .alert-container.alert-glass .alert-footer\n{\n  border-color: rgba(255, 255, 255, 0.2) !important;\n}\n\n.alert-glass .alert-time-line\n{\n  background: rgba(255, 255, 255, 0.2) !important;\n}\n\n.alert-backdrop .alert-container.alert-glass .alert-buttons-container button\n{\n  background-color: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(255, 255, 255, 0.2) !important;\n}\n\n.alert-backdrop .alert-container.alert-glass .alert-buttons-container button:active\n{\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.8);\n}\n\n.alert-light-neumorphism\n{\n  background: #ebf5fc !important;\n}\n\n.alert-light-neumorphism *\n{\n  color: #32a3b1 !important;\n}\n\n.alert-backdrop .alert-container.alert-light-neumorphism .alert-input\n{\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.1) !important;\n  background: transparent !important;\n}\n\n.alert-backdrop .alert-container.alert-light-neumorphism .alert-buttons-container button\n{\n  background: #ebf5fc !important;\n  box-shadow: -2px -2px 6px rgba(255, 255, 255, 1),\n               2px  2px 6px rgba(0, 0, 0, 0.1) !important;\n  border-color: #ebf5fc !important;\n  border-radius: 10px !important;\n}\n\n.alert-backdrop .alert-container.alert-light-neumorphism .alert-buttons-container button:active\n{\n  color: #006c9c !important;\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.1) !important;\n}\n\n.alert-backdrop .alert-container.alert-light-neumorphism .alert-footer\n{\n  border-color: #32a3b1 !important;\n}\n\n.alert-light-neumorphism .alert-time-line\n{\n  background: #32a3b1 !important;\n}\n\n.alert-dark-neumorphism\n{\n  background: #131419 !important;\n}\n\n.alert-dark-neumorphism *\n{\n  color: #03a9f4 !important;\n}\n\n.alert-backdrop .alert-container.alert-dark-neumorphism .alert-input\n{\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.8) !important;\n  background: #131419 !important;\n}\n\n.alert-backdrop .alert-container.alert-dark-neumorphism .alert-buttons-container button\n{\n  background: #131419 !important;\n  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.01),\n               2px  2px 6px rgba(0, 0, 0, 0.8) !important;\n  border-color: #131419 !important;\n  border-radius: 10px !important;\n}\n\n.alert-backdrop .alert-container.alert-dark-neumorphism .alert-buttons-container button:active\n{\n  color: #006c9c !important;\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.8) !important;\n}\n\n.alert-backdrop .alert-container.alert-dark-neumorphism .alert-footer\n{\n  border-color: #03a9f4 !important;\n}\n\n.alert-dark-neumorphism .alert-time-line\n{\n  background: #03a9f4 !important;\n}\n\n.alert-backdrop\n{\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgb(0 0 0 / 50%);\n  backdrop-filter: blur(5px);\n  z-index: calc(10000000 * 1000000);\n  overflow: hidden;\n}\n\n.alert-top-left\n{\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\n.alert-top\n{\n  justify-content: center !important;\n  align-items: flex-start !important;\n}\n\n.alert-top-right\n{\n  justify-content: flex-end !important;\n  align-items: flex-start !important;\n}\n\n.alert-center-left\n{\n  justify-content: flex-start !important;\n  align-items: center !important;\n}\n\n.alert-center\n{\n  justify-content: center !important;\n  align-items: center !important;\n}\n\n.alert-center-right\n{\n  justify-content: flex-end !important;\n  align-items: center !important;\n}\n\n.alert-bottom-left\n{\n  justify-content: flex-start !important;\n  align-items: flex-end !important;\n}\n\n.alert-bottom\n{\n  justify-content: center !important;\n  align-items: flex-end !important;\n}\n\n.alert-bottom-right\n{\n  justify-content: flex-end !important;\n  align-items: flex-end !important;\n}\n\n.alert-backdrop .alert-container\n{\n  position: relative;\n  background: #fff;\n  color: #000;\n  padding: 25px 20px;\n  margin: 10px;\n  width: 50%;\n  max-height: calc(100% - 5vw);\n  max-width: calc(100% - 5vw);\n  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.5),\n               5px  5px 6px rgba(0, 0, 0, 0.5);\n  overflow: visible;\n}\n\n.alert-backdrop .alert-container .alert-heading\n{\n  position: relative;\n  text-align: center;\n  margin: 10px 0 20px 0;\n  font-size: 25px;\n  font-weight: 800;\n}\n\n.alert-backdrop .alert-container .alert-content\n{\n  position: relative;\n  text-align: left;\n  margin: 0 5px 20px 5px;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.alert-backdrop .alert-container .alert-buttons-container\n{\n  position: relative;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.alert-backdrop .alert-container .alert-buttons-container button\n{\n  position: relative;\n  padding: 5px 7px;\n  background: #2196f3;\n  border: 2px solid #2196f3;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 15px;\n  transition: 0.5s;\n  font-weight: 600;\n  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.01),\n               2px  2px 6px rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n}\n\n.alert-backdrop .alert-container .alert-buttons-container button:hover\n{\n  transform: scale(0.95);\n}\n\n.alert-backdrop .alert-container .alert-buttons-container button:active\n{\n  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\n              inset  2px  2px 6px rgba(0, 0, 0, 0.8);\n}\n\n.alert-backdrop .alert-container .alert-close\n{\n  position: absolute;\n  right: 0;\n  margin: 0 20px;\n  cursor: pointer;\n  font-family: Arial, Helvetica, sans-serif !important;\n  font-weight: 600;\n  background-color: transparent;\n  border: none;\n}\n\n.alert-backdrop .alert-container .alert-close:hover\n{\n  color: #f03d30 !important;\n}\n\n.alert-backdrop .alert-container .alert-close:active\n{\n  transform: scale(0.95);\n}\n\n.alert-backdrop .alert-container svg.icon\n{\n  position: relative;\n  height: 70px;\n  width: 70px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.alert-backdrop .alert-container input:not([type]).alert-input,\n.alert-backdrop .alert-container input[type="text"].alert-input,\n.alert-backdrop .alert-container input[type="number"].alert-input,\n.alert-backdrop .alert-container input[type="tel"].alert-input,\n.alert-backdrop .alert-container input[type="password"].alert-input,\n.alert-backdrop .alert-container input[type="email"].alert-input,\n.alert-backdrop .alert-container input[type="url"].alert-input,\n.alert-backdrop .alert-container input[type="date"].alert-input,\n.alert-backdrop .alert-container input[type="month"].alert-input,\n.alert-backdrop .alert-container input[type="week"].alert-input,\n.alert-backdrop .alert-container input[type="datetime-local"].alert-input,\n.alert-backdrop .alert-container input[type="time"].alert-input,\n.alert-backdrop .alert-container input[type="search"].alert-input,\n.alert-backdrop .alert-container textarea.alert-input\n{\n  position: relative;\n  width: 100%;\n  margin: 0 0 20px 0;\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  padding: 5px;\n  backdrop-filter: blur(5px);\n  transition: 0.5s;\n  font-weight: 700;\n}\n\n.alert-backdrop .alert-container input:not([type]).alert-input:hover,\n.alert-backdrop .alert-container input[type="text"].alert-input:hover,\n.alert-backdrop .alert-container input[type="number"].alert-input:hover,\n.alert-backdrop .alert-container input[type="tel"].alert-input:hover,\n.alert-backdrop .alert-container input[type="password"].alert-input:hover,\n.alert-backdrop .alert-container input[type="email"].alert-input:hover,\n.alert-backdrop .alert-container input[type="url"].alert-input:hover,\n.alert-backdrop .alert-container input[type="date"].alert-input:hover,\n.alert-backdrop .alert-container input[type="month"].alert-input:hover,\n.alert-backdrop .alert-container input[type="week"].alert-input:hover,\n.alert-backdrop .alert-container input[type="datetime-local"].alert-input:hover,\n.alert-backdrop .alert-container input[type="time"].alert-input:hover,\n.alert-backdrop .alert-container input[type="search"].alert-input:hover,\n.alert-backdrop .alert-container textarea.alert-input:hover,\n.alert-backdrop .alert-container input:not([type]).alert-input:focus,\n.alert-backdrop .alert-container input[type="text"].alert-input:focus,\n.alert-backdrop .alert-container input[type="number"].alert-input:focus,\n.alert-backdrop .alert-container input[type="tel"].alert-input:focus,\n.alert-backdrop .alert-container input[type="password"].alert-input:focus,\n.alert-backdrop .alert-container input[type="email"].alert-input:focus,\n.alert-backdrop .alert-container input[type="url"].alert-input:focus,\n.alert-backdrop .alert-container input[type="date"].alert-input:focus,\n.alert-backdrop .alert-container input[type="month"].alert-input:focus,\n.alert-backdrop .alert-container input[type="week"].alert-input:focus,\n.alert-backdrop .alert-container input[type="datetime-local"].alert-input:focus,\n.alert-backdrop .alert-container input[type="time"].alert-input:focus,\n.alert-backdrop .alert-container input[type="search"].alert-input:focus,\n.alert-backdrop .alert-container textarea.alert-input:focus\n{\n  border-color: #2196f3 !important;\n}\n\n.alert-backdrop .alert-container input[type="checkbox"].alert-input\n{\n  position: relative;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border: 4px solid #ccc;\n  padding: 10px;\n  margin: 0 0 20px 0;\n  background: transparent !important;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.alert-backdrop .alert-container input[type="checkbox"].alert-input:checked\n{\n  border-color: #2196f3 !important;\n  transform: rotate(45deg) translate(5px, -10px);\n  border-top-color: transparent !important;\n  border-left-color: transparent !important;\n  padding: 10px 4px;\n}\n\n.alert-backdrop .alert-container .alert-footer\n{\n  position: relative;\n  border-top: 2px solid rgb(30, 30, 30);\n  margin: 25px 0 0 0;\n  padding: 20px 0 0 0;\n  text-align: center;\n  font-weight: 700;\n}\n\n.alert-backdrop .alert-container .alert-time-line\n{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 7px;\n  background: rgb(30, 30, 30);\n}\n\n@keyframes closeTimeLine\n{\n  from\n  {\n    width: 100%;\n  }\n  to\n  {\n    width: 0;\n  }\n}\n\n@keyframes zoom-in\n{\n  0%, 25%\n  {\n    transform: scale(0);\n  }\n\n  50%\n  {\n    transform: scale(1.1);\n  }\n\n  75%\n  {\n    transform: scale(0.9);\n  }\n\n  100%\n  {\n    transform: scale(1);\n  }\n}\n\n@keyframes top\n{\n  0%, 25%\n  {\n    transform: translateY(-200%);\n  }\n\n  50%\n  {\n    transform: translateY(10%);\n  }\n\n  75%\n  {\n    transform: translateY(-10%);\n  }\n\n  100%\n  {\n    transform: translateY(0);\n  }\n}\n\n@keyframes bottom\n{\n  0%, 25%\n  {\n    transform: translateY(200%);\n  }\n\n  50%\n  {\n    transform: translateY(-10%);\n  }\n\n  75%\n  {\n    transform: translateY(10%);\n  }\n\n  100%\n  {\n    transform: translateY(0);\n  }\n}\n\n@keyframes left\n{\n  0%, 25%\n  {\n    transform: translateX(-200%);\n  }\n\n  50%\n  {\n    transform: translateX(10%);\n  }\n\n  75%\n  {\n    transform: translateX(-10%);\n  }\n\n  100%\n  {\n    transform: translateX(0);\n  }\n}\n\n@keyframes right\n{\n  0%, 25%\n  {\n    transform: translateX(200%);\n  }\n\n  50%\n  {\n    transform: translateX(-10%);\n  }\n\n  75%\n  {\n    transform: translateX(10%);\n  }\n\n  100%\n  {\n    transform: translateX(0);\n  }\n}\n\n@keyframes zoom-in-out\n{\n  0%, 25%\n  {\n    transform: scale(1);\n  }\n\n  50%\n  {\n    transform: scale(0.9);\n  }\n\n  75%\n  {\n    transform: scale(1.1);\n  }\n\n  100%\n  {\n    transform: scale(0);\n  }\n}\n\n@keyframes top-out\n{\n  0%, 25%\n  {\n    transform: translateY(0);\n  }\n\n  50%\n  {\n    transform: translateY(10%);\n  }\n\n  75%\n  {\n    transform: translateY(-10%);\n  }\n\n  100%\n  {\n    transform: translateY(200%);\n  }\n}\n\n@keyframes bottom-out\n{\n  0%, 25%\n  {\n    transform: translateY(0);\n  }\n\n  50%\n  {\n    transform: translateY(-10%);\n  }\n\n  75%\n  {\n    transform: translateY(10%);\n  }\n\n  100%\n  {\n    transform: translateY(-200%);\n  }\n}\n\n@keyframes left-out\n{\n  0%, 25%\n  {\n    transform: translateX(0);\n  }\n\n  50%\n  {\n    transform: translateX(10%);\n  }\n\n  75%\n  {\n    transform: translateX(-10%);\n  }\n\n  100%\n  {\n    transform: translateX(200%);\n  }\n}\n\n@keyframes right-out\n{\n  0%, 25%\n  {\n    transform: translateX(0);\n  }\n\n  50%\n  {\n    transform: translateX(-10%);\n  }\n\n  75%\n  {\n    transform: translateX(10%);\n  }\n\n  100%\n  {\n    transform: translateX(-200%);\n  }\n}\n\n.alert-toast-container *\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  outline: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  font-family: \'Montserrat\', sans-serif;\n}\n\n.alert-toast-container *::-webkit-scrollbar\n{\n  display: none;\n}\n\n.alert-toast-container\n{\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: calc(10000000 * 1000000);\n}\n\n.alert-toast-container .alert-toast\n{\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  margin: 20px;\n  min-width: 200px;\n  max-width: calc(100% - 5vw);\n  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.5),\n               5px  5px 6px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  overflow: hidden;\n}\n\n.alert-toast-container .alert-toast svg.icon\n{\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 10px 0 0;\n}\n\n.alert-toast-container .alert-toast .alert-time-line\n{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n@keyframes Zoom-in\n{\n  0%\n  {\n    transform: scale(0);\n  }\n\n  100%\n  {\n    transform: scale(1);\n  }\n}\n\n@keyframes Top\n{\n  0%\n  {\n    transform: translateY(-200%);\n  }\n\n  100%\n  {\n    transform: translateY(0);\n  }\n}\n\n@keyframes Bottom\n{\n  0%\n  {\n    transform: translateY(200%);\n  }\n\n  100%\n  {\n    transform: translateY(0);\n  }\n}\n\n@keyframes Left\n{\n  0%\n  {\n    transform: translateX(-200%);\n  }\n\n  100%\n  {\n    transform: translateX(0);\n  }\n}\n\n@keyframes Right\n{\n  0%\n  {\n    transform: translateX(200%);\n  }\n\n  100%\n  {\n    transform: translateX(0);\n  }\n}\n\n@keyframes Zoom-in-out\n{\n  0%\n  {\n    transform: scale(1);\n  }\n\n  100%\n  {\n    transform: scale(0);\n  }\n}\n\n@keyframes Bottom-out\n{\n  0%\n  {\n    transform: translateY(0);\n  }\n\n  100%\n  {\n    transform: translateY(200%);\n  }\n}\n\n@keyframes Top-out\n{\n  0%\n  {\n    transform: translateY(0);\n  }\n\n  100%\n  {\n    transform: translateY(-200%);\n  }\n}\n\n@keyframes Right-out\n{\n  0%\n  {\n    transform: translateX(0);\n  }\n\n  100%\n  {\n    transform: translateX(200%);\n  }\n}\n\n@keyframes Left-out\n{\n  0%\n  {\n    transform: translateX(0);\n  }\n\n  100%\n  {\n    transform: translateX(-200%);\n  }\n}\n\n@media(max-width:991px)\n{\n  .alert-backdrop .alert-container\n  {\n    width: 60%;\n  }\n}\n\n@media(max-width:661px)\n{\n  .alert-backdrop .alert-container\n  {\n    width: calc(100% - 10vw);\n  }\n}\n\n@media(max-width:331px)\n{\n  .alert-backdrop .alert-container\n  {\n    width: calc(100% - 5vw);\n  }\n}\n',headForAppendingAlertism=document.head||document.getElementsByTagName("head")[0],styleForAppendingAertism=document.createElement("style");headForAppendingAlertism.appendChild(styleForAppendingAertism),styleForAppendingAertism.type="text/css",styleForAppendingAertism.styleSheet?styleForAppendingAertism.styleSheet.cssText=AlertismCss:styleForAppendingAertism.appendChild(document.createTextNode(AlertismCss));const AlertismBackdrop=document.createElement("div"),AlertismAlertContainer=document.createElement("div"),AlertismCrossBtn=document.createElement("button"),AlertismIcon=document.createElement("div"),AlertismHeading=document.createElement("h2"),AlertismContent=document.createElement("p"),AlertismInput=document.createElement("input"),AlertismTextarea=document.createElement("textarea"),AlertismBtnContainer=document.createElement("div"),AlertismOkBtn=document.createElement("button"),AlertismCloseBtn=document.createElement("button"),AlertismGlassMorphism=document.createElement("div"),AlertismFooter=document.createElement("div");function Alertism(arguments){document.body.appendChild(AlertismBackdrop),AlertismCrossBtn.innerText="X",AlertismBackdrop.className="alert-backdrop",AlertismAlertContainer.className="alert-container",AlertismCrossBtn.className="alert-close alert-hide",AlertismIcon.classList.add("alert-hide"),AlertismHeading.classList.add("alert-heading"),AlertismContent.classList.add("alert-content"),AlertismInput.className="alert-input alert-hide",AlertismInput.type="text",AlertismInput.value="",AlertismInput.placeholder="Enter Text",AlertismTextarea.className="alert-input",AlertismTextarea.type="text",AlertismTextarea.value="",AlertismTextarea.placeholder="Enter Text",AlertismIcon.innerHTML=checkIcon.tickIcon,AlertismToastIcon.innerHTML=checkIcon.tickIcon,AlertismBtnContainer.classList.add("alert-buttons-container"),AlertismCloseBtn.classList.add("alert-hide"),AlertismGlassMorphism.className="alert-glassmorphism",AlertismFooter.className="alert-footer alert-hide",AlertismTimerCountDown.className="alert-time-line alert-hide",AlertismToastContainer.classList.add("alert-toast-container"),AlertismToast.classList.className="alert-toast",AlertismToastGlassMorphism.className="alert-glassmorphism alert-hide",AlertismToastIcon.classList.add("alert-hide"),AlertismToastTimerCountDown.className="alert-time-line alert-hide",document.body.style.overflow="hidden",void 0!==arguments.backdrop?AlertismBackdrop.style.background=arguments.backdrop:AlertismBackdrop.style.background="rgb(0 0 0 / 50%)",void 0!==arguments.position?AlertismBackdrop.classList.add("alert-"+arguments.position):AlertismBackdrop.className="alert-backdrop",""!==arguments.background?AlertismAlertContainer.style.background=arguments.background:AlertismAlertContainer.style.background="#fff",void 0!==arguments.enableCloseBtn&&!0===arguments.enableCloseBtn?AlertismCrossBtn.classList.remove("alert-hide"):AlertismCrossBtn.classList.add("alert-hide"),void 0!==arguments.enableIcon&&!0===arguments.enableIcon?AlertismIcon.classList.remove("alert-hide"):AlertismIcon.classList.add("alert-hide"),void 0!==arguments.icon&&(void 0!==arguments.icon.type&&(AlertismIcon.innerHTML=checkIcon[arguments.icon.type+"Icon"]),void 0!==arguments.icon.color&&(document.querySelectorAll(".alert-backdrop .alert-container svg path").forEach(n=>{n.style.fill=arguments.icon.color}),"warning"===arguments.icon.type&&(document.querySelector(".alert-backdrop .alert-container svg circle").style.fill=arguments.icon.color)),"right"===arguments.icon.position?(document.querySelector(".alert-backdrop .alert-container svg").style.left="100%",document.querySelector(".alert-backdrop .alert-container svg").style.transform="translateX(-100%)"):"left"===arguments.icon.position&&(document.querySelector(".alert-backdrop .alert-container svg").style.left="0",document.querySelector(".alert-backdrop .alert-container svg").style.transform="translateX(0)")),void 0!==arguments.alertHeading?AlertismHeading.innerText=arguments.alertHeading:AlertismHeading.innerText="Alert",void 0!==arguments.alertText?AlertismContent.innerText=arguments.alertText:void 0!==arguments.alertHTML?AlertismContent.innerHTML=arguments.alertHTML:AlertismContent.innerText="This is an Alert Box. This is made by Alertism.js V2.0.0, The Alertism.js V2.0.0 is version 2 of a JavaScript Library by Assassin.",void 0!==arguments.enableInput&&!0===arguments.enableInput?AlertismInput.classList.remove("alert-hide"):AlertismInput.classList.add("alert-hide"),void 0!==arguments.input?(void 0!==arguments.input.type&&(AlertismInput.type=arguments.input.type,"textarea"===arguments.input.type&&AlertismInput.parentNode.replaceChild(AlertismTextarea,AlertismInput)),void 0!==arguments.input.value&&(AlertismInput.value=arguments.input.value,AlertismTextarea.value=arguments.input.value),void 0!==arguments.input.placeholder&&(AlertismInput.placeholder=arguments.input.placeholder,AlertismTextarea.placeholder=arguments.input.placeholder)):(AlertismInput.type="text",AlertismInput.value="",AlertismInput.placeholder="Enter Text"),void 0!==arguments.btnText?AlertismOkBtn.innerText=arguments.btnText:AlertismOkBtn.innerText="Ok",void 0!==arguments.closeBtnText?(AlertismCloseBtn.classList.remove("alert-hide"),AlertismCloseBtn.innerText=arguments.closeBtnText):(AlertismCloseBtn.classList.add("alert-hide"),AlertismCloseBtn.innerText=""),void 0!==arguments.alertFooter?(AlertismFooter.classList.remove("alert-hide"),AlertismFooter.innerHTML=arguments.alertFooter):(AlertismFooter.classList.add("alert-hide"),AlertismFooter.innerHTML=""),void 0!==arguments.animation?AlertismAlertContainer.style.animation=arguments.animation+" 0.5s linear 1":void 0!==arguments.animationIn?AlertismAlertContainer.style.animation=arguments.animationIn+" 0.5s linear 1":AlertismAlertContainer.style.animation="",AlertismOkBtn.onclick=(()=>{closeAlertism(arguments.animation,arguments.animationOut,arguments.onConfirmed)}),AlertismCloseBtn.onclick=(()=>{closeAlertism(arguments.animation,arguments.animationOut,arguments.onDenied)}),AlertismCrossBtn.onclick=(()=>{closeAlertism(arguments.animation,arguments.animationOut,arguments.onCanceled)}),void 0!==arguments.theme?("glass"===arguments.theme&&AlertismAlertContainer.appendChild(AlertismGlassMorphism),AlertismAlertContainer.classList.add("alert-"+arguments.theme)):AlertismAlertContainer.className="alert-container",void 0!==arguments.timer?(AlertismTimerCountDown.classList.remove("alert-hide"),AlertismTimerCountDown.style.animation="closeTimeLine "+Number(arguments.timer)/1e3+"s linear",AlertismBtnContainer.classList.add("alert-hide"),AlertismCrossBtn.classList.add("alert-hide"),AlertismTimerCountDown.onanimationend=(()=>{AlertismTimerCountDown.classList.add("alert-hide")}),setTimeout(()=>{closeAlertism(arguments.animation,arguments.animationOut,arguments.onAutoClose)},Number(arguments.timer))):(AlertismTimerCountDown.classList.add("alert-hide"),AlertismBtnContainer.classList.remove("alert-hide"))}function closeAlertism(n,t,e){AlertismAlertContainer.style.animation=n?n+"-out 0.5s linear 1":t?t+" 0.5s linear 1":"",setTimeout(()=>{AlertismBackdrop.remove(),document.body.style.overflow="auto",e&&e()},500)}function Toast(arguments){document.body.appendChild(AlertismToastContainer),AlertismToastText.innerText=arguments.text||"Hello, I am a toast from Alertism V2.0.0",AlertismToast.style.background=arguments.background||"#333",AlertismToast.style.color=arguments.color||"#fff",void 0!==arguments.position?AlertismToastContainer.classList.add("alert-"+arguments.position):AlertismToastContainer.className="alert-toast-container",void 0!==arguments.enableIcon&&!0===arguments.enableIcon?AlertismToastIcon.classList.remove("alert-hide"):AlertismToastIcon.classList.add("alert-hide"),void 0!==arguments.icon&&(void 0!==arguments.icon.type&&(AlertismToastIcon.innerHTML=checkIcon[arguments.icon.type+"Icon"]),void 0!==arguments.icon.color&&(document.querySelectorAll(".alert-toast-container .alert-toast svg path").forEach(n=>{n.style.fill=arguments.icon.color}),"warning"===arguments.icon.type&&(document.querySelector(".alert-toast-container .alert-toast svg circle").style.fill=arguments.icon.color))),void 0!==arguments.theme?("glass"===arguments.theme&&AlertismToast.appendChild(AlertismToastGlassMorphism),AlertismToast.classList.add("alert-"+arguments.theme)):AlertismToast.className="alert-toast",void 0!==arguments.showTimeLine&&!0===arguments.showTimeLine?(AlertismToastTimerCountDown.classList.remove("alert-hide"),AlertismToastTimerCountDown.style.animation="closeTimeLine "+Number(arguments.timer||1500)/1e3+"s linear",AlertismToastTimerCountDown.onanimationend=(()=>{AlertismToastTimerCountDown.classList.add("alert-hide")})):AlertismToastTimerCountDown.classList.add("alert-hide"),void 0!==arguments.animation?AlertismToast.style.animation=arguments.animation+" 0.5s, "+arguments.animation+"-out 0.5s "+Number(arguments.timer||1500)/1e3+"s":AlertismToast.style.animation="Bottom 0.5s, Bottom-out 0.5s "+Number(arguments.timer||1500)/1e3+"s",setTimeout(()=>{AlertismToastContainer.remove(),void 0!==arguments.onClose&&arguments.onClose()},Number(arguments.timer||1500)+500)}AlertismTimerCountDown=document.createElement("div"),AlertismToastContainer=document.createElement("div"),AlertismToast=document.createElement("div"),AlertismToastGlassMorphism=document.createElement("div"),AlertismToastIcon=document.createElement("div"),AlertismToastText=document.createElement("h4"),AlertismToastTimerCountDown=document.createElement("div"),checkIcon={tickIcon:'<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve"><path fill="#32be46" d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933    C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8    s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"/><path fill="#32be46" d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201    c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419    l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z"/></svg>',crossIcon:'<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path fill="#f03d30" d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"/><path fill="#f03d30" d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"/><path fill="#f03d30" d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"/></svg>',infoIcon:'<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path fill="#ccc" d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z    M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"/><path fill="#ccc" d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991   c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"/><path fill="#ccc" d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z"/></svg>',warningIcon:'<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="#ffa500" d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"/><path fill="#ffa500" d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"/><circle fill="#ffa500" cx="256" cy="349.16" r="27"/></svg>',questionIcon:'<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path fill="#87adbd" d="m277.332031 384c0 11.78125-9.550781 21.332031-21.332031 21.332031s-21.332031-9.550781-21.332031-21.332031 9.550781-21.332031 21.332031-21.332031 21.332031 9.550781 21.332031 21.332031zm0 0"/><path fill="#87adbd" d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path fill="#87adbd" d="m256 314.667969c-8.832031 0-16-7.167969-16-16v-21.546875c0-20.308594 12.886719-38.507813 32.042969-45.269532 25.492187-8.980468 42.625-36.140624 42.625-55.851562 0-32.363281-26.304688-58.667969-58.667969-58.667969s-58.667969 26.304688-58.667969 58.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16c0-49.984375 40.664063-90.667969 90.667969-90.667969s90.667969 40.683594 90.667969 90.667969c0 35.585938-28.097657 73.367188-63.980469 86.039062-6.398438 2.238282-10.6875 8.316407-10.6875 15.101563v21.527344c0 8.832031-7.167969 16-16 16zm0 0"/></svg'},AlertismCrossBtn.innerText="X",AlertismBackdrop.className="alert-backdrop",AlertismAlertContainer.classList.add("alert-container"),AlertismCrossBtn.className="alert-close alert-hide",AlertismIcon.classList.add("alert-hide"),AlertismHeading.classList.add("alert-heading"),AlertismContent.classList.add("alert-content"),AlertismInput.className="alert-input alert-hide",AlertismInput.type="text",AlertismInput.value="",AlertismInput.placeholder="Enter Text",AlertismTextarea.className="alert-input",AlertismTextarea.type="text",AlertismTextarea.value="",AlertismTextarea.placeholder="Enter Text",AlertismIcon.innerHTML=checkIcon.tickIcon,AlertismToastIcon.innerHTML=checkIcon.tickIcon,AlertismBtnContainer.classList.add("alert-buttons-container"),AlertismCloseBtn.classList.add("alert-hide"),AlertismGlassMorphism.className="alert-glassmorphism",AlertismFooter.className="alert-footer alert-hide",AlertismTimerCountDown.className="alert-time-line alert-hide",AlertismToastContainer.classList.add("alert-toast-container"),AlertismToast.classList.add("alert-toast"),AlertismToastGlassMorphism.className="alert-glassmorphism alert-hide",AlertismToastIcon.classList.add("alert-hide"),AlertismToastTimerCountDown.className="alert-time-line alert-hide",AlertismBackdrop.appendChild(AlertismAlertContainer),AlertismAlertContainer.appendChild(AlertismCrossBtn),AlertismAlertContainer.appendChild(AlertismIcon),AlertismAlertContainer.appendChild(AlertismHeading),AlertismAlertContainer.appendChild(AlertismContent),AlertismAlertContainer.appendChild(AlertismInput),AlertismAlertContainer.appendChild(AlertismBtnContainer),AlertismBtnContainer.appendChild(AlertismOkBtn),AlertismBtnContainer.appendChild(AlertismCloseBtn),AlertismAlertContainer.appendChild(AlertismFooter),AlertismAlertContainer.appendChild(AlertismGlassMorphism),AlertismAlertContainer.appendChild(AlertismTimerCountDown),AlertismToastContainer.appendChild(AlertismToast),AlertismToast.appendChild(AlertismToastIcon),AlertismToast.appendChild(AlertismToastText),AlertismToast.appendChild(AlertismToastTimerCountDown);
