import * as React from 'react';

export interface IGraph extends React.Component<{
  readonly id: string; // name is mandatory, if no name is defined rd3g will throw an error
  data: any;
  config: any;
  onClickNode?: Function;
  onDoubleClickNode?: Function;
  onRightClickNode?: Function;
  onClickGraph?: Function;
  onClickLink?: Function;
  onRightClickLink?: Function;
  onMouseOverNode?: Function;
  onMouseOutNode?: Function;
  onMouseOverLink?: Function;
  onMouseOutLink?: Function;
}, any> {
}

export interface IGraphNode {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
}

export interface IBaseLink {
  readonly source: string;
  readonly target: string;
}

export interface IGraphLink extends IBaseLink {
  readonly fontColor?: string;
  readonly fontSize?: number;
  readonly labelProperty?: string | ((link: IBaseLink) => string);
  readonly mouseCursor?: string;
  readonly renderLabel?: boolean;
}

