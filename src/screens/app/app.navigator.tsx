import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../main';
import { SCREENS } from '../../constants/screen-cases';
import { About } from '../about';
import { RootStackParamList } from '../../../types';
import { THEME } from '../../constants/theme';
import { Platform } from 'react-native';
import { Post } from '../post';
import { IoniconsHeaderButton } from '../../components/icon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Favorites } from '../favorites';
import { Ionicons } from '@expo/vector-icons';
import { CreatePost } from '../create-post';

const MainStack = createStackNavigator<RootStackParamList>();
const FavoritesStack = createStackNavigator<RootStackParamList>();
const AboutStack = createStackNavigator<RootStackParamList>();
const CreatePostStack = createStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = ({ navigation }) => ({
  headerStyle : {
    backgroundColor: Platform.OS === 'web' ? THEME.MAIN_COLOR : '#fff'
  },
  headerTintColor: Platform.OS === 'web' ? '#fff' : THEME.MAIN_COLOR,
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item 
        title="Toggle Drawer" 
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const mainScreenOptions = ({ navigation }) => ({
  title: 'Main',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item 
        title="ios-camera" 
        iconName="ios-camera"
        onPress={() => navigation.navigate(SCREENS.create_post)}
      />
    </HeaderButtons>
  )
})

const postScreenOptions = ({ route }) => {
  const date = route.params.date;
  const booked = route.params.booked;
  const formatedDate = new Date(date).toLocaleDateString();

  return {
    title: `Created ${formatedDate}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item 
          title="ios-star" 
          iconName={booked ? 'ios-star' : 'ios-star-outline'}
          onPress={() => console.log('yep')}
        />
      </HeaderButtons>
    ),
  }
}

const favoritesOptions = () => ({});

const aboutOptions = () => ({
})

const createPostOptions = () => ({
})

const bottonMainTabOptions = {
  tabBarIcon: info => <Ionicons name='ios-albums' size={24} color={info.color} />
}

const bottonFavoritesTabOptions = {
  tabBarIcon: info => <Ionicons name='ios-star' size={24} color={info.color} />,
}

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name={SCREENS.main} component={Main} options={mainScreenOptions} />
      <MainStack.Screen name={SCREENS.post} component={Post} options={postScreenOptions} />
    </MainStack.Navigator>
  );
}

const FavoritesNavigator = () => {
  return (
    <FavoritesStack.Navigator screenOptions={screenOptions}>
      <FavoritesStack.Screen name={SCREENS.favorites} component={Favorites} options={favoritesOptions} />
      <FavoritesStack.Screen name={SCREENS.post} component={Post} options={postScreenOptions} />
    </FavoritesStack.Navigator>
  );
}

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen name={SCREENS.main} component={MainNavigator} options={bottonMainTabOptions} />
      <BottomTabs.Screen name={SCREENS.favorites} component={FavoritesNavigator} options={bottonFavoritesTabOptions} />
    </BottomTabs.Navigator>
  )
}

const AboutNavigator = () => {
  return (
    <AboutStack.Navigator screenOptions={screenOptions}>
      <AboutStack.Screen name={SCREENS.about} component={About} />
    </AboutStack.Navigator>
  )
}

const CreatePostNavigator = () => {
  return (
    <CreatePostStack.Navigator screenOptions={screenOptions}>
      <CreatePostStack.Screen name={SCREENS.create_post} component={CreatePost} />
    </CreatePostStack.Navigator>
  )
}

const MyDrawer = () =>  {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name={SCREENS.main} component={BottomTabsNavigator} />
      <Drawer.Screen name={SCREENS.about} component={AboutNavigator} options={aboutOptions} />
      <Drawer.Screen name={SCREENS.create_post} component={CreatePostNavigator} />
    </Drawer.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
};