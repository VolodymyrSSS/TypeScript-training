export default function FormWithStatusArgs({
    status = 'error'
  }) {
    if (status === 'success') {
      return <h2 style={{color:'green'}}>That's right!</h2>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                <b>Question: </b>In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea disabled={
                    status === 'submitting'
                } />
                <br />

                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>

                {status === 'error' &&
                    <h3 style={{color:'red'}}>
                        Good guess but a wrong answer. Try again!
                    </h3>
                }
            </form>
        </>
    );
  }
  