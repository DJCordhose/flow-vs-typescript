// https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/

function delay(milliseconds: number, result: string) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(result), milliseconds);
    });
}

function delayReject(milliseconds: number, result: string) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => reject(`no way`), milliseconds);
    });
}


delay(1000, 'hiho')
    .then(result => console.log(`result=${result}`));

// don't forget .catch
delayReject(1000, 'hiho')
    .then(result => console.log(`result=${result}`))
    .catch(error => console.log(`error=${error}`));

async function async_await() {
    const result = await delay(1000, 'hiho');
    console.log(`result=${result}`);
}
async_await();


// async function dramaticWelcomeAsync() {
//     console.log("Hello");
//
//     for (let i = 0; i < 3; i++) {
//         // same
//         // delay(500).then(() => console.log('.'));
//         await delay(500);
//         // try {
//         //     const result = await fetch('http://spiegel.de');
//         //
//         // } catch (ex) {
//         //     console.error(ex);
//         // }
//         console.log(".");
//     }
//
//     console.log("World!");
// }
//
// dramaticWelcomeAsync();