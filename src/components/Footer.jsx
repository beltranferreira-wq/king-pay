export default function Footer() {
  return (
    <footer style={styles.footer}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
      <span style={styles.text}>Transferencia segura</span>
    </footer>
  )
}

const styles = {
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '32px' },
  text: { fontSize: '0.7rem', color: '#666', letterSpacing: '1px' },
}
