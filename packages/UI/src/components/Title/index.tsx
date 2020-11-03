import React, { PropsWithChildren } from 'react';

type Prop = {
  children: Element;
};

const Title = (prop: PropsWithChildren<any>) => <div>{prop.children}</div>;
export default Title;
