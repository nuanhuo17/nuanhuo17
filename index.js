const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---

I'm hangda, a daily writer about energy management and personal ideas.    
- 🔭 I’m currently striving for a better life in Chongqing.     
- 🤔 My blog 👉 https://github.com/nuanhuo17/HangDa-blog       
- 💬 Ask me some questions about Effeciency Tools 👉 https://wx.zsxq.com/dweb2/index/group/28511814484121
- 📫 My E-mail: nuanhuo17#126.com          
- 🔧 My Power Tools: </br>   
![](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![VS Code](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![](https://img.shields.io/badge/%E5%9B%BE%E5%BA%8A-MWeb-lightgrey)       
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)     
\
`

console.log(readme)
