import * as React from 'react'
import Giscus from '@giscus/react'

const id = 'inject-comments'

const Comments = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id={id} className="giscus-container">
      {mounted && (
        <Giscus
          id={id}
          theme="transparent_dark"
          repo="zayez/zayez.github.io"
          repoId="R_kgDOL3iXUA"
          category="Announcements"
          categoryId="DIC_kwDOL3iXUM4CfT0h"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
      )}
    </div>
  )
}

export default Comments
