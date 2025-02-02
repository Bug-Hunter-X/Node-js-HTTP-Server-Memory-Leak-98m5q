# Node.js HTTP Server Memory Leak

This repository demonstrates a common memory leak scenario in Node.js HTTP servers.  The `server.js` file contains a simple server that responds with a large amount of data.  Without proper handling, this can lead to significant memory consumption and potential server crashes under heavy load.  The solution file, `serverSolution.js`, demonstrates how to address this memory leak using streaming.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Send multiple requests to `http://localhost:3000` using a tool like `curl` or a browser.
4. Monitor memory usage (e.g., using `top` or a system monitoring tool).

You'll observe the memory usage increasing with each request in the original code. The solution avoids this.

## Solution

The `serverSolution.js` file shows a solution using streams. Instead of creating a large string in memory, the response is streamed in chunks.