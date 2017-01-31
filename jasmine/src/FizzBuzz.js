function FizzBuzz(number) {
  text = ''
  // number % 3 == 0 --> text += fizz
  number % 3 == 0 ? text += 'fizz' : null
  // number % 5 == 0 --> text += buzz
  number % 5 == 0 ? text += 'buzz' : null
  // return text == '' ? number : text
  return text ? text : number
}
