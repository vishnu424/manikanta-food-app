import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import LinkText from '@/components/common/LinkText/LinkText';
import { Modal } from '@/components/common/Modal/Modal';
import ProductCategoryTileContainer from '@/components/common/ProductCategoryTileContainer/ProductCategoryTileContainer';
import { LandingPageDataProvider } from '@/components/plasmic/LandingPageDataProvider';
import { useDebouncedUndo } from '@/hooks';

const ModalFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-blueberry">Clear Filters</span>
      <Button theme="primary">Save</Button>
    </div>
  );
};

const UndoBlock = () => {
  const { undo, showUndo, call } = useDebouncedUndo(() => {
    console.log('CALLING API');
  });
  return (
    <div className="">
      <Button onClick={call} theme="primary" type="submit">
        Call API
      </Button>
      {showUndo && (
        <div className="">
          <Button onClick={undo} theme="tertiary" type="button">
            Undo
          </Button>
        </div>
      )}
    </div>
  );
};

export default function TestPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showUndoBlock, setShowUndoBlock] = useState(true);
  return (
    <LandingPageDataProvider slug="oat-slice">
      <div>
        <div className="">
          <ProductCategoryTileContainer />
        </div>

        {/* <div className="">
          <DeliveryBanner />
        </div> */}

        <div className="mb-8 space-y-2">
          <div>
            <Button
              onClick={() => setShowUndoBlock(!showUndoBlock)}
              theme="primary"
              type="submit"
            >
              Toggle Block
            </Button>
          </div>
          {showUndoBlock && <UndoBlock />}
          <div>
            <LinkText text="Hi" hasArrow={true} link="menu" />
          </div>
          <div className="">
            <Button theme="primary" link="menu" type="submit">
              primary
            </Button>
          </div>
          <Button theme="secondary" type="button">
            secondary
          </Button>
          <Button theme="tertiary">tertiary</Button>
          <Button theme="primary" disabled>
            primary disabled
          </Button>
          <Button theme="secondary" disabled>
            secondary disabled
          </Button>
          <Button theme="tertiary" disabled>
            tertiary disabled
          </Button>
        </div>
        <div className="space-y-2">
          <p>Modal Example</p>
          <Button theme="primary" type="button" onClick={() => setIsOpen(true)}>
            Open Modal Default
          </Button>
          <Button
            theme="primary"
            type="button"
            onClick={() => setIsOpen2(true)}
          >
            Open Modal HeaderTitle and Footer
          </Button>
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          Test
        </Modal>
        <Modal
          isOpen={isOpen2}
          onRequestClose={() => setIsOpen2(false)}
          headerTitle={'Title'}
          footerChildren={<ModalFooter />}
        >
          Test
        </Modal>
      </div>
    </LandingPageDataProvider>
  );
}
