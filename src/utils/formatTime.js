export function day(date) {
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 
}

export function hour(date) {
  return date.toTimeString().match(/[0-2][0-9]:[0-5][0-9]/) 
}