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
    console.log(`Primer resultado con callbacks: ${sum}`)

    lazyFunction((sum2) => {
      console.log(`Segundo resultado con callbacks: ${sum2}`)

      lazyFunction((sum3) => {
        console.log(`Tercer resultado con callbacks: ${sum3}`)

        lazyFunction((sum4) => {
          console.log(`Cuarto resultado con callbacks: ${sum4}`)
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

// Promesas

function lazyFunctionWithPromise(initialValue = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Me demoré 1s')

      const sum = expensiveFunction(initialValue)

      resolve(sum)
    }, 1_000)
  })
}

function mainWithPromise() {
  lazyFunctionWithPromise()
    .then(sum => {
      console.log(`Primer resultado con promesas: ${sum}`)

      return lazyFunctionWithPromise(sum)
    })
    .then(sum2 => {
      console.log(`Segundo resultado con promesas: ${sum2}`)

      return lazyFunctionWithPromise(sum2)
    })
    .then(sum3 => {
      console.log(`Tercer resultado con promesas: ${sum3}`)

      return lazyFunctionWithPromise(sum3)
    })
    .then(sum4 => {
      console.log(`Cuarto resultado con promesas: ${sum4}`)
      return sum4
    })
    // .catch(error => {
    //   console.log('Hubo un error', error)
    // })
    // .finally(() => {
    //   console.log('Este código se ejecuta al final de todo')
    // })
}

mainWithPromise()

// Async - await

async function mainWithAsyncAwait() {
  try {
    const sum = await lazyFunctionWithPromise()
    console.log(`Primer resultado con async-await: ${sum}`)

    const sum2 = await lazyFunctionWithPromise(sum)
    console.log(`Segundo resultado con async-await: ${sum2}`)

    const sum3 = await lazyFunctionWithPromise(sum2)
    console.log(`Tercer resultado con async-await: ${sum3}`)

    const sum4 = await lazyFunctionWithPromise(sum3)
    console.log(`Cuarto resultado con async-await: ${sum4}`)
  } catch (error) {
    console.log('Hubo un error', error)
  }

  const aux = await lazyFunctionWithPromise().catch(error => {
    console.log('Hubo un error: ', error)
  })
}

mainWithAsyncAwait()
