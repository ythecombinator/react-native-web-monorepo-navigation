import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { AppHeader } from '../AppHeader'
import { Link } from '../Link'
import { routesMap } from '../utils/router'
import { styles } from './styles'

export function CodeSharing() {
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
              <Link routeName={routesMap.features.webSupport.path}>
                <Text style={styles.sectionLink}>
                  Check "Web support via react-native-web"
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
