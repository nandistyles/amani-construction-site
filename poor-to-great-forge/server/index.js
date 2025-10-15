const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const workspaceRouter = require('./routes/workspace');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/workspaces', workspaceRouter);

app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('join-workspace', ({ workspaceId, user }) => {
    socket.join(workspaceId);
    socket.to(workspaceId).emit('user-joined', { user, socketId: socket.id });
  });

  socket.on('swot-update', (payload) => {
    const { workspaceId } = payload;
    if (workspaceId) io.to(workspaceId).emit('swot-update', payload);
  });

  socket.on('vote-cast', (payload) => {
    const { workspaceId } = payload;
    if (workspaceId) io.to(workspaceId).emit('vote-cast', payload);
  });

  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
