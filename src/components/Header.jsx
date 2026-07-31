export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <img src="/logo.png.jpg" alt="KING Resto-Bar" style={styles.logo} />
      </div>

      <div style={styles.divider}>
        <span style={styles.dividerLine} />
        <span style={styles.dividerText}>PAGO POR TRANSFERENCIA</span>
        <span style={{ ...styles.dividerLine, background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
      </div>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '28px',
  },
  logoWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    mixBlendMode: 'screen',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #c9a84c)',
  },
  dividerText: {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    color: '#c9a84c',
    whiteSpace: 'nowrap',
    fontWeight: '600',
  },
}
