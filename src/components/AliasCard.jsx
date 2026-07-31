import { useState } from 'react'

const ALIAS = 'KINGRESTOBAR'
const TITULAR = 'HECTOR RAUL BELTRAN'

export default function AliasCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ALIAS)
    } catch {
      const el = document.createElement('textarea')
      el.value = ALIAS
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <span style={styles.label}>ALIAS</span>
        <span style={styles.alias}>{ALIAS}</span>
        <button onClick={handleCopy} style={{ ...styles.copyBtn, ...(copied ? styles.copyBtnActive : {}) }}>
          {copied ? <><CheckIcon /> ALIAS COPIADO</> : <><CopyIcon /> COPIAR ALIAS</>}
        </button>
      </div>
      <div style={styles.card}>
        <span style={styles.label}>TITULAR</span>
        <span style={styles.titular}>{TITULAR}</span>
      </div>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const styles = {
  wrapper: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: {
    background: 'linear-gradient(160deg, #1e1b15 0%, #161310 100%)',
    border: '1px solid rgba(200,168,75,0.18)',
    borderRadius: '14px',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  label: { fontSize: '0.62rem', letterSpacing: '3.5px', color: '#c8a84b', fontWeight: '600' },
  alias: {
    fontSize: '2.1rem', fontWeight: '700', letterSpacing: '4px',
    color: '#ffffff', textAlign: 'center',
    fontFamily: "'Trebuchet MS', 'Arial Narrow', Arial, sans-serif",
  },
  titular: { fontSize: '1rem', fontWeight: '400', color: '#e8e0d0', letterSpacing: '2px', textAlign: 'center' },
  copyBtn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    width: '100%', padding: '14px 20px', marginTop: '4px',
    background: 'linear-gradient(135deg, #c8a84b 0%, #9a7420 100%)',
    color: '#ffffff', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '2.5px',
    borderRadius: '10px', border: 'none', cursor: 'pointer',
  },
  copyBtnActive: { background: 'linear-gradient(135deg, #5a9e5a, #3d7a3d)' },
}
