const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

// Simple in-memory store for MVP. Replace with Replit DB or Postgres later.
const store = { workspaces: {} };

const workspaceSchema = Joi.object({
  companyName: Joi.string().min(2).required(),
  creatorId: Joi.string().required()
});

router.post('/', (req, res) => {
  const { error, value } = workspaceSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const id = uuidv4();
  const workspace = {
    workspaceId: id,
    companyName: value.companyName,
    phase: 'prep',
    users: [{ userId: value.creatorId, role: 'facilitator', joinedAt: Date.now() }],
    prep: {},
    scanning: {},
    challenges: {},
    newStrategy: {},
    synthesis: {},
    report: {},
    metrics: {},
    history: []
  };

  store.workspaces[id] = workspace;
  return res.json({ workspace });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const workspace = store.workspaces[id];
  if (!workspace) return res.status(404).json({ error: 'Not found' });
  res.json({ workspace });
});

router.post('/:id/phase/unlock', (req, res) => {
  const id = req.params.id;
  const { nextPhase, userId } = req.body;
  const workspace = store.workspaces[id];
  if (!workspace) return res.status(404).json({ error: 'Not found' });

  // simple role check: only facilitators can unlock
  const user = workspace.users.find((u) => u.userId === userId);
  if (!user || user.role !== 'facilitator') return res.status(403).json({ error: 'Forbidden' });

  const phases = ['prep', 'scanning', 'challenges', 'new_strategy', 'synthesis', 'report'];
  const currentIndex = phases.indexOf(workspace.phase);
  const nextIndex = phases.indexOf(nextPhase);
  if (nextIndex === -1) return res.status(400).json({ error: 'Invalid phase' });
  if (nextIndex !== currentIndex + 1) return res.status(400).json({ error: 'Phase progression violation' });

  workspace.phase = nextPhase;
  workspace.history.push({ type: 'phase-unlock', data: { by: userId, phase: nextPhase }, timestamp: Date.now() });
  res.json({ workspace });
});

module.exports = router;
