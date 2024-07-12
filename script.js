const textarea_Value = document.getElementById('textarea_Value')
const charater = document.getElementById('charater')
const wordCount= document.getElementById('wordCount')
const paragraph_count = document.getElementById('paragraph_count')
const readingTime = document.getElementById('readingTime')
const countingValue =  () => {
    let text = textarea_Value.value
    const currentLength = textarea_Value.value.length
    charater.innerHTML = currentLength
    // let spaces = text.trim().split(' ')
    let spaces = text.split(' ')
    wordCount.innerHTML = spaces.length

    var paragraph = text.split('\n')
    paragraph_count.innerHTML = paragraph.length

    const wordsPerMinute = 275;
    // const readTime = Math.ceil(spaces.length/wordsPerMinute)

    var words = textarea_Value.value.match(/\b[-?(\w+)?]+\b/gi);

    if(words){
        var second = Math.floor((words.length * 60) / wordsPerMinute)
        if(second > 59){
            var minutes = Math.floor(second / 60)
            second = second - minutes * 60
            readingTime.innerHTML = minutes + 'm ' + second + 's';
            } else {
                readingTime.innerHTML = second + 's';
            }
    }
    else{
        readingTime.innerHTML = '0s';
    }
}


textarea_Value.addEventListener('keyup', countingValue)