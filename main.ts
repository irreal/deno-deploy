addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
  console.log('test 123');
});
