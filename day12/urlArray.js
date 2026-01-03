const http = require('http');
const url = require('url');

// Sample todos array
const todos = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Clean the house" },
    { id: 3, task: "Pay bills" },
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const parts = pathname.split('/').filter(Boolean); // split path and remove empty parts

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (parts[0] === 'todos') {
        if (parts.length === 1) {
            // If path is /todos, return all todos as JSON
            res.end(JSON.stringify(todos));
        } else if (parts.length === 2) {
            // If path is /todos/<id>, return specific todo item
            const id = parseInt(parts[1], 10);
            const todo = todos.find(t => t.id === id);

            if (todo) {
                // Show the todo as HTML for this case
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>Todo #${todo.id}</h1><p>${todo.task}</p>`);
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Todo not found" }));
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Invalid path" }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Not found" }));
    }
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
