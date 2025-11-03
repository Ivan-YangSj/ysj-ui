import React from "react";
import { Button, ButtonProps } from "antd";

// 定义接受参数，为表格中罗列属性
export interface IProps extends ButtonProps {
  text?: string;
}

const MyButton = (props: IProps) => {
  return <Button {...props}><span>123</span>{props.text}</Button>;
}

export default React.memo(MyButton);