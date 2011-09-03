
onmessage = function (event) {
    var i = event.data * event.data;
    while (i < 100000000) { ++i; }
    postMessage(i);
}
