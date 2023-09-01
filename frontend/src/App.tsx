import {
  AppRoot, ConfigProvider,
  PanelHeader,
  Platform,
  SplitCol,
  SplitLayout,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';
import { useCallback, useState } from 'react';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import bridge from '@vkontakte/vk-bridge';

import { VIEW_SCHEDULE } from './routes';
import Suspense from './components/Suspense';
import { Pages } from './types';
import Sidebar from './components/Sidebar';
import Epic from './components/Epic';
import { getCookie } from './methods/getCookie';

const App = () => {
  const platform = usePlatform();
  const isVKCOM = platform !== Platform.VKCOM;

  const { viewWidth } = useAdaptivityConditionalRender();
  const { view: activeView = VIEW_SCHEDULE } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();

  const onStoryChange = async (currentView: Pages) => {
    if (!getCookie()) {
      await routeNavigator.push('/');
    } else {
      await routeNavigator.push(`/${currentView}`);
    }
  };

  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleAppearance = useCallback(() => {
    const newAppearance = appearance === 'light' ? 'dark' : 'light';
    setAppearance(newAppearance);
    localStorage.setItem('theme', newAppearance);
  }, [appearance]);

  bridge.send('VKWebAppStorageGet', {
    keys: ['cookie'],
  })
    .then(async (data) => {
      if (!data.keys[0].value) {
        await routeNavigator.push('/');
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <ConfigProvider appearance={appearance}>
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />} style={{ justifyContent: 'center' }}>
          {viewWidth.tabletPlus && (
          <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
            {isVKCOM && <PanelHeader /> }
            <Suspense id='sidebar'>
              <Sidebar activeView={activeView as Pages} onStoryChange={onStoryChange} />
            </Suspense>
          </SplitCol>
          )}
          <SplitCol width='100%' maxWidth='700px' stretchedOnMobile autoSpaced>
            <Epic onStoryChange={onStoryChange} toggleAppearance={toggleAppearance} />
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  );
};

export default App;
