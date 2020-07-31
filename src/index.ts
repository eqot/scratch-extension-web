import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Cast from 'scratch-vm/src/util/cast'

import icon from '@mdi/svg/svg/earth.svg'

class WebExtension {
  private runtime: Runtime

  constructor(runtime: Runtime) {
    this.runtime = runtime
  }

  getInfo() {
    return {
      id: 'web',
      name: 'Web',
      menuIconURI: icon,
      blockIconURI: icon,
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',

      blocks: [
        {
          opcode: 'goto',
          blockType: BlockType.COMMAND,
          text: 'go to [URL]',
          arguments: {
            URL: {
              type: ArgumentType.STRING,
              defaultValue: 'www.google.co.jp'
            }
          }
        }
      ]
    }
  }

  goto(args: any) {
    let url: string = Cast.toString(args.URL)
    if (!url.startsWith('https://')) {
      url = `https://${url}`
    }

    window.location.href = url
  }
}

export default WebExtension
