import test from 'ava';
import LogSuppress from 'log-suppress';
import http from 'ava-http';
require('../server');

LogSuppress.init(console);

test('Get only route', async (t) => {
    const res = await http.get('http://localhost:8080/');
    t.true(typeof res === 'string');
});