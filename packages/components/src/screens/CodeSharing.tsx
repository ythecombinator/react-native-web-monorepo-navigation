import React from 'react'

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { AppHeader } from '../AppHeader'
import { Link } from '../Link'
import { useNavigation, useRoute } from '../utils/navigation'
import { routes } from '../utils/router'
import { styles } from './styles'

export function CodeSharing() {
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();

  console.log(params);

  return (
    <>
      <SafeAreaView style={styles.scrollView}>
        <AppHeader />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Code sharing using Monorepo
              </Text>
              <Text style={styles.sectionDescription}>
                Edit{" "}
                <Text style={styles.highlight}>
                  packages/components/App.tsx
                </Text>
                to change this screen and then come back to see your edits (in
                the phone or the browser).
              </Text>

              {/* Navigate using <Link/> */}
              <Link
                path={routes.features.webSupport.path}
                params={{ paramComingFromCodeSharingRoute: 1 }}
              >
                <Text style={styles.sectionLink}>
                  Link to "Web support via react-native-web"
                </Text>
              </Link>

              {/* Navigate using navigate() */}
              <TouchableOpacity
                style={styles.button}
                accessibilityRole="button"
              >
                <Button
                  title={`Navigate to "Web support via react-native-web"`}
                  onPress={() => {
                    navigate(routes.features.webSupport.path, {
                      paramComingFromCodeSharingRoute: 2
                    });
                  }}
                />
              </TouchableOpacity>

              {/* Navigate using goBack() */}
              <TouchableOpacity
                style={styles.button}
                accessibilityRole="button"
              >
                <Button title="Go back" onPress={goBack} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
