import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import FirstProgram from './components/FirstProgram';
import { IFirstProgramProps } from './components/IFirstProgramProps';

export default class FirstProgramWebPart extends BaseClientSideWebPart<IFirstProgramProps> {
  public render(): void {
    const element: React.ReactElement<IFirstProgramProps> = React.createElement(
      FirstProgram,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }
}

