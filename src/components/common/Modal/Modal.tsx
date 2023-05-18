import Image from 'next/image';
import CustomModal from 'react-modal';

const customStyles = (customContentStyles = {}) => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 632,
    minWidth: 300,
    maxHeight: '90%',
    padding: 0,
    borderRadius: '10px',
    ...customContentStyles,
  },
  overlay: {
    background: 'rgba(0,0,0,.7)',
    zIndex: 1000,
  },
});

interface ModalProps {
  isOpen: boolean;
  onRequestClose?: (e: any) => void;
  children: React.ReactNode;
  headerTitle?: string;
  footerChildren?: React.ReactNode;
  customContentStyles?: any;
  customPadding?: any;
  backButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  headerTitle,
  footerChildren,
  onRequestClose,
  customContentStyles,
  customPadding,
  backButton,
  ...props
}) => {
  function onAfterOpen() {
    document.body.style.overflow = 'hidden';
  }

  function onAfterClose() {
    document.body.style.overflow = 'visible';
  }

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      shouldCloseOnEsc={true}
      preventScroll={true}
      style={customStyles(customContentStyles)}
      ariaHideApp={false}
      {...props}
    >
      <div className="min-h-12 relative">
        {backButton ? (
          <div
            className={`flex items-center bg-off-white p-3 ${
              headerTitle === ' ' && 'h-10'
            }`}
          >
            <button
              id="back"
              className="mr-2 border-r-2 px-2 pt-1"
              onClick={onRequestClose}
            >
              <Image
                id="back"
                src="/assets/icons/arrow_back.svg"
                alt="close"
                width={15}
                height={15}
              />
            </button>

            <span>{headerTitle}</span>
          </div>
        ) : (
          <>
            {headerTitle && (
              <div className="h-10 bg-off-white p-3">
                <span>{headerTitle}</span>
              </div>
            )}
            <div className="absolute right-2 top-2 ">
              <button id="close" onClick={onRequestClose}>
                <Image
                  id="close"
                  src="/assets/icons/close_icon.svg"
                  alt="close"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </>
        )}

        <div className={customPadding}>{children}</div>
        <div>
          {footerChildren && (
            <div className="border-t border-grey p-4">{footerChildren}</div>
          )}
        </div>
      </div>
    </CustomModal>
  );
};
