export function submitForm(answer: string): Promise<void> {
    // pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima' // validate the answer
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!')); // reject with an error
        } else {
          resolve(); // resolve with nothing (void)
        }
      }, 1500); // simulate delay
    });
  }
  