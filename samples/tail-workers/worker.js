// Copyright (c) 2017-2023 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0

export default {
  async fetch(req, env) {
    const resp = await fetch("https://google.com");
    console.log({ status: resp.status });

    console.log('hello to the tail worker!');
    reportError('boom');
    reportError(new Error('test'));
    return new Response("Hello World\n");
  }
};
