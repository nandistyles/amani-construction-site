import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(window.location.origin.replace(/3000/, ''), { autoConnect: false });

function HedgehogAudit({ data, onChange }) {
  const [local, setLocal] = useState(data || { passion: 5, economics: 5, strengths: [] });

  useEffect(() => setLocal(data), [data]);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Hedgehog Audit</h3>
      <div className="mt-3">
        <label className="block">Passion: {local.passion}</label>
        <input type="range" min="1" max="10" value={local.passion}
          onChange={(e) => { const v = Number(e.target.value); setLocal({ ...local, passion: v }); onChange({ ...local, passion: v }); }} />
      </div>
      <div className="mt-3">
        <label className="block">Economics: {local.economics}</label>
        <input type="range" min="1" max="10" value={local.economics}
          onChange={(e) => { const v = Number(e.target.value); setLocal({ ...local, economics: v }); onChange({ ...local, economics: v }); }} />
      </div>
    </div>
  );
}

function Workspace() {
  const [workspace, setWorkspace] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Lazy connect to server socket
    socket.io.opts.path = '/socket.io';
    socket.connect();
    socket.on('connect', () => console.log('connected', socket.id));
    socket.on('swot-update', (p) => console.log('swot-update', p));
    socket.on('user-joined', (u) => console.log('user-joined', u));
    return () => { socket.disconnect(); };
  }, []);

  async function createWorkspace() {
    const res = await fetch('/api/workspaces', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ companyName: 'Acme Corp', creatorId: 'user-1' }) });
    const json = await res.json();
    setWorkspace(json.workspace);
  }

  function joinWS() {
    if (!workspace) return alert('Create workspace first');
    socket.emit('join-workspace', { workspaceId: workspace.workspaceId, user: { userId: 'user-1', name: 'Demo User' } });
    setJoined(true);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Poor-to-Great Forge — Workspace</h1>
      {!workspace && <div className="mt-6"><button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={createWorkspace}>Create Demo Workspace</button></div>}

      {workspace && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold">{workspace.companyName} <small className="text-xs text-gray-500">phase: {workspace.phase}</small></h2>
              <p className="text-sm text-gray-600">Workspace ID: {workspace.workspaceId}</p>
              <div className="mt-3">
                {!joined ? <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={joinWS}>Join Live</button> : <span className="text-sm text-green-700">Connected</span>}
              </div>
            </div>

            <div className="mt-4">
              <HedgehogAudit data={workspace.prep.hedgehogAudit} onChange={(d) => console.log('hedgehog', d)} />
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">PESTLE</h3>
              <p className="text-sm text-gray-600 mt-2">Editable grid placeholder</p>
            </div>

            <div className="mt-4 bg-white p-4 rounded shadow">
              <h3 className="font-semibold">SWOT Board (Live)</h3>
              <p className="text-sm text-gray-600 mt-2">Drag-and-drop board placeholder — real-time via Socket.io/Yjs</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return <Workspace />;
}
