import React from 'react';
import Image from 'next/image';

type ToolTipProps = {
  icon?: string,
  title?: string,
  children?: any,
  contentStyle?: string,
}

const ToolTip: React.FC<ToolTipProps> = ({
  icon = '/assets/icons/info-blue.svg',
  title = '',
  children,
  contentStyle,
}) => {
  return(
	<div className="group">
    <Image
      src={icon}
      width='20'
      height='20'
      alt={title}
    />
		{title}
		<div className={`absolute flex flex-col hidden mt-1 ml-4 group-hover:flex w-[345px]`}>
			<span className={`z-10 p-4 whitespace-no-wrap ${contentStyle}`}>{children}</span>
		</div>
	</div>
  )
}

export default ToolTip;