import { createHash } from 'crypto'

const sha256 = (key) => {
  return createHash('sha256').update(key).digest('hex')
}

export default sha256