export default function ActionButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.btn}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)'; e.currentTarget.style.background = '#222222' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.background = '#1c1c1c' }}
    >
      <span style={styles.iconWrap}>{icon}</span>
      <span style={styles.label}>{label}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </a>
  )
}

const styles = {
  btn: {
    display: 'flex', alignItems: 'center', gap: '14px',
    background: 'linear-gradient(160deg, #1e1b15 0%, #161310 100%)',
    border: '1px solid rgba(200,168,75,0.18)',
    borderRadius: '14px', padding: '18px 20px',
    color: '#ffffff', textDecoration: 'none',
    transition: 'background 0.2s, border-color 0.2s', cursor: 'pointer',
  },
  iconWrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  label: { flex: 1, fontSize: '0.82rem', fontWeight: '500', letterSpacing: '2.5px', color: '#e8e0d0' },
}
