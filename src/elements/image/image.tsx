const Image = ({ src, width }: { src: string; width: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img className="image" src={src} style={{ maxWidth: width }} />
    </div>
  )
}

export default Image
