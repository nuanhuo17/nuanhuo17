const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      'ā'.repeat(passedProgressBarIndex) +
      'ā'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there š
ā³ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
ā° Updated on ${new Date().toUTCString()}
---

I'm hangda, a daily writer about energy management and personal ideas.    
- š­ Iām currently striving for a better life in Chongqing.     
- š¤ My blog š https://github.com/nuanhuo17/HangDa-blog       
- š¬ Ask me some questions about Effeciency Tools š https://wx.zsxq.com/dweb2/index/group/28511814484121
- š« My E-mail: nuanhuo17#126.com          
- š§ My Power Tools: </br>   
![](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![VS Code](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![](https://img.shields.io/badge/%E5%9B%BE%E5%BA%8A-MWeb-lightgrey)       
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)     
\
`

console.log(readme)
