// 1100 → 18:20
export{convertMinutesToHourString} 

function convertMinutesToHourString(minutesAmount: number) {
    // arredondando para baixo
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    // adiciona um zero caso nao tenha
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}