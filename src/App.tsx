import {
  AppRoot, PanelHeader, ScreenSpinner, SplitCol, SplitLayout,
} from '@vkontakte/vkui';
import { lazy, useEffect, useState } from 'react';
import { useActiveVkuiLocation, usePopout, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useInsets } from '@vkontakte/vk-bridge-react';
import { MAIN_SETTINGS, VIEW_SCHEDULE } from './routes';
import { getCookie } from './methods';
import { Pages } from './types';
import Suspense from './components/UI/Suspense';

const ModalRoot = lazy(() => import('./modals/ModalRoot'));
const Epic = lazy(() => import('./components/UI/Epic'));

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { view: activeView = MAIN_SETTINGS } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();

  const modals = <ModalRoot />;

  useEffect(() => {
    setIsLoading(true);

    getCookie().then((cookieValue) => {
      if (!localStorage.getItem('cookie')) {
        routeNavigator.replace('/');
        setIsLoading(false);
      } else if ((cookieValue || localStorage.getItem('cookie')) && activeView === MAIN_SETTINGS) {
        routeNavigator.replace(`/${VIEW_SCHEDULE}`);
        setIsLoading(false);
      }
    });

    setIsLoading(false);
  }, [activeView, localStorage]);

  const onStoryChange = async (currentView: Pages) => {
    try {
      routeNavigator.push(`/${currentView}`);
    } catch (e) {
      console.error(e);
    }
  };

  const routerPopout = usePopout();
  const vkBridgeInsets = useInsets() || undefined;
  return (
    <AppRoot safeAreaInsets={vkBridgeInsets}>
      <SplitLayout popout={routerPopout} modal={modals} header={<PanelHeader separator={false} />} style={{ justifyContent: 'center' }}>
        <Suspense id='Epic'>
          {isLoading && <ScreenSpinner size='large' />}
          <SplitCol width='100%' maxWidth='700px' stretchedOnMobile autoSpaced>
            <Epic onStoryChange={onStoryChange} />
          </SplitCol>
        </Suspense>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
