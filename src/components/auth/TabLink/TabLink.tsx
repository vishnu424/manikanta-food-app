interface TabLinkProp extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  active: boolean;
  setTabActive: () => void;
}

const styles = {
  base: 'flex cursor-pointer items-center justify-center font-jekoBold capitalize h-[50px] border-b-2  text-lg w-[100px]',
  inactive: 'border-grey text-grey',
  active: 'border-primary text-primary',
};

const TabLink: React.FC<TabLinkProp> = (props: TabLinkProp) => {
  const dynamicClasses = props.active ? styles.active : styles.inactive;
  return (
    <div
      className={`${styles.base} ${dynamicClasses}`}
      title={props.label}
      onClick={props.setTabActive}
    >
      {props.label}
    </div>
  );
};

export default TabLink;
