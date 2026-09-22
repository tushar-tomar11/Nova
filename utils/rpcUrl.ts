/** Rate-limited public RPC. Override in .env.local / Vercel — never commit API keys. */
export const PUBLIC_MAINNET_RPC = 'https://api.mainnet-beta.solana.com'

export const DEFAULT_MAINNET_RPC =
  process.env.NEXT_PUBLIC_MAINNET_RPC ||
  process.env.NEXT_PUBLIC_ENDPOINT ||
  PUBLIC_MAINNET_RPC

export const TRITON_DEDICATED_URL = process.env.NEXT_PUBLIC_TRITON_TOKEN
  ? `https://mango.rpcpool.com/${process.env.NEXT_PUBLIC_TRITON_TOKEN}`
  : DEFAULT_MAINNET_RPC

const LEGACY_MANGO_SHARED_RPC =
  'https://mango.rpcpool.com/946ef7337da3f5b8d3e4a34e7f88'

export function isLegacyHostedRpc(url?: string | null): boolean {
  if (!url || typeof url !== 'string' || !url.trim()) return true
  const trimmed = url.trim()
  if (trimmed === DEFAULT_MAINNET_RPC) return false
  if (trimmed === PUBLIC_MAINNET_RPC || trimmed === LEGACY_MANGO_SHARED_RPC) {
    return true
  }
  if (trimmed.includes('rpc.mngo.cloud')) return true
  if (
    trimmed.includes('mango.rpcpool.com') &&
    !process.env.NEXT_PUBLIC_TRITON_TOKEN
  ) {
    return true
  }
  return false
}

export function resolveStoredMainnetRpc(stored?: string | null): string {
  return isLegacyHostedRpc(stored) ? DEFAULT_MAINNET_RPC : stored!.trim()
}