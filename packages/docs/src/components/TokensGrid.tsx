import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasPxValue?: boolean
}

export const TokensGrid = ({ tokens, hasPxValue = false }: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasPxValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasPxValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
