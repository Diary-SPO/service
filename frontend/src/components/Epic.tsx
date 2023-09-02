import {FC, useEffect, useState} from 'react';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { useAdaptivityConditionalRender } from '@vkontakte/vkui';
import { Epic as VKUIEpic } from '@vkontakte/vkui/dist/components/Epic/Epic';
import {
  VIEW_CONTACTS, VIEW_SCHEDULE, VIEW_PROJECTS, VIEW_SETTINGS, MAIN_SETTINGS,
} from '../routes';
import { Pages } from '../types';

import Tabbar from './Tabbar';
import Suspense from './Suspense';
import {
  Contacts, LoginForm, Schedule, Projects, Settings,
} from '../views';
import bridge from "@vkontakte/vk-bridge";

interface IEpic {
  onStoryChange: (current: Pages) => void
}

const Epic: FC<IEpic> = ({ onStoryChange }) => {
  const {
    view: activeView = 'profile' as Pages,
  } = useActiveVkuiLocation();
  const { viewWidth } = useAdaptivityConditionalRender();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  
  useEffect(() => {
    bridge.send('VKWebAppStorageGet', {
      keys: ['cookie'],
    })
      .then(async (data) => {
        if (data.keys[0].value) {
          setIsLogged(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <VKUIEpic
      activeStory={activeView}
      tabbar={
        viewWidth.tabletMinus
        && isLogged && <Tabbar onStoryChange={onStoryChange} activeView={activeView as Pages} />
      }
    >
      <Suspense id={VIEW_SCHEDULE} mode='screen'>
        <Schedule id={VIEW_SCHEDULE} />
      </Suspense>
      <Suspense id={VIEW_PROJECTS} mode='screen'>
        <Projects id={VIEW_PROJECTS} />
      </Suspense>
      <Suspense id={VIEW_CONTACTS} mode='screen'>
        <Contacts id={VIEW_CONTACTS} />
      </Suspense>
      <Suspense id={VIEW_SETTINGS} mode='screen'>
        <Settings id={VIEW_SETTINGS} />
      </Suspense>
      <Suspense id={MAIN_SETTINGS} mode='screen'>
        <LoginForm id={MAIN_SETTINGS} />
      </Suspense>
    </VKUIEpic>
  );
};

export default Epic;
