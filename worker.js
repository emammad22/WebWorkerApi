
self.onmessage = async function (message) {
    if (message.data.type === 'GET') {
        const response = await fetch(message.data.action);
        const data = await response.json();

        postMessage(data);
    } else {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }

        postMessage(sum);
    }
}

