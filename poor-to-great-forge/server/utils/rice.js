
function calculateRICE({ reach = 0, impact = 0, confidence = 0, effort = 1 }) {
  // RICE = (Reach * Impact * Confidence) / Effort
  // Ensure numeric values are used and validate effort
  const r = Number(reach) || 0;
  const i = Number(impact) || 0;
  const c = Number(confidence) || 0;
  const e = Number(effort);
  if (!isFinite(e) || e <= 0) throw new Error('Effort must be a finite number > 0');
  return (r * i * c) / e;
}

module.exports = { calculateRICE };
