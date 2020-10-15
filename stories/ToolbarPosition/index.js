/* @flow */

import React from 'react';
import { Editor } from '../../src';

const ToolbarPosition = () => (<div className="rdw-storybook-root">
  <Editor
    toolbarClassName="rdw-storybook-toolbar"
    wrapperClassName="rdw-storybook-wrapper"
    editorClassName="rdw-storybook-editor"
    toolbarPosition="bottom"
  />
</div>);

export default ToolbarPosition;
