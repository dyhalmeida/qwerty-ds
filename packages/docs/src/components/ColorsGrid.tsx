import { colors } from '@qwerty-ui/tokens'

export const ColorsGrid = () => {
  const pattern = /\b(?:white|gray100|gray200|gray400)\b/

  return Object.entries(colors).map(([key, value]) => (
    <div key={value} style={{ backgroundColor: value, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: pattern.test(key) ? '#000000' : '#FFFFFF',
        }}
      >
        <strong>${key}</strong>
        <span>{value}</span>
      </div>
    </div>
  ))
}
