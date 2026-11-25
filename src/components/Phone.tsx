/** A simulator screenshot (1290×2796, saved at 860×1864) in a phone frame. */
export default function Phone({
  name,
  alt,
  className = '',
  eager = false,
}: {
  name: string
  alt: string
  className?: string
  eager?: boolean
}) {
  return (
    <div className={`phone ${className}`}>
      <img
        src={`/screens/${name}.webp`}
        alt={alt}
        width={860}
        height={1864}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
