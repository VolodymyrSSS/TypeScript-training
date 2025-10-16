import {tryCatch} from '../utils/tryCatch.ts';

export async function ComponentOne() {
    const [data, error] = await tryCatch(doSomething());

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <div>Data: {data}</div>;
}

async function doSomething() {
    return "Here I do something";
}