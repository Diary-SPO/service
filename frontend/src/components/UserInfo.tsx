import {
  CSSProperties, useEffect, useState,
} from 'react';
import {
  Avatar, Gradient, Group, Header, SimpleCell, Title, Text, Div, Spinner, ScreenSpinner,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28SchoolOutline, Icon32PrometeyCircleFillRed } from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';

import { appStorageSet, getVkStorageData, getVkStorageKeys } from '../methods';
import { useModal } from '../modals/ModalContext';
import { useRateLimitExceeded } from '../hooks';
import { MODAL_COLLEGE_INFO } from '../modals/ModalRoot';
import { Organization } from '../../../shared';
import getCollegeInfo from '../methods/server/getCollegeInfo';
import useSnackbar from '../hooks/useSnackbar';

const styles: CSSProperties = {
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 32,
};

interface UserData {
  [key: string]: string;
}

const getUserAva = async (): Promise<string | null> => {
  try {
    const data = await bridge.send('VKWebAppGetUserInfo');
    if (data.id) {
      localStorage.setItem('ava', data.photo_100);
      return data.photo_100;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const UserInfo = () => {
  const [snackbar, showSnackbar] = useSnackbar();
  const routeNavigator = useRouteNavigator();
  const { openCollegeModal } = useModal();
  const getCollegeInfoFromServer = async () => {
    setIsCollegeLoading(true);
    const data = await getCollegeInfo();

    if (data === 429) {
      useRateLimitExceeded();
      return;
    }

    await routeNavigator.showModal(MODAL_COLLEGE_INFO);
    openCollegeModal(data as Organization);
    setIsCollegeLoading(false);
  };

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    middleName: '',
    org: '',
    groupName: '',
    city: '',
    group: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCollegeLoading, setIsCollegeLoading] = useState<boolean>(false);
  const [userAva, setUserAva] = useState<string | undefined>();

  const autoLogOut = async () => {
    await appStorageSet('cookie', '');
    location.reload();
    showSnackbar(null);
  };

  const openInvalidData = () => {
    showSnackbar({
      onClose: autoLogOut,
      title: 'Данные устарели',
      icon: <Icon32PrometeyCircleFillRed fill='#fff' width={32} height={32} />,
      subtitle: 'Через 10 секунд произойдет автоматический выход из аккаунта, поэтому ищите листок с паролем',
    });
  };

  const getUserInfo = async (handle?: boolean) => {
    setIsLoading(true);
    const localData = localStorage.getItem('userData');
    const avaFromStorage = localStorage.getItem('ava');
    if (localData && !handle) {
      const parsedData = JSON.parse(localData);
      if (parsedData.firstName && parsedData.lastName && parsedData.group) {
        setUserData(parsedData);
        if (avaFromStorage) {
          setUserAva(avaFromStorage);
        }
        setIsLoading(false);
        return;
      }
    }

    const keys = await getVkStorageKeys();
    const data = await getVkStorageData(keys);
    const extractedData: Partial<UserData> = data.keys.reduce((acc, item) => {
      if (
        (item.key === 'firstName' && item.value === ' ')
        || (item.key === 'lastName' && item.value === '')
        || (item.key === 'group' && item.value === '')
      ) {
        openInvalidData();
      }

      acc[item.key] = item.value;
      return acc;
    }, {} as UserData);

    const ava = await getUserAva();

    if (ava) {
      setUserAva(ava);
    }

    setUserData({
      firstName: extractedData.firstName || '',
      lastName: extractedData.lastName || '',
      middleName: extractedData.middleName || '',
      org: extractedData.org || '',
      groupName: extractedData.groupName || '',
      city: extractedData.city || '',
      group: extractedData.group || '',
    });

    localStorage.setItem('userData', JSON.stringify(extractedData));

    setIsLoading(false);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (isLoading) {
    return (
      <Div>
        <Spinner />
      </Div>
    );
  }

  return (
    <Group>
      <Gradient mode='tint' style={styles}>
        <Avatar size={96} src={userAva} />
        <Title style={{ marginBottom: 8, marginTop: 20 }} level='2' weight='2'>
          {userData.lastName}
          {' '}
          {userData.firstName}
          {' '}
          {userData.middleName}
        </Title>
        <Text
          style={{
            marginBottom: 24,
            color: 'var(--vkui--color_text_secondary)',
          }}
        >
          Студент (
          {userData.group}
          )
        </Text>
      </Gradient>
      <Group mode='plain'>
        <Header>Учебное заведение</Header>
        {isCollegeLoading && <ScreenSpinner />}
        <SimpleCell before={<Icon28SchoolOutline />} subtitle={userData.city} onClick={getCollegeInfoFromServer}>
          {userData.org}
        </SimpleCell>
      </Group>
      {snackbar}
    </Group>
  );
};

export default UserInfo;
