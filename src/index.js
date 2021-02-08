/**
 * @usage:
 * Transforms.setNodes(editor, { type:'list-item' })
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'list-item',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'li') {
        return jsx('element', { type: 'list-item' }, children);
      }
    },
    output: ({ style }, children) => {
      return `<li${style}>${children}</li>`;
    }
  },
  render: (_, { attributes, children, element }) => {
    return (
      <li {...attributes}>
        {children}
      </li>
    );
  }
});
