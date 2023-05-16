function lazyFunction(cb, initialValue = 0) {
  setTimeout(() => {
    console.log('Me demoré 1s')

    const sum = expensiveFunction(initialValue)
    cb(sum)
  }, 1_000)
}

function expensiveFunction(initialValue) {
  let result = 0

  for (let i = 0; i < 1_000_000; i++) {
    result += i
  }

  return result + initialValue
}

function main() {
  lazyFunction((sum) => {
    console.log(`Primer resultado: ${sum}`)

    lazyFunction((sum2) => {
      console.log(`Segundo resultado: ${sum2}`)

      lazyFunction((sum3) => {
        console.log(`Tercer resultado: ${sum3}`)

        lazyFunction((sum4) => {
          console.log(`Cuarto resultado: ${sum4}`)
        }, sum3)
      }, sum2)
    }, sum)
  })
}

main()

// 1. pido un usuario con un id
// 2. pido un customer con el user_customer_id
// 3. pido un enterprise con el customer_enterprise_id
// 4. pido los afiliados con el enterprise_affiliates

// Promesas / async-await